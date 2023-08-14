import React from 'react'
import "./Home.css"
import SignUp from '../../components/sign-up/SignUp'
import SignIn from '../../components/sign-in/SignIn'
import { Link, Outlet,useLocation } from 'react-router-dom'
const Home = () => {
    const location =useLocation();
    console.log(location)
  return (
    <section className='home-container' data-testid="section">
        <div className="content-container">
            <header className='content-header'>
                <div className='logo'>
                    Nila EnterPrises Pvt Ltd. 
                </div>
                {location.pathname==="/sign-in"?(<p>Don't have an account?<Link className='link' to="/">Sign Up</Link></p>):(<p> Already have an account?<Link className='link'to="/sign-in">Sign In</Link></p>)}
                
            </header>
            <div className='outlet-container'>
            <Outlet/>
                {/* <SignIn/>  */}
            </div>
        </div>
        <div className="image-container" >
         
        </div>
    </section>
  )
}

export default Home