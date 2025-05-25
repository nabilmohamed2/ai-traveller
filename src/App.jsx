import { useEffect } from 'react'
import './App.css'
import Header from './components/custom/Header'
import Hero from './components/custom/Hero'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './Services/fireBase';
import { useDispatch } from 'react-redux';
import { setUser } from './utils/userSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email} = user;
        setTimeout(()=>{
          console.log("User ID:", uid);
          console.log("Email:", email);
          console.log("Display Name:", user.displayName);
          const displayName = user.displayName;
          dispatch(setUser({uid:uid, name:displayName, mail:email}))
        },2000);
        
        // ...
      } else {
        // User is signed out
        // ...
      }
    }),[])

  return (
    <>
      {/* Hero */}
      <Header />
      <Hero />
    </>
  )
}

export default App
