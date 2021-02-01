import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import routes from 'utils/routes';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const Root = ({ currentUser }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Suspense fallback={<Loader />}>
          <Header currentUser={currentUser} />
        </Suspense>

        <Box className={classes.content}>
          <Suspense fallback={<Loader />}>
            <Switch>
              {Object.values(routes).map((r, i) => {
                return <Route key={i} path={r.path} exact={r.exact} component={r.component} />;
              })}
              {/* if no match for the route - redirect to home */}
              <Route path="*">
                <Redirect to={{ pathname: routes.HOME.path }} />
              </Route>
            </Switch>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: '100vh',
      display: 'flex',
    },
    container: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column',
    },
    content: {
      flex: '1 1 0%',
      backgroundColor: '#ffffff',
      padding: '20px 60px',
    },
  };
});

export default Root;
