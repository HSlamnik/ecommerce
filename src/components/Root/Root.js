import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import routes from 'utils/routes';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { selectCurrentUser } from 'redux/User/UserSelectors';

const Root = ({ currentUser }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Suspense fallback={<Loader />}>
          <Header />
        </Suspense>

        <Box className={classes.content}>
          <Suspense fallback={<Loader />}>
            <Switch>
              {Object.values(routes).map((r, i) => {
                return r.path === '/login' && currentUser ? (
                  <Route key={i} path="/login">
                    <Redirect to={{ pathname: routes.HOME.path }} />
                  </Route>
                ) : (
                  <Route key={i} path={r.path} exact={r.exact} component={r.component} />
                );
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Root);
