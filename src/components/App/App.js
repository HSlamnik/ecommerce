import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { auth } from 'firebase/FirebaseUtils';

import Root from 'components/Root/Root';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  //Get current user and unsubscribe for any user logging change
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      console.log('Unsubscribing');
      unsubscribeFromAuth();
    };
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Root currentUser={currentUser} />
    </BrowserRouter>
  );
}

export default App;
