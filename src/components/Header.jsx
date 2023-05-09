import "./Header.css";
import React from "react";
import { FiSearch } from 'react-icons/fi';
import { Icon } from "react-icons-kit";
import { shoppingCart } from 'react-icons-kit/icomoon/shoppingCart';
import { heart } from 'react-icons-kit/fa/heart';
import { thumbsUp } from 'react-icons-kit/fa/thumbsUp';



function Header() {
  return (
    <div className="Header">
      <img 
        className="Header__logo"
        src="https://cdn.shopify.com/s/files/1/0729/2148/1507/files/pandorasbox_480x480.jpg?v=1683555608"
        alt="Pandora's Box logo"
      />

      <div className="Header__search">
        <input className="header__searchInput" type="text" placeholder="Search pandora's box" />
        <FiSearch className="header__searchIcon" />
      </div>

      <div className="Header__nav">
        <div className="Header__option">
          <span className="Header__optionLineOne">Hello, User</span>
          <span className="Header__optionLineTwo">Sign In</span>
        </div>

        <div className="Header__option">
          <span className="Header__optionLineOne">Returns</span>
          <span className="Header__optionLineTwo">Orders</span>
        </div>
        
        <div className="Header__option">
          <span className="Header__optionLineOne">Your Wishlist</span>
          <span className="Header__optionLineTwo">Goddess Tier</span>
        </div>
        
        <div className="Header__optionBasket">
          <Icon icon={shoppingCart}/>
          <span className="Header__optionLineTwo Header__basketCount">
            0
          </span>
        </div>
        
        <div className="Header__optionHeart">
          <Icon icon={heart}/>
          <span className="Header__optionLineTwo">Love Us?</span>
        </div>
        
        <div className="Header__optionThumbsUp">
          <Icon icon={thumbsUp}/> 
          <span className="Header__optionLineTwo">Like Us?</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
