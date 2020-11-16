import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
    return {
        friendsSidebar: state.friendsSidebar
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);


export default SidebarContainer