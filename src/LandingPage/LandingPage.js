import React, {Component} from 'react';
import './LandingPage.css';

class LandingPage extends Component{
  render(){
    return (
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
        <div className="mainbanner">
          <div>
              <hr className="line"/>
          </div>
          <div className="mainbannerLeftDiv">
            <p className="mainbannerSmallText">New Arrival</p>
            <p className="mainBannerbigText">Simple Cotton T-Shirts</p>
            <p className="mainbannerSmallText">Casual Line, Short design, 100% pseudo leather,
            Backstiched elbow patch</p>
            <div className="mainbannerBtnOuterDiv">
              <div className="mainbannerBtninnerLeftDiv"><input type="button" className="button" value="MENS"></input></div>
              <div className="mainbannerBtninnerRightDiv"><input type="button" className="button" value="WOMENS"></input></div>
            </div>
          </div>
          <div className="mainbannerRightDiv">
            <img src="./images/MainPoloTShirt.png" alt="Polo T-Shirt"></img>
          </div>
        </div>
        <div className="featureDisplay">
          <div>
            <img src="./images/tshirt.png" alt="Quality Product"></img>
            <span>QUALITY MATERIAL</span>
          </div>
          <div>
            <img src="./images/free-shipping.png" alt="Free Shipping"></img>
            <span>FREE SHIPPING</span>
          </div>
          <div>
            <img src="./images/online-payment.png" alt="Secure Payment"></img>
            <span>SECURE PAYMENT</span>
          </div>
        </div>
        <hr className="line"/>
        <div className="productHighlight">
          <div>
            <span>Featured Products</span>
          </div>
        </div>
        <div className="productCategoryHeader">
            <a href="./anc">NEW ARRIVALS</a>
            <a href=".and">BEST SELLERS</a>
            <a href=".and">CATEGORIES</a>
        </div>
        <div className="productListRow">
          <div className="productListColumn"><img src="./images/Polo 01.jpg" alt="Navy blue polo Tee"/></div>
          <div className="productListColumn"><img src="./images/Polo 01.jpg" alt="Navy blue polo Tee"/></div>
          <div className="productListColumn"><img src="./images/Polo 01.jpg" alt="Navy blue polo Tee"/></div>
        </div>
        <div>
          <hr className="line"/>
        </div>
        <footer className="footer">
          <div className="footerLeftDiv">
            <span>Terms of Services</span>
            <span>Privacy Policy</span>
          </div>
          <div className="footerCRDiv">
            <img src="./images/outline_copyright_black_18dp.png" alt="copyright"/>
            <span>Copyrights Reserved</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;