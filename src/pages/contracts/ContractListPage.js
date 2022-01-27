import React from "react";
import adminLayout from "../../hoc/adminLayout"

class ContractListPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <p>Contract list Content here..</p>
        </>
    }
}

export default adminLayout(ContractListPage);