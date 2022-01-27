import React from "react";
import Header from './../common/header';
import Sidebar from './../common/sidebar';
import { Preloader, Bars } from 'react-preloader-icon';

const adminLayout = (ChildComponent) => {
    class AdminLayout extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {
                pageLoaded: false,
                saveLeadClickEvent: ""
            };
        }

        componentDidMount(){
            setTimeout(() => {
                this.setState(() => ({
                    pageLoaded: true
                }))
            }, 1000);
        }

        renderHtml(){
            if(!this.state.pageLoaded){
                return <div className="loading-page">
                    <div className="center">
                        <Preloader use={Bars} size={60} strokeWidth={10} strokeColor="#f7b085" duration={600} />
                    </div>
              </div>
            }

            return <div className="d-flex" id="wrapper">
                {/* <!-- Sidebar--> */}
                <Sidebar/>
                {/* <!-- Page content wrapper--> */}
                <div className="main" id="page-content-wrapper">
                    {/* <!-- Top navigation--> */}
                    <Header />
                    {/* <!-- Page content--> */}
                    <div className="container-fluid content-container">
                        <ChildComponent {...this.props} />
                    </div>
                </div>
            </div>
        }

        addLeadModalFooterContent(){ 
            return <>
                <div style={{width:"100%"}}>
                    <button onClick={(e) => this.setState(() => ({saveLeadClickEvent: (Math.random() + 1).toString(36).substring(7)}))} className="btn btn-default low-height-btn">Add Lead</button> 
                </div>
            </>;
        }

        handleParentData = (e) => {
            console.log(e);
        }

        render(){
            return <>
                {this.renderHtml()}
            </>
        }
    }

    return AdminLayout;
}

export default adminLayout;