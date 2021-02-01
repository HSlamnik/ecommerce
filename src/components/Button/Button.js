import { makeStyles } from '@material-ui/core/styles';

const Button = ({ children, isGoogleSignIn, ...rest }) => {
  const classes = useStyles();

  return (
    <button className={`${isGoogleSignIn ? classes.googleButton : classes.button}`} {...rest}>
      {children}
    </button>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: '165px',
    width: 'auto',
    height: '50px',
    letterSpacing: '0.5',
    lineHeight: '50px',
    padding: '0 35px 0 35px',
    fontSize: '15px',
    backgroundColor: 'black',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans Condensed',
    fontWeight: 'bolder',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid black',
    },
  },

  googleButton: {
    minWidth: '165px',
    width: 'auto',
    height: '50px',
    letterSpacing: '0.5',
    lineHeight: '50px',
    padding: '0 35px 0 35px',
    fontSize: '15px',
    backgroundColor: '#4285f4',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans Condensed',
    fontWeight: 'bolder',
    border: 'none',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#357ae8',
      border: 'none',
    },
  },
}));

export default Button;
