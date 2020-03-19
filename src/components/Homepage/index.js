import React from "react";
import Homepage from "./Homepage";
import {connect} from "react-redux";
import { showHeader, hideHeader } from "../../actions/main";
import {resetScrollToBottom} from "../../actions/main";
import {history} from "../../routers/AppRouter";

class HomepageContainer extends React.Component {

    constructor(props) {
        super(props);

        this.aboutRef = React.createRef();
    }

    projectClick = () => {

        //history.push("/projects")
        window.location.replace("https://subnub.github.io/#/projects");
    }

    componentDidMount = () => {

        window.addEventListener('scroll', this.handleScroll);

        if (this.props.scrollToBottom) {

            window.scrollTo(0,30000);
            this.props.dispatch(resetScrollToBottom())

        } else {

            //this.props.dispatch(resetScrollToBottom())

        }
    }

    componentDidUpdate = () => {

        if (this.props.scrollToBottom) {

            window.scrollTo(0,30000);
            this.props.dispatch(resetScrollToBottom())

        } else {

            //this.props.dispatch(resetScrollToBottom())

        }
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {

        const pos = window.scrollY;

        if (pos === 0) {

            this.props.dispatch(hideHeader());

        } else {

            this.props.dispatch(showHeader());
        }
    }

    render() {

        return <Homepage 
                handleScroll={this.handleScroll}
                ref={this.ref}
                projectClick={this.projectClick}/>
    }
}

const connectStateToProp = (state) => ({

    scrollToBottom: state.main.scrollToBottom
})


export default connect(connectStateToProp)(HomepageContainer);