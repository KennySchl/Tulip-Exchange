import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEllipsisH,
  faTh,
} from "@fortawesome/free-solid-svg-icons";
import WatchedStock from "./watched_stock";

const WatchlistItem = ({ watchlist: { name, watchlistItems } }) => {
  const [listStatus, setListStatus] = useState("inactive");
  const [hoverStatus, setHoverStatus] = useState("inactive");
  const [editMode, setEditMode] = useState("inactive");
  const [watchlistName, setWatchlistName] = useState(name);

  const handleListStatus = () =>
    listStatus === "inactive"
      ? setListStatus("active")
      : setListStatus("inactive");

  const handleHoverStatus = () =>
    hoverStatus === "inactive"
      ? setHoverStatus("active")
      : setHoverStatus("inactive");

  const handleEditMode = () =>
    editMode === "inactive" ? setEditMode("active") : setEditMode("inactive");

  const handleListNameChange = (e) =>
    e.key === "Enter" ? setEditMode("inactive") : null;

  const editIcon =
    hoverStatus === "inactive" ? (
      <FontAwesomeIcon icon={faEllipsisH} className="invisible-ellipse" />
    ) : (
      <FontAwesomeIcon icon={faEllipsisH} />
    );
  const faIcon =
    listStatus === "inactive" ? (
      <FontAwesomeIcon icon={faChevronDown} />
    ) : (
      <FontAwesomeIcon icon={faChevronUp} />
    );

  const editInput =
    editMode === "inactive" ? (
      <div>{name}</div>
    ) : (
      <input
        className="edit-watchlist-input"
        type="text"
        value={watchlistName}
        onChange={(e) => setWatchlistName(e.target.value)}
        onKeyDown={handleListNameChange}
      />
    );

  console.log(editMode);

  const watchedStocks = watchlistItems.map((items, i) => {
    return <WatchedStock items={items} listStatus={listStatus} key={i} />;
  });

  return (
    <div onMouseOver={handleHoverStatus} onMouseOut={handleHoverStatus}>
      <div className="watchlist-item-contain" onClick={handleListStatus}>
        <div className="watchlist-item-inside">
          <div className="watchlist-name">{editInput}</div>
        </div>
        <div className="watchlist-icons">
          <div className="edit-icon" onClick={handleEditMode}>
            {editIcon}
          </div>
          <div className="watchlist-chevron">{faIcon}</div>
        </div>
      </div>
      <div className="watched-stock-contain">
        <div className="watched-stock">{watchedStocks}</div>
      </div>
    </div>
  );
};

export default WatchlistItem;
