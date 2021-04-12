import { connect } from "react-redux";
import NavBar from "./nav_bar";


const mSTP = ({session}) => ({
  currentUser: session
})

const mDTP = (dispatch) => ({})

export default connect(mSTP, mDTP)(NavBar)