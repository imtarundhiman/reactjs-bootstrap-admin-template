import React from "react";
import adminLayout from "../../hoc/adminLayout"

class CustomerListPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <p>Customer list Content here..</p>
        </>
    }
}

export default adminLayout(CustomerListPage);