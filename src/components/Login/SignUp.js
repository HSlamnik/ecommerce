import { makeStyles } from '@material-ui/core/styles';

import Form from 'components/Form/Form';
import Button from 'components/Button/Button';

//import { auth, createUserProfileDocument } from 'firebase/FirebaseUtils';

const SignUp = ({
  newEmail,
  displayName,
  newPassword,
  confirmPassword,
  handleSignUp,
  setDisplayName,
  setNewEmail,
  setNewPassword,
  setConfirmPassword,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.signUp}>
      <h2 className={classes.title}>I do not have an account</h2>
      <div className={classes.title}>Sign in with your email and password</div>

      <form onSubmit={handleSignUp}>
        <Form
          name="displayName"
          type="text"
          value={displayName}
          handleChange={setDisplayName}
          label="Display Name"
          required
        />
        <Form name="email" type="email" value={newEmail} handleChange={setNewEmail} label="Email" required />
        <Form
          name="password"
          type="password"
          value={newPassword}
          handleChange={setNewPassword}
          label="Password"
          required
        />
        <Form
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={setConfirmPassword}
          label="Confirm Password"
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  signUp: {
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

export default SignUp;
