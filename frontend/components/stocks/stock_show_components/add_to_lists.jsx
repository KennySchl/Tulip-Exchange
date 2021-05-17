import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { createWatchlistItem } from "../../../util/watchlists_api_util";

const AddToLists = ({ stocks, watchlists, stockSymbol, currentUserId }) => {
  const [stockId, setStockId] = useState(0);
  const [checkedLists, setCheckedLists] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    stocks.forEach((stock) => {
      stockSymbol === stock.symbol ? setStockId(stock.id) : "";
    });
    // const stock = stocks.find(({ symbol }) => stockSymbol === symbol)
    // setStockId(stock);
  });

  // console.log(watchlists);
  console.log(stockId);
  console.log(checkedLists);
  // useEffect(() => {
  //   watchlistItemCreate();
  // }, [checkedLists]);

  const watchlistItemCreate = (currentUserId) => {
    if (checkedLists > 0) {
      console.log("added");
      // const listItem = { stockId: stockId, watchlistId: checkedLists };
      // createWatchlistItem(currentUserId, listItem.watchlistId, listItem);
    } else if (checkedLists === 0) {
      console.log("deleted");
    }
  };

  const handleCheckedLists = (e) => {
    const { id, checked } = e.target;
    if (!checkedLists.includes(parseInt(id)) && checked) {
      setCheckedLists((oldArray) => [...oldArray, parseInt(id)]);
    } else if (checkedLists.includes(parseInt(id)) && !checked) {
      setCheckedLists(checkedLists.filter((listId) => parseInt(id) !== listId));
    }
  };

  let checkboxList;

  if (stockId > 0) {
    checkboxList = (
      <div>
        {watchlists.map((list, i) => {
          let defaultValue = false;
          console.log(list);
          list.watchlistItems.forEach((item) => {
            if (item.stockId === stockId) {
              return (defaultValue = true);
            }
          });

          return (
            <div key={i}>
              <input
                type="checkbox"
                name="lists"
                id={list.id}
                checked={lists[list.id]}
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
      </div>
      {checkboxList}
    </div>
  );
};

export default AddToLists;
