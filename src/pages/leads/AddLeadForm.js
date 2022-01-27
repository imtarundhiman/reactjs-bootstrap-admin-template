import React from 'react'

class AddLeadForm extends React.Component {
    constructor(props){
        super(props);

        this.state= {
            loading: false,
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.clickEvent !== this.props.clickEvent){
            this.saveLead();
        }
    }

    saveLead(){
        this.props.handleSaveLoadingStatus(this.state.loading);
    }

    render(){
        return <>
            <form>
                <div className="row">
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label className="my-1">Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label className="my-1">Email</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label className="my-1">Contact Number</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label className="my-1">Organisation Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label className="my-1">Lead Source</label>
                            <select className="form-control">
                                <option>Website</option>
                                <option>Broker</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 my-2">
                        <div className="form-group">
                            <label className="my-1">Description</label>
                            <textarea rows="7" className="form-control"></textarea>
                        </div>
                    </div>
                    
                </div>
            </form>
        </>
    }
}

export default AddLeadForm;