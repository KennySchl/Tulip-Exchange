# Tulip-Exchange
Tulip Exchange, a Robinhood clone.  A financial application that allows you to get current intraday data for nearly 20,000 stocks in the US, and create watchlists and add stocks to watch. Also you can stay up to date with up the latest financial news in the main page and more specific news in the company's stock page.

[Tulip Exchange](https://tulip-exchange.herokuapp.com/#/)

## Technologies Used
  *  Rails
  *  PostgreSQL
  *  Redux
  *  React

## Features

### Main Page
![](https://i.ibb.co/FHw0LsR/main-page.png)

### Stock Show Page
![](https://i.ibb.co/m94PFG0/main-page.png)

### Get current price information!
Users can visit a specific stock page and hover over the graph to get up to date price information.
![](https://media.giphy.com/media/XNq91o9po1gGx3u3cJ/giphy.gif)

```javascript

const [lineColor, setLineColor] = useState("");
  const [hoverTime, setHoverTime] = useState("");
  const [hoverPrice, setHoverPrice] = useState(currentPrice.c);

  useEffect(() => {
    currentLineColor();
  });
  //UNIX TIME CALCULATIONS
  const marketOpen = new Date().setHours(3, 0, 0, 0) / 1000;
  const marketClose = new Date().setHours(12, 0, 0, 0) / 1000;

  const currentLineColor = () => {
    if (intraDayData.o[0] - intraDayData.o[data.length - 1] < 0) {
      setLineColor("rgb(60, 245, 88)");
    } else {
      setLineColor("rgb(255,158,255)");
    }
  };

  const handleMouseHover = (e) => {
    if (e.activePayload) {
      let priceHovered = e.activePayload[0].payload.value;
      let timeHovered = e.activePayload[0].payload.time;
      setHoverTime(timeHovered);
      setHoverPrice(priceHovered);
    }
  };

  const resetHoverPrice = () => {
    setHoverPrice(currentPrice.c);
  };

  const handleHoverTime = () => {
    // console.log(hoverTime);
    return (
      <div className="hover-time">
        {new Date(hoverTime * 1000).toLocaleTimeString(["en-US"], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    );
  };

  let data = [];
  let dataValueAVG = [];

  for (let i = 0; i < intraDayData.t.length; i++) {
    data.push({ value: intraDayData.o[i], time: intraDayData.t[i] });
    dataValueAVG.push(intraDayData.o[i]);
  }

  const renderLineChart = (
    <LineChart
      width={676}
      height={196}
      data={data}
      onMouseMove={handleMouseHover}
      onTouchStart={handleMouseHover}
      onMouseLeave={resetHoverPrice}
      className="stock-line-chart"
    >
      <Line
        type="monotone"
        type="linear"
        dataKey="value"
        stroke={lineColor}
        strokeWidth={2}
        dot={false}
      />
      <ReferenceLine
        y={dataValueAVG.reduce((a, b) => a + b) / dataValueAVG.length}
        strokeDasharray="2 2"
      />
      <XAxis
        dataKey="time"
        type="number"
        domain={[marketOpen, marketClose]}
        hide
      />
      <YAxis
        dataKey="value"
        type="number"
        domain={[
          intraDayData.o[0] * 0.99,
          intraDayData.o[intraDayData.o.length - 1] / 0.99,
        ]}
        hide
      />
      <Tooltip
        content={handleHoverTime}
        cursor={{ stroke: "black", strokeWidth: 0.5 }}
        isAnimationActive={false}
        offset={-20}
        position={{ y: -25 }}
      />
    </LineChart>
  );
  
  ```

### Create lists, and add your favorite stocks to watch!
Users haver the ability to track any stock by adding it to a list

![](https://media.giphy.com/media/xsYK2e4OTr2PFjWVhM/giphy.gif)

```javascript

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
  
  ```
  ```javascript
  const [listStatus, setListStatus] = useState(false);
  const [hoverStatus, setHoverStatus] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [watchlistName, setWatchlistName] = useState("");

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
    setListLength((prevLength) => prevLength - 1);
  };  const [listStatus, setListStatus] = useState(false);
  const [hoverStatus, setHoverStatus] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [watchlistName, setWatchlistName] = useState("");

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
    setListLength((prevLength) => prevLength - 1);
  };
  ```
  
  

