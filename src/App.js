import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import {Home} from './routes/Home/home.component'
import {Navigation} from './routes/Navigation/navigation.component'
import {LandingPage} from './routes/landing/landing-page.component';
import { ProfilePage } from './routes/profile/profile.component';
import {setCurrentUser} from './store/user/user.actions';
import {useDispatch,useSelector} from 'react-redux';
import {onAuthStateChangedListener,createUserDocumentFromAuth} from './utils/firebase/firebase.utils';
import {selectCurrentUser} from './store/user/user.selector';
import {useEffect} from 'react';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user){
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
},[dispatch]);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={currentUser ? <Home /> : <Navigate to="/landing" />}/>
            <Route path="/landing" element={<LandingPage />}/>
            <Route path="/profile" element={<ProfilePage />}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
