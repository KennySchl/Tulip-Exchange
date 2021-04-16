import React from "react";
import WatchlistItem from "./watchlist_list_item";

const WatchlistList = ({ watchlists }) => {
  watchlists.sort((a, b) => a.id - b.id);

  const listItems = watchlists.map((watchlist, i) => {
    return <WatchlistItem watchlist={watchlist} key={i} />;
  });

  return <div>{listItems}</div>;
};

export default WatchlistList;
