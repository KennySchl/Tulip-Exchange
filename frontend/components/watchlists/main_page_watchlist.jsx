import React, { useState, useEffect } from "react";
import WatchlistList from "./watchlist_list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import {
  createWatchlist,
  createWatchlistItem,
  fetchAllUserWatchlists,
} from "../../util/watchlists_api_util";

const MainPageWatchlist = ({ watchlists, currentUserId }) => {
  const [createMode, setCreateMode] = useState(false);
  const [listName, setListName] = useState("");
  const [newWatchlist, setNewWatchlist] = useState(watchlists);
  const [listLength, setListLength] = useState(newWatchlist.length);

  useEffect(() => {
    fetchAllUserWatchlists(currentUserId)
      .then((res) => setNewWatchlist(res))
      .then(() => setListLength(newWatchlist.length));
    return () => {};
  }, [listLength]);

  const handleCreateMode = () =>
    createMode ? setCreateMode(false) : setCreateMode(true);

  const createList = (e) => {
    const list = { name: listName, userId: currentUserId };
    if ((e.key === "Enter" || e.type === "click") && listName !== "") {
      createWatchlist(currentUserId, list);
      setCreateMode(false);
      setListName("");
      setListLength((prevLength) => prevLength + 1);
    }
  };

  const watchlistItemCreate = (currentUserId) => {
    const listItem = { stockId: 5, watchlistId: 1 };
    createWatchlistItem(currentUserId, listItem.watchlistId, listItem);
  };

  if (createMode) {
    return (
      <div className="watchlist-main-position">
        <div className="watchlist-main-contain">
          <div className="lists-header">
            <h1 className="list-title">Lists</h1>
            <h1 className="create-watchlist-button">
              <FontAwesomeIcon icon={faMinus} onClick={handleCreateMode} />
            </h1>
          </div>
          <div className="watchlists-contain">
            <div className="watchlist-item-contain">
              <input
                className="edit-watchlist-input"
                type="text"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                onKeyDown={createList}
              />
              <FontAwesomeIcon icon={faPlus} onClick={createList} />
            </div>
            <div className="watchlists">
              <WatchlistList
                watchlists={newWatchlist}
                setListLength={setListLength}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="watchlist-main-position">
        <div className="watchlist-main-contain">
          <div className="lists-header">
            <button onClick={watchlistItemCreate}></button>
            <h1 className="list-title">Lists</h1>
            <h1 className="create-watchlist-button">
              <FontAwesomeIcon icon={faPlus} onClick={handleCreateMode} />
            </h1>
          </div>
          <div className="watchlists-contain">
            <div className="watchlists">
              <WatchlistList
                watchlists={newWatchlist}
                setListLength={setListLength}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainPageWatchlist;
