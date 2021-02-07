import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { auth } from 'firebase/FirebaseUtils';
import routes from 'utils/routes';

const Navigation = ({ isMobileMenu, currentUser }) => {
  const classes = useStyles();
  const NAVIGATION_ITEMS = Object.values(routes)
    .map((value) => {
      if (value.config && value.config.topNavigation) {
        return { ...value.config.topNavigation, path: value.path };
      }
      return null;
    })
    .filter((item) => item !== null);
  //.reverse();

  return (
    <>
      {isMobileMenu ? (
        <div className={classes.mobileMenuContainer}>
          {NAVIGATION_ITEMS.map((item, index) => {
            if (item.isButtonLink) {
              return item.name === 'LOGIN' && currentUser ? (
                <div key={index} className={classes.buttonContainer} onClick={() => auth.signOut()}>
                  <div style={{ cursor: 'pointer' }} className={classes.navItem}>
                    SIGN OUT
                  </div>
                </div>
              ) : (
                <Link className={classes.buttonContainer} key={index} to={item.path}>
                  <div className={classes.navItem}>{item.name}</div>
                </Link>
              );
            }
            return (
              <Link className={classes.mobileMenuItem} key={index} to={item.path}>
                {item.name}
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={classes.navItemsContainer}>
          {NAVIGATION_ITEMS.map((item, index) => {
            if (item.isButtonLink) {
              return item.name === 'LOGIN' && currentUser ? (
                <div key={index} className={classes.buttonContainer} onClick={() => auth.signOut()}>
                  <div style={{ cursor: 'pointer' }} className={classes.navItem}>
                    SIGN OUT
                  </div>
                </div>
              ) : (
                <Link className={classes.buttonContainer} key={index} to={item.path}>
                  <div className={classes.navItem}>{item.name}</div>
                </Link>
              );
            }
            return (
              <Link className={classes.mobileMenuItem} key={index} to={item.path}>
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  navItemsContainer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    width: '145px',
    height: '48px',
    borderRadius: '8px',
    //border: 'solid 2px #606060',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.19,
    letterSpacing: 'normal',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      margin: '2% 3.5%',
    },

    '&:hover': {
      //border: 'solid 2px #989898',
      '& $navItem': {
        color: '#989898',
      },
    },

    '&:focus': {
      '& $navItem': {
        color: '#989898',
      },
    },
  },

  navItem: {
    display: 'inline-flex',
    alignItems: 'center',
    borderColor: 'transparent',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.19,
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000',
    textDecoration: 'none',
  },

  mobileMenuContainer: {
    padding: ' 0.5rem 0 0.75rem 0',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  mobileMenuItem: {
    margin: '2% 3%',
    display: 'block',
    padding: '0.5rem',
    borderColor: 'transparent',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.19,
    letterSpacing: 'normal',
    color: '#000',
    textDecoration: 'none',

    '&:hover': {
      color: '#1565d8',
      backgroundColor: '#f7fafc',
    },

    '&:focus': {
      color: '#1565d8',
      backgroundColor: '#f7fafc',
    },

    [theme.breakpoints.up('sm')]: {
      paddingLeft: '1.25rem',
    },
  },
}));

Navigation.defaultProps = {
  isMobileMenu: false,
};

Navigation.propTypes = {
  isMobileMenu: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
