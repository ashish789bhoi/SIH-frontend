import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header2 from './components/Header/Header2/Header2.jsx'
import Header1 from './components/Header/Header11/Header1.jsx'
import Login from './components/Login/Login.jsx'
import Updates from './components/UpdatesTab/Updates.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import GridLogin from './components/Grid/GridLogin.jsx'


function LoginMain() {
  return(
    <>
    
      <StrictMode>
        <Header1 />
        <Header2 />
        <Login />
        <Updates />
        <AboutUs />
        <GridLogin />
        <App />
      </StrictMode>,
    
    </>);
}

export default LoginMain;

