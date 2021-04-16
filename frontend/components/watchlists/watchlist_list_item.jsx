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
      <FontAwesomeIcon icon={faChevronDown} />
    ) : (
      <FontAwesomeIcon icon={faChevronUp} />
    );

  const watchedStocks = watchlistItems.map((items, i) => {
    return <WatchedStock items={items} listStatus={listStatus} key={i} />;
  });

  return (
    <div>
      <div className="watchlist-item-contain" onClick={handleListStatus}>
        <div className="watchlist-item-inside">
          <p className="watchlist-name">{name}</p>
        </div>
        <div className="watchlist-chevron">{faIcon}</div>
      </div>
      <div className="watched-stock-contain">
        <div className="watched-stock">{watchedStocks}</div>
      </div>
    </div>
  );
};

export default WatchlistItem;
