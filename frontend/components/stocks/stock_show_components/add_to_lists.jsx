import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { createWatchlistItem } from "../../../util/watchlists_api_util";

const AddToLists = ({ stocks, watchlists, stockSymbol }) => {
  const [stockId, setStockId] = useState(0);
  const [checkedLists, setCheckedLists] = useState({})

  const lists = {};
  useEffect(() => {
    stocks.forEach((stock) => {
      stockSymbol === stock.symbol ? setStockId(stock.id) : "";
    });
  });
console.log(watchlists);
  watchlists.forEach((list, i) => (lists[list.name] = list.name));

  console.log(lists);
  console.log(checkedLists)
  const watchlistItemCreate = (currentUserId) => {
    const listItem = { stockId: 5, watchlistId: 1 };
    createWatchlistItem(currentUserId, listItem.watchlistId, listItem);
  };

  const handleCheckedLists = (e) => {
    const {name, id} = e.target
    setCheckedLists({...checkedLists, [name]: e.target.checked})
  }

  return (
    <div className="chart-button-container">
      <div className="add-stock-watchlist-button">
        <FontAwesomeIcon icon={faCheck} />
        Add to Lists
      </div>
      {watchlists.map((list,i) => (
        <div key={i}>
          <input type="checkbox" name={list.name} id={list.id} checked={checkedLists[list.name]} onChange={handleCheckedLists}/>
          {list.name}
        </div>
      ))}
    </div>
  );
};

export default AddToLists;
