import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { connect } from 'react-redux';

import Navigation from 'components/Navigation/Navigation';
import { ReactComponent as Logo } from 'images/Logo.svg';
import CartDropdown from 'components/Cart/CartDropdown';
import { selectCartHidden } from 'redux/Cart/CartSelectors';

const Header = ({ hidden }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const classes = useStyles({ showMobileMenu });

  return (
    <Box className={classes.root}>
      <nav className={classes.container}>
        <div>
          <div className={classes.navbarContainer}>
            <div className={classes.leftContainer}>
              <div className={classes.menuContainer}>
                <IconButton onClick={() => setShowMobileMenu(!showMobileMenu)} aria-label="menu">
                  {showMobileMenu ? <CloseOutlinedIcon /> : <MenuIcon />}
                </IconButton>
              </div>
              <div className={classes.logoContainer}>
                <Logo />
              </div>
            </div>
            <div className={classes.rightContainer}>
              <Navigation />
              {hidden ? null : <CartDropdown />}
            </div>
          </div>
        </div>
        <div className={classes.mobileMenu}>
          <Navigation isMobileMenu={true} />
          {hidden ? null : <CartDropdown />}
        </div>
      </nav>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    left: 'auto',
    right: 0,
    width: '100%',
    display: 'flex',
    zIndex: 1100,
    boxSizing: 'border-box',
    flexShrink: 0,
    flexDirection: 'column',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.05);',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: '0 150px',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },

  container: {
    backgroundColor: 'white',
    width: '100%',
  },

  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '90px',
  },

  leftContainer: {
    display: 'flex',
  },

  logoContainer: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
  },

  rightContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  menuContainer: {
    marginRight: ' 0.5rem',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  mobileMenu: {
    display: (props) => (props.showMobileMenu === true ? 'block' : 'none'),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const mapStateToProps = (state) => ({
  hidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);
