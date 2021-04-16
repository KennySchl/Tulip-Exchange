import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faEllipsisH,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import WatchedStock from "./watched_stock";

import {
  fetchUserWatchlist,
  editWatchListName,
  deleteWatchlist,
} from "../../util/watchlists_api_util";

const WatchlistItem = ({
  watchlist: { id, userId, watchlistItems },
  setListLength,
}) => {
  const [listStatus, setListStatus] = useState(false);
  const [hoverStatus, setHoverStatus] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [watchlistName, setWatchlistName] = useState("");
  console.log(setListLength);
  useEffect(() => {
    fetchUserWatchlist(userId, id).then((res) => setWatchlistName(res.name));
    return () => {};
  }, []);

  const handleListStatus = () =>
    !listStatus ? setListStatus(true) : setListStatus(false);

  const handleHoverStatus = () =>
    !hoverStatus ? setHoverStatus(true) : setHoverStatus(false);

  const handleEditMode = () =>
    !editMode ? setEditMode(true) : setEditMode(false);

  const handleListNameChange = (e) => {
    const watchlist = { name: watchlistName };
    if (e.key === "Enter") {
      editWatchListName(userId, id, watchlist);
      setEditMode(false);
    }
  };
  const handleDeleteList = () => {
    deleteWatchlist(userId, id);
    setListLength(1);
  }

  const editIcon = !hoverStatus ? (
    <FontAwesomeIcon icon={faEllipsisH} className="invisible-ellipse" />
  ) : (
    <FontAwesomeIcon icon={faEllipsisH} />
  );
  const faIcon = !listStatus ? (
    <FontAwesomeIcon icon={faChevronDown} />
  ) : (
    <FontAwesomeIcon icon={faChevronUp} />
  );

  const editInput = !editMode ? (
    <div>{watchlistName}</div>
  ) : (
    <div>
      <input
        className="edit-watchlist-input"
        type="text"
        value={watchlistName}
        onChange={(e) => setWatchlistName(e.target.value)}
        onKeyDown={handleListNameChange}
      />
      <FontAwesomeIcon
        icon={faTrashAlt}
        className="delete-icon"
        onClick={handleDeleteList}
      />
    </div>
  );

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
