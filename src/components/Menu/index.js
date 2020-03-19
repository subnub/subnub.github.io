import React from "react";
import Menu from "./Menu"
import {connect} from "react-redux";
import {hideSideBar, scrollToBottom} from "../../actions/main"
import {resetSelectedItem} from "../../actions/selected"
import {history} from "../../routers/AppRouter";

class MenuContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    closeMenu = () => {

        this.props.dispatch(hideSideBar());
    }

    aboutClick = () => {

        this.props.dispatch(hideSideBar());
        console.log("about click")
        this.props.dispatch(scrollToBottom());
        // history.push("/");
        window.open("https://subnub.github.io/#/");
        // window.scrollTo(0,30000);
    }

    homeClick = () => {
        this.props.dispatch(hideSideBar());
        //history.push("/")
        window.open("https://subnub.github.io/#/");
    }

    githubClick = () => {

        this.props.dispatch(hideSideBar());
        window.open("https://github.com/subnub", "_blank")
    }

    projectClick = () => {

        this.props.dispatch(hideSideBar());
        this.props.dispatch(resetSelectedItem());
        console.log("project click");
        // history.push("/projects")
        window.open("https://subnub.github.io/#/projects");
    }

    contactClick = () => {
        this.props.dispatch(hideSideBar());
        // history.push("/contact")
        window.open("https://subnub.github.io/#/contact");
    }

    render() {

        return <Menu 
                showSideBar={this.props.showSideBar}
                closeMenu={this.closeMenu}
                gitClick={this.githubClick}
                projectClick={this.projectClick}
                contactClick={this.contactClick}
                aboutClick={this.aboutClick}/>
    }
}

const connectStateToProp = (state) => ({
    showSideBar: state.main.showSideBar,
})

export default connect(connectStateToProp)(MenuContainer);
