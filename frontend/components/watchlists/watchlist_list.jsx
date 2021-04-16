import React from "react";
import WatchlistItem from './watchlist_list_item'

const WatchlistList = ({ watchlists }) => {
  const listItems = watchlists.map((watchlist, i) => {
    console.log(watchlist);
    return <WatchlistItem watchlist={watchlist} key={i} />;
  });

  return <div>{listItems}</div>;
};

export default WatchlistList;