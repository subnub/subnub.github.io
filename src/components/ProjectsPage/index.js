import React from "react";
import ProjectsPage from "./ProjectsPage";
import {connect} from "react-redux";
import {history} from "../../routers/AppRouter"
import {resetSelectedItem} from "../../actions/selected";

class ProjectsPageContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    backButton = () => {

        this.props.dispatch(resetSelectedItem());
        history.push("/projects")
    }

    gitButton = (link) => {

        console.log(link);
        window.open(link, "_blank")
    }

    demoButton = (link) => {

        console.log(link);
        window.open(link, "_blank")
    }

    render() {

        console.log("selected", this.props.selectedItemImage)

        return <ProjectsPage 
                selectedItemTitle={this.props.selectedItemTitle}
                selectedItemColor={this.props.selectedItemColor}
                selectedItemImage={this.props.selectedItemImage}
                selectedItemBody={this.props.selectedItemBody}
                selectedItemLongBody={this.props.selectedItemLongBody}
                selectedItemDemo={this.props.selectedItemDemo}
                selectedItemGithub={this.props.selectedItemGithub}
                backButton={this.backButton}
                gitButton={this.gitButton}
                demoButton={this.demoButton}
                showSideBar={this.props.showSideBar}
                />
    }
}

const connectStateToProp = (state) => ({
    selectedItemTitle: state.selected.title,
    selectedItemColor: state.selected.color,
    selectedItemImage: state.selected.image,
    selectedItemBody: state.selected.body,
    selectedItemLongBody: state.selected.longBody,
    selectedItemDemo: state.selected.demo,
    selectedItemGithub: state.selected.github,
    showSideBar: state.main.showSideBar,
})

export default connect(connectStateToProp)(ProjectsPageContainer);