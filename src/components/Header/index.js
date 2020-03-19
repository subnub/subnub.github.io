import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {history} from "../../routers/AppRouter";
import {scrollToBottom, showSideBar, hideSideBar} from "../../actions/main"
import {resetSelectedItem} from "../../actions/selected"

class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    aboutClick = () => {

        console.log("about click")
        this.props.dispatch(scrollToBottom());
        history.push("/#/");
        // window.scrollTo(0,30000);
    }

    homeClick = () => {
        history.push("/")
    }

    githubClick = () => {
        window.open("https://github.com/subnub", "_blank")
    }

    projectClick = () => {

        this.props.dispatch(resetSelectedItem());
        console.log("project click");
        // history.push("/projects")
        window.open("https://subnub.github.io/#/projects");
        
    }

    menuClick = () => {

        this.props.dispatch(showSideBar());
        window.scrollTo(0, 0);
    }

    contactClick = () => {
        this.props.dispatch(hideSideBar());
        history.push("/#/contact")
    }

    render() {

        return <Header 
                showHeader={this.props.showHeader}
                aboutClick={this.aboutClick}
                projectClick={this.projectClick}
                githubClick={this.githubClick}
                homeClick={this.homeClick}
                menuClick={this.menuClick}
                contactClick={this.contactClick}/>
    }
}

const mapStateToProp = (state) => ({
    showHeader: state.main.showHeader
})

export default connect(mapStateToProp)(HeaderContainer);