import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import WatchedStock from "./watched_stock";

const WatchlistItem = ({ watchlist: { name, watchlistItems } }) => {
  const [listStatus, setListStatus] = useState("inactive");

  const handleListStatus = () =>
    listStatus === "inactive"
      ? setListStatus("active")
      : setListStatus("inactive");

  const faIcon =
    listStatus === "inactive" ? (
      <FontAwesomeIcon icon={faChevronDown} onClick={handleListStatus} />
    ) : (
      <FontAwesomeIcon icon={faChevronUp} onClick={handleListStatus} />
    );
  // console.log(name);
  // console.log(watchlistItems);

  const watchedStocks = watchlistItems.map((items, i) => {
    return <WatchedStock items={items} key={i} />;
  });

  return (
    <div>
      <div className="watchlist-item-contain">
        <div>
          <p className="watchlist-name">{name}</p>
        </div>
        <div>{faIcon}</div>
      </div>
      <div className="watched-stock-contain">
        <div className="watched-stock">{watchedStocks}</div>
      </div>
    </div>
  );
};

export default WatchlistItem;
