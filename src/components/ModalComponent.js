import React from "react";
import PropTypes from 'prop-types';

class ModalComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    renderFooter(){
        if(this.props.footerContent){
            return <>
                <div className="modal-footer">
                    {this.props.footerContent}
                </div>
            </>;
        }
    }

    render(){
        return <>
            <div className={`modal fade ${this.props.className}`} id={this.props.id} tabIndex="-1" aria-labelledby={this.props.exampleModalLabel} data-bs-backdrop={this.props.dataBsBackdrop} aria-hidden={this.props.ariaHidden} style={{display: "none"}}>
                <div className={`${this.props.fullScreen ? 'modal-fullscreen': ''} modal-dialog modal-dialog-scrollable`}>
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>
                    <div className="modal-body">
                        {this.props.content}
                    </div>
                    {this.renderFooter()}
                    </div>
                </div>
            </div>
        </>;
    }
}

ModalComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default ModalComponent;