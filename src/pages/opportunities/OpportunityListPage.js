import React from "react";
import adminLayout from "../../hoc/adminLayout"
import "./../../assets/css/lead-list.css"

class OpportunityListPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return <>
            <div className="table-container lead-list">
                <div className="row">
                    <div className="col">
                        <h5 className="pb-2 mb-0">Opportunities (Promoted Leads)</h5>
                    </div>
                </div>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
                <div className="d-flex text-muted">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><input type="checkbox"/></th>
                                <th>Basic Details</th>
                                <th>Primary Contact</th>
                                <th>Milestone</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td className="lead-primary-column">
                                    <p className="user-name">Tarun Dhiman</p>
                                    <p className="company-name"><i className="fa fa-building" aria-hidden="true"></i>&nbsp;Eisenvault</p>
                                    <p className="timestamp"><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;21-january-2022</p>
                                </td>
                                <td className="lead-primary-contact-column" >
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;tarun.dhiman@gmail.com</p>
                                    <p><i className="fa fa-phone-square" aria-hidden="true"></i>&nbsp;+91-9878675645</p>
                                </td>
                                <td className="milestone">Milestone 1</td>
                                <td><span className="badge bg-danger">Inactive</span></td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-check-square" aria-hidden="true"></i>&nbsp;Promote</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td className="lead-primary-column">
                                    <p className="user-name">Gagan Chhabra</p>
                                    <p className="company-name"><i className="fa fa-building" aria-hidden="true"></i>&nbsp;Extramarks</p>
                                    <p className="timestamp"><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;02-march-2021</p>
                                </td>
                                <td className="lead-primary-contact-column" >
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;gagan@gmail.com</p>
                                    <p><i className="fa fa-phone-square" aria-hidden="true"></i>&nbsp;+91-6574859685</p>
                                </td>
                                <td className="milestone">Invoiced</td>
                                <td><span className="badge bg-secondary">New</span></td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-check-square" aria-hidden="true"></i>&nbsp;Promote</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td className="lead-primary-column">
                                    <p className="user-name">Ashwani Dhiman</p>
                                    <p className="company-name"><i className="fa fa-building" aria-hidden="true"></i>&nbsp;Biz2x</p>
                                    <p className="timestamp"><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;21-january-2022</p>
                                </td>
                                <td className="lead-primary-contact-column" >
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;ashwani.dhiman@gmail.com</p>
                                    <p><i className="fa fa-phone-square" aria-hidden="true"></i>&nbsp;+91-7485968574</p>
                                </td>
                                <td className="milestone">Agreement Sent</td>
                                <td><span className="badge bg-success">In progress</span></td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-check-square" aria-hidden="true"></i>&nbsp;Promote</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav className="table-bottom-center-pagination" aria-label="Page navigation example ">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    }
}

export default adminLayout(OpportunityListPage);