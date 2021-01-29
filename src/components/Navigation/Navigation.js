import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import routes from 'utils/routes';

const Navigation = ({ isMobileMenu }) => {
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
              return (
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
              return (
                <Link className={classes.buttonContainer} key={index} to={item.path}>
                  <div className={classes.navItem}>{item.name}</div>
                </Link>
              );
            }
            return (
              <Link className={classes.navItem} key={index} to={item.path}>
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

  navItem: {
    display: 'inline-flex',
    alignItems: 'center',
    borderColor: 'transparent',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.19,
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#183b56',
    textDecoration: 'none',

    '&:hover': {
      color: '#1565d8',
    },

    '&:focus': {
      color: '#1565d8',
    },
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

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    width: '145px',
    height: '48px',
    borderRadius: '8px',
    border: 'solid 2px #1565d8',
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
  },
}));

Navigation.defaultProps = {
  isMobileMenu: false,
};

Navigation.propTypes = {
  isMobileMenu: PropTypes.bool,
};

export default Navigation;
