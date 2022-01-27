import React from "react";
import adminLayout from "../hoc/adminLayout";
import ModalComponent from "../components/ModalComponent";
class TypographyPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    modalFooterContent(){ 
        return <>
            <div style={{width:"100%"}}>
                <button className="btn btn-default">Save</button> 
            </div>
        </>;
    }

    modalContent(){
        return <>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
        </>;
    }

    render(){
        return (
            <>
            <div className="table-container">
                <div className="row">
                    <div className="col">
                        <h5 className="pb-2 mb-0">Table</h5>
                    </div>
                    <div className="col text-right">
                        <button className="btn btn-default low-height-btn">
                            <i className="fa fa-plus"></i>
                        </button>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Source</th>
                                <th>Created On</th>
                                <th>Updated On</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>Tarun Dhiman</td>
                                <td>tarun.dhiman@abc.com</td>
                                <td>Website</td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>Ashwani Dhiman</td>
                                <td>ashwani.dhiman@abc.com</td>
                                <td>IPO</td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>Ashwani Dhiman</td>
                                <td>ashwani.dhiman@abc.com</td>
                                <td>IPO</td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a className="dropdown-item text-danger" href="#"><i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>Gagan Chhabra</td>
                                <td>gagan@abc.com</td>
                                <td>IPO</td>
                                <td>23-aug-2019</td>
                                <td>26-aug-2019</td>
                                <td>
                                    <div className="dropdown table-action-dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;Edit</a></li>
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
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Modals</h6>
                                <div>
                                    <div className="bd-example">
                                    <div className="d-flex justify-content-between flex-wrap">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalDefault">
                                        Launch demo modal
                                    </button>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fullScreenModalDefault">
                                        Launch Full Screen modal
                                    </button>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#leftModalDefault">
                                        Left sidebar modal
                                    </button>

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rightModalDefault">
                                        Right sidebar modal
                                    </button>
                                    </div>
                                    </div>
                                </div>
                                {/* modals */}
                                <ModalComponent title="Default Modal" footerContent={this.modalFooterContent()} content={this.modalContent()} dataBsBackdrop="static" id="exampleModalDefault"/>
                                {/* full screen */}
                                <ModalComponent title="Full Screen Modal" footerContent={this.modalFooterContent()} content={this.modalContent()} fullScreen="true" dataBsBackdrop="static" id="fullScreenModalDefault"/>
                                {/* right modal */}
                                <ModalComponent title="Right Sidebar Modal" footerContent={this.modalFooterContent()} content={this.modalContent()} className="right" dataBsBackdrop="static" id="rightModalDefault"/>
                                {/* left modal */}
                                <ModalComponent title="Left Sidebar Modal" footerContent={this.modalFooterContent()} content={this.modalContent()} className="left" dataBsBackdrop="static" id="leftModalDefault"/>
                </div>
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Dropdowns</h6>
                                
                                <div>
                                    <div className="bd-example">
                                    <div className="btn-group w-100 align-items-center justify-content-between flex-wrap">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                        <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButtonLG" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
                                        <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                    </div>
        
                                    <div className="bd-example">
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                                    {/* <!-- /btn-group --> */}
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-secondary">Secondary</button>
                                    <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                                    {/* <!-- /btn-group --> */}
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-success">Success</button>
                                    <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                                    {/* <!-- /btn-group --> */}
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-info">Info</button>
                                    <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                                    {/* <!-- /btn-group --> */}
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-warning">Warning</button>
                                    <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                                    {/* <!-- /btn-group --> */}
                                    <div className="btn-group">
                                    <button type="button" className="btn btn-danger">Danger</button>
                                    <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </div>
                                    {/* <!-- /btn-group --> */}
                                    </div>
        
                                    <div className="bd-example">
                                    <div className="btn-group w-100 align-items-center justify-content-between flex-wrap">
                                        <div className="dropend">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropendMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropend button
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropendMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropup">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropupMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropup button
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropupMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropstart">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropstartMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropstart button
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropstartMenuButton">
                                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
        
                                    <div className="bd-example">
                                    <div className="btn-group">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownRightMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        End-aligned menu
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownRightMenuButton">
                                        <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Buttons</h6>
                                <div>
                                    <div className="bd-example">
                                    
                                    <button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button" className="btn btn-secondary">Secondary</button>
                                    <button type="button" className="btn btn-success">Success</button>
                                    <button type="button" className="btn btn-danger">Danger</button>
                                    <button type="button" className="btn btn-warning">Warning</button>
                                    <button type="button" className="btn btn-info">Info</button>
                                    <button type="button" className="btn btn-light">Light</button>
                                    <button type="button" className="btn btn-dark">Dark</button>
        
                                    <button type="button" className="btn btn-link">Link</button>
                                    </div>
        
                                    <div className="bd-example">
                                    
                                    <button type="button" className="btn btn-outline-primary">Primary</button>
                                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                    <button type="button" className="btn btn-outline-success">Success</button>
                                    <button type="button" className="btn btn-outline-danger">Danger</button>
                                    <button type="button" className="btn btn-outline-warning">Warning</button>
                                    <button type="button" className="btn btn-outline-info">Info</button>
                                    <button type="button" className="btn btn-outline-light">Light</button>
                                    <button type="button" className="btn btn-outline-dark">Dark</button>
                                    </div>
        
                                    <div className="bd-example">
                                    <button type="button" className="btn btn-primary btn-sm">Small button</button>
                                    <button type="button" className="btn btn-primary">Standard button</button>
                                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                                    </div>
                                </div>
                        </div>
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Breadcrumb</h6>
                                <div>
                                    <div className="bd-example">
                                    <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                    </nav>
                                    </div>
                                </div>
                        </div>
        
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Headings</h6>
                                <div>
                                    <div className="bd-example">
                                    <p className="h1">Example heading <span className="badge bg-primary">New</span></p>
                                    <p className="h2">Example heading <span className="badge bg-secondary">New</span></p>
                                    <p className="h3">Example heading <span className="badge bg-success">New</span></p>
                                    <p className="h4">Example heading <span className="badge bg-danger">New</span></p>
                                    <p className="h5">Example heading <span className="badge bg-warning text-dark">New</span></p>
                                    <p className="h6">Example heading <span className="badge bg-info text-dark">New</span></p>
                                    <p className="h6">Example heading <span className="badge bg-light text-dark">New</span></p>
                                    <p className="h6">Example heading <span className="badge bg-dark">New</span></p>
                                    </div>
        
                                    <div className="bd-example">
                                    
                                    <span className="badge rounded-pill bg-primary">Primary</span>
                                    <span className="badge rounded-pill bg-secondary">Secondary</span>
                                    <span className="badge rounded-pill bg-success">Success</span>
                                    <span className="badge rounded-pill bg-danger">Danger</span>
                                    <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                    <span className="badge rounded-pill bg-info text-dark">Info</span>
                                    <span className="badge rounded-pill bg-light text-dark">Light</span>
                                    <span className="badge rounded-pill bg-dark">Dark</span>
                                    </div>
                                </div>
                        </div>
        
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Alerts</h6>
                                <div>
                                    <div className="bd-example">
                                    
                                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                                    A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                                    A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                                    A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-light alert-dismissible fade show" role="alert">
                                    A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    <div className="alert alert-dark alert-dismissible fade show" role="alert">
                                    A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                    </div>
        
                                    <div className="bd-example">
                                    <div className="alert alert-success" role="alert">
                                    <h4 className="alert-heading">Well done!</h4>
                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                    <hr />
                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                    </div>
                                    </div>
                                </div>
                        </div>
        
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
                            <div className="d-flex text-muted pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">@username</strong>
                                Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
                            </p>
                            </div>
                            <div className="d-flex text-muted pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
        
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">@username</strong>
                                Some more representative placeholder content, related to this other user. Another status update, perhaps.
                            </p>
                            </div>
                            <div className="d-flex text-muted pt-3">
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
        
                            <p className="pb-3 mb-0 small lh-sm border-bottom">
                                <strong className="d-block text-gray-dark">@username</strong>
                                This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.
                            </p>
                            </div>
                            <small className="d-block text-end mt-3">
                            <a href="#">All updates</a>
                            </small>
                        </div>
        
                            <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
                                <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                    </div>
                                    <span className="d-block">@username</span>
                                </div>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                    </div>
                                    <span className="d-block">@username</span>
                                </div>
                                </div>
                                <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
                                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                    <strong className="text-gray-dark">Full Name</strong>
                                    <a href="#">Follow</a>
                                    </div>
                                    <span className="d-block">@username</span>
                                </div>
                                </div>
                                <small className="d-block text-end mt-3">
                                <a href="#">All suggestions</a>
                                </small>
                            </div>
        
                            <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Forms</h6>
                                <section id="forms">
                                    <article className="my-3" id="overview">
                                    <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                                        <h3>Overview</h3>
                                        <a className="d-flex align-items-center" href="/docs/5.1/forms/overview/">Documentation</a>
                                    </div>
        
                                    <div>
                                        <div className="bd-example">
                                        <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                        </div>
                                        <fieldset className="mb-3">
                                            <legend>Radios buttons</legend>
                                            <div className="form-check">
                                            <input type="radio" name="radios" className="form-check-input" id="exampleRadio1" />
                                            <label className="form-check-label" htmlFor="exampleRadio1">Default radio</label>
                                            </div>
                                            <div className="mb-3 form-check">
                                            <input type="radio" name="radios" className="form-check-input" id="exampleRadio2" />
                                            <label className="form-check-label" htmlFor="exampleRadio2">Another radio</label>
                                            </div>
                                        </fieldset>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="customFile">Upload</label>
                                            <input type="file" className="form-control" id="customFile" />
                                        </div>
                                        <div className="mb-3 form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="customRange3" className="form-label">Example range</label>
                                            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                        </div>
                                    </div>
                                    </article>
                                    <article className="my-3" id="disabled-forms">
                                    <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                                        <h3>Disabled forms</h3>
                                        <a className="d-flex align-items-center" href="/docs/5.1/forms/overview/#disabled-forms">Documentation</a>
                                    </div>
        
                                    <div>
                                        <div className="bd-example">
                                        <form>
                                        <fieldset disabled="" aria-label="Disabled fieldset example">
                                            <div className="mb-3">
                                            <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
                                            </div>
                                            <div className="mb-3">
                                            <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                                            <select id="disabledSelect" className="form-select">
                                                <option>Disabled select</option>
                                            </select>
                                            </div>
                                            <div className="mb-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled=""/>
                                                <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                                Can't check this
                                                </label>
                                            </div>
                                            </div>
                                            <fieldset className="mb-3">
                                            <legend>Disabled radios buttons</legend>
                                            <div className="form-check">
                                                <input type="radio" name="radios" className="form-check-input" id="disabledRadio1" disabled="" />
                                                <label className="form-check-label" htmlFor="disabledRadio1">Disabled radio</label>
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="radio" name="radios" className="form-check-input" id="disabledRadio2" disabled="" />
                                                <label className="form-check-label" htmlFor="disabledRadio2">Another radio</label>
                                            </div>
                                            </fieldset>
                                            <div className="mb-3">
                                            <label className="form-label" htmlFor="disabledCustomFile">Upload</label>
                                            <input type="file" className="form-control" id="disabledCustomFile" disabled="" />
                                            </div>
                                            <div className="mb-3 form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="disabledSwitchCheckChecked" disabled="" />
                                            <label className="form-check-label" htmlFor="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
                                            </div>
                                            <div className="mb-3">
                                            <label htmlFor="disabledRange" className="form-label">Disabled range</label>
                                            <input type="range" className="form-range" min="0" max="5" step="0.5" id="disabledRange" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </fieldset>
                                        </form>
                                        </div>
                                    </div>
                                    </article>
                                    <article className="my-3" id="sizing">
                                    <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                                        <h3>Sizing</h3>
                                        <a className="d-flex align-items-center" href="/docs/5.1/forms/form-control/#sizing">Documentation</a>
                                    </div>
        
                                    <div>
                                        <div className="bd-example">
                                        <div className="mb-3">
                                        <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                                        </div>
                                        <div className="mb-3">
                                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <input type="file" className="form-control form-control-lg" aria-label="Large file input example" />
                                        </div>
                                        </div>
        
                                        <div className="bd-example">
                                        <div className="mb-3">
                                        <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
                                        </div>
                                        <div className="mb-3">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <input type="file" className="form-control form-control-sm" aria-label="Small file input example" />
                                        </div>
                                        </div>
                                    </div>
                                    </article>
                                    <article className="my-3" id="input-group">
                                    <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                                        <h3>Input group</h3>
                                        <a className="d-flex align-items-center" href="/docs/5.1/forms/input-group/">Documentation</a>
                                    </div>
        
                                    <div>
                                        <div className="bd-example">
                                        <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                                        </div>
                                        <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                                        <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                        </div>
                                        <div className="input-group mb-3">
                                        <span className="input-group-text">$</span>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <span className="input-group-text">.00</span>
                                        </div>
                                        <div className="input-group">
                                        <span className="input-group-text">With textarea</span>
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                        </div>
                                        </div>
                                    </div>
                                    </article>
                                    <article className="my-3" id="floating-labels">
                                    <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                                        <h3>Floating labels</h3>
                                        <a className="d-flex align-items-center" href="/docs/5.1/forms/floating-labels/">Documentation</a>
                                    </div>
        
                                    <div>
                                        <div className="bd-example">
                                        <form>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Email address</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        </form>
                                        </div>
                                    </div>
                                    </article>
                                    <article className="my-3" id="validation">
                                    <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                                        <h3>Validation</h3>
                                        <a className="d-flex align-items-center" href="/docs/5.1/forms/validation/">Documentation</a>
                                    </div>
        
                                    <div>
                                        <div className="bd-example">
                                        <form className="row g-3">
                                        <div className="col-md-4">
                                            <label htmlFor="validationServer01" className="form-label">First name</label>
                                            <input type="text" className="form-control is-valid" id="validationServer01" required="" />
                                            <div className="valid-feedback">
                                            Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="validationServer02" className="form-label">Last name</label>
                                            <input type="text" className="form-control is-valid" id="validationServer02" required="" />
                                            <div className="valid-feedback">
                                            Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="validationServerUsername" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend3">@</span>
                                            <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required="" />
                                            <div className="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationServer03" className="form-label">City</label>
                                            <input type="text" className="form-control is-invalid" id="validationServer03" required="" />
                                            <div className="invalid-feedback">
                                            Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationServer04" className="form-label">State</label>
                                            <select className="form-select is-invalid" id="validationServer04" required="">
                                            <option disabled="" >Choose...</option>
                                            <option>...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                            Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationServer05" className="form-label">Zip</label>
                                            <input type="text" className="form-control is-invalid" id="validationServer05" required="" />
                                            <div className="invalid-feedback">
                                            Please provide a valid zip.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                            <input className="form-check-input is-invalid" type="checkbox" id="invalidCheck3" required="" />
                                            <label className="form-check-label" htmlFor="invalidCheck3">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                        </form>
                                        </div>
                                    </div>
                                    </article>
                                </section>
                            </div>
        
                            <div className="my-3 p-3 bg-body rounded shadow-sm">
                                <h6 className="border-bottom pb-2 mb-0">Accordins</h6>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h4 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                        </h4>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h4 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                        </h4>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h4 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                        </h4>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
            </>
          );
    }
}

export default adminLayout(TypographyPage);