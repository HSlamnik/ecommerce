import { makeStyles } from '@material-ui/core/styles';

import { signInWithGoogle } from 'firebase/FirebaseUtils';

import Form from 'components/Form/Form';
import Button from 'components/Button/Button';

const SignIn = ({ email, password, setEmail, setPassword, handleSignIn }) => {
  const classes = useStyles();

  return (
    <div className={classes.signIn}>
      <h2 className={classes.title}>I already have an account </h2>
      <div className={classes.title}>Sign in with your email and password</div>

      <form onSubmit={handleSignIn}>
        <Form name="email" type="email" value={email} handleChange={setEmail} label="Email" required />
        <Form name="password" type="password" value={password} handleChange={setPassword} label="Password" required />

        <div className={classes.buttonsContainer}>
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  signIn: {
    width: '380px',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    margin: '10px 0',
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default SignIn;
