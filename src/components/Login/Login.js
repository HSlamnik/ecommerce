import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { auth, createUserProfileDocument } from 'firebase/FirebaseUtils';

import SignIn from 'components/Login/SignIn';
import SignUp from 'components/Login/SignUp';

const Login = () => {
  //Sign In data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Sign up data
  const [displayName, setDisplayName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //Sign in
  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail('');
      setPassword('');
    } catch (err) {
      console.log('Error signing in: ', err.message);
    }
  };

  //Sign up
  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log(displayName, newEmail, newPassword, confirmPassword);

    if (newPassword !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(newEmail, newPassword);

      createUserProfileDocument(user, { displayName });

      setDisplayName('');
      setNewEmail('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.log('Error signing up: ', err.message);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.login}>
      <SignIn
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
      />
      <SignUp
        displayName={displayName}
        newEmail={newEmail}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        setDisplayName={setDisplayName}
        setNewEmail={setNewEmail}
        setNewPassword={setNewPassword}
        setConfirmPassword={setConfirmPassword}
        handleSignUp={handleSignUp}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  login: {
    display: 'flex',
    width: '850px',
    justifyContent: 'space-between',
    margin: '30px auto',
  },
}));

export default Login;
