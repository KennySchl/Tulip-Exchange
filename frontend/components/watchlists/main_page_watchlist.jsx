import React from "react";
import WatchlistList from "./watchlist_list";

const MainPageWatchlist = ({ watchlists }) => {
  return (
      <div className="watchlist-main-position">
        <div className="watchlist-main-contain">
          <div className="lists-header">
            <h1 className="list-title">Lists</h1>
            <h1 className="create-watchlist-button">+</h1>
          </div>
          <div className="watchlists-contain">
            <div className="watchlists">
              <WatchlistList watchlists={watchlists} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default MainPageWatchlist;
