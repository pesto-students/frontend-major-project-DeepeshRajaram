import React,{Component} from 'react';
import './Login.css';
class Login extends Component{
  render(){
    return(
      <div>
        <header>
          <div className="offerHeader">
            Use SHOPPINGON25 to get 25% off on your cart
          </div>
          <div className="headerBase">
            <div className="headerLogo">Shopping ON</div>
            <div className="searchBox">
              <img src="./images/search.png" alt="search"></img> 
              <input type="text" />
            </div>
            <div className="topRightIcon">
              <a href="/login"><img src="./images/login.png" alt="Login"></img></a>
              <a href="/signup"><img src="./images/signup.png" alt="Login"></img></a>
              <img src="./images/globe1.png" alt="Login"></img>
            </div>
            
          </div>
        </header>
        <div className="backgroundLoginCard">
          <span>Login</span>
          <div>
            <label>Mobile No. :</label>
            <input type="input" placeholder="Mobile No." />
          </div>
          <div><label>Password :</label>
            <input type="Password" placeholder="Password" /></div>
        </div>
      </div>
    );
  }
}

export default Login