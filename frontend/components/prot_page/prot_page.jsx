import React, { useState, useEffect } from "react";
import ProtNavBarContainer from "../nav_bar/prot_nav_bar_container";
import MainPageWatchlistContainer from "../watchlists/main_page_watchlist_container";

const ProtPage = () => {
  return (
    <div>
      <ProtNavBarContainer />
      <div className="prot-page-container">
        <div className="prot-page-contain">
          <h1 className="welcome-to-prot">Welcome to Tulip Exchange</h1>
          <div className="graph-list">
             <img className="prot-page-bkg"src={window.protpagebkg} /> 
             <MainPageWatchlistContainer />
          </div>
         
        
        </div>
        
      </div>
         
    </div>
  );
};
export default ProtPage;
