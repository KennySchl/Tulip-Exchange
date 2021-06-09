import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AddToLists = ({
  stocks,
  watchlists,
  stockSymbol,
  currentUserId,
  deleteWatchlistItem,
  createWatchlistItem,
}) => {
  const [stockId, setStockId] = useState(0);
  const [checkedLists, setCheckedLists] = useState([]);
  useEffect(() => {
    stocks.forEach((stock) => {
      stockSymbol === stock.symbol ? setStockId(stock.id) : "";
    });
    return () => {
      setStockId(0);
    };
  });

  // console.log(stockSymbol);
  // console.log(watchlists);
  // console.log(stockId);
  // console.log(checkedLists);

  const watchlistItemCreate = (listId) => {
    // console.log("added");
    const listItem = { stockId: stockId, watchlistId: listId };
    createWatchlistItem(currentUserId, listItem.watchlistId, listItem);
  };

  const watchlistItemDelete = (listId, listItemId) => {
    // console.log("deleted");
    deleteWatchlistItem(currentUserId, listId, listItemId);
    // fetchWatchlists(currentUserId);
  };

  const handleCheckedLists = (e) => {
    const { id, checked } = e.currentTarget;
    let watchlist = watchlists.find((list) => list.id === parseInt(id));
    if (!checkedLists.includes(parseInt(id)) && checked) {
      setCheckedLists((oldArray) => [...oldArray, parseInt(id)]);
      watchlistItemCreate(id);
    } else if (checkedLists.includes(parseInt(id)) && !checked) {
      setCheckedLists(checkedLists.filter((listId) => parseInt(id) !== listId));
    }

    if (!checked) {
      // console.log("delete");
      watchlistItemDelete(
        parseInt(id),
        watchlist.watchlistItems.find((item) => item.stockId === stockId).id
      );
    }
  };

  let checkboxList;

  if (stockId > 0) {
    checkboxList = (
      <div>
        {watchlists.map((list, i) => {
          let defaultValue = false;
          list.watchlistItems.forEach((item) => {
            if (item.stockId === stockId) {
              defaultValue = true;
            }
          });
          return (
            <div key={i} className="checkbox-list-name">
              <input
                type="checkbox"
                name="lists"
                id={list.id}
                watchlistitems={list.watchlistItems}
                onChange={handleCheckedLists}
                defaultChecked={defaultValue}
              />
              {list.name}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="chart-button-container">
      <div className="add-stock-watchlist-button">
        <FontAwesomeIcon icon={faCheck} />
        Add to Lists
        {checkboxList}
      </div>
    </div>
  );
};

export default AddToLists;
