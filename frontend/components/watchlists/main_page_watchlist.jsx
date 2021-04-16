import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import WatchlistList from "./watchlist_list";

const MainPageWatchlist = ({ watchlists }) => {
  console.log(watchlists);
  return (
    <div className="watchlist-main-contain">
      <h1 className="lists-header">Lists</h1>
      <div>
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="create-watchlist-button"
        />
      </div>
      <div className="watchlists-contain">
        <div className="watchlists">
          <WatchlistList watchlists={watchlists} />
        </div>
      </div>
    </div>
  );
};

export default MainPageWatchlist;
