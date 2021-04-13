import { connect } from "react-redux";
import Stocks from "./stocks";

const mSTP = ({ entities: { stocks } }) => ({
  stocks: stocks,
});

export default connect(mSTP, null)(Stocks);
