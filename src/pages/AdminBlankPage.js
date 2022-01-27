import React from "react";
import adminLayout from "../hoc/adminLayout"

class AdminBlankPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <p>Content here..</p>
        </>
    }
}

export default adminLayout(AdminBlankPage);