import { connect } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { auth, createUserProfileDocument } from 'firebase/FirebaseUtils';

import { setCurrentUser } from 'redux/User/UserActions';
import Root from 'components/Root/Root';

const App = ({ setCurrentUser }) => {
  //Get current user and unsubscribe for any user logging change
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
