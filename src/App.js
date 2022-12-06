import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen.js";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = {
    name: "ojas",
  };        //useSelector(selectUser);
  //const dispatch  = useDispatch();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(userAuth => {
  //     if(userAuth){
  //       //console.log(userAuth);
  //       dispatch(login({
  //         uid: userAuth.uid,
  //         email: userAuth.email,
  //       }));
  //     }
  //     else{
  //       dispatch(logout);
  //     }
  //   });
  //   return unsubscribe;
  // }, []); 

  return (
    <div className="app"> 
      <Router>
        {!user ? (<Login />) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen></HomeScreen>}>
            
            </Route>
        </Routes>
        )}
        
      </Router>
    </div>
  );
}

export default App;
