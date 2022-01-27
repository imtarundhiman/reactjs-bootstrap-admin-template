import React from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/userProfileLayout";

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Change Password</h6>

                    <div className="row">
                        <div className="col-4">
                            <p>Your Password must contain.</p>
                            <p> <i className="fa fa-check"></i> At least 8 characters.</p>
                            <p> <i className="fa fa-check"></i> at least 1 number.</p>
                            <p> <i className="fa fa-check"></i> at least 1 special character.</p>
                            <p> <i className="fa fa-check"></i> mixed case characters.</p>
                        </div>
                        <div className="col-8">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Current Password</label>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Current Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">New Password</label>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="New Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Confirm New Password</label>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Confirm New Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                                    </div>
                                </div>
                                <hr/>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </>
    }
}

export default userProfileLayout(ProfilePage);