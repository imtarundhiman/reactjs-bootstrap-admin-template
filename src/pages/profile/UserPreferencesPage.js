import React from "react";
import "../../assets/css/profile.css"
import userProfileLayout from "../../hoc/userProfileLayout";

class UserPreferencesPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Basic Preferences</h6>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="selectbox" className="form-label">Locale</label>
                                    <select id="selectbox" className="form-select">
                                        <option>English</option>
                                        <option>French</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="selectbox" className="form-label">Timezone</label>
                                    <select id="selectbox" className="form-select">
                                        <option>Asia/Kolkata</option>
                                        <option>Asia/China</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0 mb-3">Email Preferences</h6>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3 form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="disabledSwitchCheckChecked"/>
                                    <label className="form-check-label" htmlFor="disabledSwitchCheckChecked">
                                        <p>App updates <span className="text-gray-italic"> Receive notifications whenever we release a new update</span></p>
                                    </label>
                                </div>
                                <div className="mb-3 form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="disabledSwitchCheckChecked"/>
                                    <label className="form-check-label" htmlFor="disabledSwitchCheckChecked">
                                        <p>Task Assigned <span className="text-gray-italic"> Receive notifications whenever a new task is assigned to you </span></p>
                                    </label>
                                </div>
                                <div className="mb-3 form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="disabledSwitchCheckChecked"/>
                                    <label className="form-check-label" htmlFor="disabledSwitchCheckChecked">
                                        <p>Comments Added <span className="text-gray-italic"> Receive notifications whenever a comment is added to a document that you follow </span></p>
                                    </label>
                                </div>
                                <div className="mb-3 form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="disabledSwitchCheckChecked"/>
                                    <label className="form-check-label" htmlFor="disabledSwitchCheckChecked">
                                        <p>Document updated <span className="text-gray-italic"> Receive notifications whenever a document that you follow is edited. </span></p>
                                    </label>
                                </div>
                                <hr/>
                                <button className="btn btn-default">Update Preferences</button>
                            </div>
                        </div>
                </div>
            
        </>
    }
}

export default userProfileLayout(UserPreferencesPage);