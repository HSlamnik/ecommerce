import { makeStyles } from '@material-ui/core/styles';

const Button = ({ children, isGoogleSignIn, inverted, ...rest }) => {
  const classes = useStyles();

  return (
    <button
      className={`${inverted ? classes.invertedButton : classes.button} ${
        isGoogleSignIn ? classes.googleButton : classes.button
      }`}
      {...rest}
    >
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
    display: 'flex',
    justifyContent: 'center',

    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid black',
    },
  },

  invertedButton: {
    minWidth: '165px',
    width: 'auto',
    height: '50px',
    letterSpacing: '0.5',
    lineHeight: '50px',
    padding: '0 35px 0 35px',
    fontSize: '15px',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans Condensed',
    fontWeight: 'bolder',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',

    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
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
