import React from "react";
import WatchlistList from "./watchlist_list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MainPageWatchlist = ({ watchlists }) => {
  return (
      <div className="watchlist-main-position">
        <div className="watchlist-main-contain">
          <div className="lists-header">
            <h1 className="list-title">Lists</h1>
            <h1 className="create-watchlist-button"><FontAwesomeIcon icon={faPlus}/></h1>
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
