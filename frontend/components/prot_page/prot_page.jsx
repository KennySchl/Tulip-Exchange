import React, { useState, useEffect } from "react";
import ProtNavBarContainer from "../nav_bar/prot_nav_bar_container";
import MainPageWatchlistContainer from "../watchlists/main_page_watchlist_container";

const ProtPage = () => {
  return (
    <div>
      <ProtNavBarContainer />
      <MainPageWatchlistContainer />
      {/* <img className="prot-page-bkg"src={window.protpagebkg} />     */}
    </div>
  );
};
export default ProtPage;
