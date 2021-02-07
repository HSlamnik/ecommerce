import { lazy } from 'react';
import { matchPath } from 'react-router-dom';
import { generatePath } from 'react-router';

const Home = lazy(() => import('components/Home/Home'));
const Shop = lazy(() => import('components/Shop/Shop'));
const Login = lazy(() => import('components/Login/Login'));

const Hats = lazy(() => import('components/Hats/Hats'));
const Jackets = lazy(() => import('components/Jackets/Jackets'));
const Sneakers = lazy(() => import('components/Sneakers/Sneakers'));
const Womens = lazy(() => import('components/Womens/Womens'));
const Mens = lazy(() => import('components/Mens/Mens'));

const routes = {
  HOME: {
    id: 'HOME',
    path: '/home',
    exact: true,
    component: Home,
    config: {
      topNavigation: {
        name: 'HOME',
        isButtonLink: true,
      },
    },
  },
  SHOP: {
    id: 'SHOP',
    path: '/shop',
    exact: true,
    component: Shop,
    config: {
      topNavigation: {
        name: 'SHOP',
        isButtonLink: true,
      },
    },
  },
  LOGIN: {
    id: 'LOGIN',
    path: '/login',
    exact: true,
    component: Login,
    config: {
      topNavigation: {
        name: 'LOGIN',
        isButtonLink: true,
      },
    },
  },
  HATS: {
    id: 'HATS',
    path: '/hats',
    exact: true,
    component: Hats,
  },
  JACKETS: {
    id: 'JACKETS',
    path: '/jackets',
    exact: true,
    component: Jackets,
  },
  SNEAKERS: {
    id: 'SNEAKERS',
    path: '/sneakers',
    exact: true,
    component: Sneakers,
  },
  WOMENS: {
    id: 'WOMENS',
    path: '/womens',
    exact: true,
    component: Womens,
  },
  MENS: {
    id: 'MENS',
    path: '/mens',
    exact: true,
    component: Mens,
  },
};

export const flattenRoutes = (routes) =>
  Object.values(routes)
    .map((route) => [route.children ? flattenRoutes(route.children) : [], route])
    .flat(Infinity);

/**
 * Find a matching route in all application routes
 * @param {String} pathname     Path to search for in routes.
 * @param {Boolean} exact       Find exact match or first partial match.
 */
export function matchRoute(pathname, exact) {
  return Object.values(routes).find((r) =>
    matchPath(pathname, {
      path: r.path,
      exact: exact == null ? r.exact : exact, // if exact flag provided use it otherwise use as specified in route r
    })
  );
}

/**
 * Generate path for given route id or route. Pass params for rouutes
 * which contain dynamic parts like query params
 * @param {String|Object} routeOrRouteId    Route ID as string or complete Route object to match.
 * @param {Object} params                   Object containing data for query parameters included in matched route.
 */

export function generateLink(routeOrRouteId, params) {
  let route;
  if (typeof routeOrRouteId === 'string') {
    route = routes[routeOrRouteId];
  } else if (routeOrRouteId.hasOwnProperty('id') && routes[routeOrRouteId.id]) {
    route = routeOrRouteId;
  }

  if (!route) {
    console.error(`Route not found error. Can't generate link for unknown route ${routeOrRouteId}`);
    return '#';
  }
  return generatePath(route.path, params);
}

export default routes;
