import React from 'react';
import '../styles/PaymentPage.css';
import mobileRechargeImage from '../images/mobile-recharge.png';
import dthRechargeImage from '../images/dth-recharge.png';
import ottImage from '../images/ott.jpeg';
import cableTvImage from '../images/cable-tv.png';
import electricityImage from '../images/electricity.png';
import rentImage from '../images/rent.png';
import educationFeesImage from '../images/fees.png';
import disneyHotstarImage from '../images/disney-hotstar.jpeg';
import amazonPrimeImage from '../images/prime.png';
import netflixImage from '../images/netflix.png';
import spotifyImage from '../images/spotify.png';

const PaymentPage = () => {

  return (
    <div className="container-fluid payment-container">
      <section>
        <h2>Recharge</h2>
        <div className="payment-cards-container">
          <div className="payment-card">
            <img src={mobileRechargeImage} alt="Mobile Recharge" />
            <h4>Mobile Recharge</h4>
            <button className="payment-card-button">Recharge Now</button>
          </div>
          <div className="payment-card">
            <img src={dthRechargeImage} alt="DTH Recharge" />
            <h4>DTH Recharge</h4>
            <button className="payment-card-button">Recharge Now</button>
          </div>
          <div className="payment-card">
            <img src={ottImage} alt="OTT" />
            <h4>OTT</h4>
            <button className="payment-card-button">Subscribe Now</button>
          </div>
          <div className="payment-card">
            <img src={cableTvImage} alt="Cable TV" />
            <h4>Cable TV</h4>
            <button className="payment-card-button">Subscribe Now</button>
          </div>
        </div>
      </section>
      <section>
        <h2>Home Bills</h2>
        <div className="payment-cards-container">
          <div className="payment-card">
            <img src={electricityImage} alt="Electricity" />
            <h4>Electricity</h4>
            <button className="payment-card-button">Pay Now</button>
          </div>
          <div className="payment-card">
            <img src={rentImage} alt="Rent" />
            <h4>Rent</h4>
            <button className="payment-card-button">Pay Now</button>
          </div>
          <div className="payment-card">
            <img src={educationFeesImage} alt="Education Fees" />
            <h4>Education Fees</h4>
            <button className="payment-card-button">Pay Now</button>
          </div>
        </div>
      </section>
      <section>
        <h2>Subscription</h2>
        <div className="payment-cards-container">
          <div className="payment-card">
            <img src={disneyHotstarImage} alt="Disney+ Hotstar" />
            <h4>Disney+ Hotstar</h4>
            <button className="payment-card-button">Subscribe Now</button>
          </div>
          <div className="payment-card">
            <img src={amazonPrimeImage} alt="Amazon Prime" />
            <h4>Amazon Prime</h4>
            <button className="payment-card-button">Subscribe Now</button>
          </div>
          <div className="payment-card">
            <img src={netflixImage} alt="Netflix" />
            <h4>Netflix</h4>
            <button className="payment-card-button">Subscribe Now</button>
          </div>
          <div className="payment-card">
            <img src={spotifyImage} alt="Spotify" />
            <h4>Spotify</h4>
            <button className="payment-card-button">Subscribe Now</button>
          </div>
        </div>
      </section>
    </div> 
  );
  
};

export default PaymentPage;
