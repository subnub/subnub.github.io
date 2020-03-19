import React from "react";
import ProjectItem from "./ProjectItem";
import {setSelectedItem} from "../../actions/selected";
import {connect} from "react-redux";

class ProjectItemContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    gitClick = (link) => {

        console.log(link);
        window.open(link, "_blank")
    }

    infoClick = (title, body, color, github, image, longBody, demo) => {

        // console.log("info", info)
        console.log("set selected", image);
        
        this.props.dispatch(setSelectedItem(title, body, color, github, image, longBody, demo))
    }

    render() {

        return <ProjectItem 
                {...this.props}
                gitClick={this.gitClick}
                infoClick={this.infoClick}/>
    }
}

export default connect()(ProjectItemContainer);