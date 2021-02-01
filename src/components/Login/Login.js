import { useState } from 'react';

import SignIn from 'components/Login/SignIn';
import SignUp from 'components/Login/SignUp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log(email, password);

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <SignIn
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
      />
      <SignUp />
    </div>
  );
};

export default Login;
