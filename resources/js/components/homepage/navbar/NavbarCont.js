import React from 'react';
import ReactDOM from 'react-dom';

class NavbarCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="row d-xl-block d-none no-gutter mt-5 mx-auto" id="NavBarCont">
                    <div className="col-12 mx-2">
                        <div className="row">
                            <div className="col-12 ml-1">
                                <img className="" src="/img/navbar/masterLogo.png" id="masterLogo" />
                                <div className="d-flex flex-row justify-content-end" >
                                    <div className="nvbut" id="emptySpace"></div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="gameCont">
                                        <span className="d-flex justify-content-center">GAME</span>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="newsCont">
                                        <span className="d-flex justify-content-center">NEWS</span>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="forumCont">
                                        <span className="d-flex justify-content-center">FORUM</span>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="storeCont">
                                        <span className="d-flex justify-content-center">STORE</span>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="concertCont">
                                        <span className="d-flex justify-content-center">CONCERT</span>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="sinewaveCont">
                                        <span className="d-flex justify-content-center">SINEWAVE</span>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column " id="searchCont">
                                        <a><i className="fa fa-search" id="searchIcon"></i></a>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="loginCont">
                                        <span className="d-flex justify-content-center">
                                            <a href="/login">LOG IN</a>
                                        </span>
                                    </div>
                                    <div className="nvbut d-flex justify-content-center flex-column" id="registerCont">
                                        <span className="d-flex justify-content-center">
                                            <a href="/register">REGISTER</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="d-flex d-xl-none justify-content-between" id="NavbarContAlt">
                    <div className="col-1 d-flex justify-content-center align-self-center">
                        <button className="material-icons" type="button" id="leftModalBtn" data-toggle="modal" data-target="#leftModal">
                            dehaze
                        </button>
                    </div>
                    <div className="modal left slide d-xl-none" id="leftModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-transparent">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-10 text-center">
                                        <h1 className="close_modal_button text-light">MASTERS</h1>
                                    </div>
                                    <button type="button" className="col-1 close " data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" className="close_modal_button text-light">&times;</span>
                                    </button>
                                </div>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">GAME</span>
                                    </div>
                                </a>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">NEWS</span>
                                    </div>
                                </a>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">FORUM</span>
                                    </div>
                                </a>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">STORE</span>
                                    </div>
                                </a>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">CONCERT</span>
                                    </div>
                                </a>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">SINEWAVE</span>
                                    </div>
                                </a>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">MY ACCOUNT</span>
                                    </div>
                                </a>
                                <a href="#" className="row text-light modal_hover">
                                    <div className="col-12 my-3 ml-3">
                                        <span className="modal_items">SETTINGS</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-self-center" >
                        <img src="/img/navbar/masterLogo.png" id="masterLogoAlt" />
                    </div>
                    <div className="col-1 d-flex justify-content-center align-self-center">
                        <i className="material-icons">
                            perm_identity
                        </i>
                    </div>
                </div>
                
            </>
        );
    }
}

export default NavbarCont;

if (document.getElementById('NavbarCont')) {
                    ReactDOM.render(<NavbarCont />, document.getElementById('NavbarCont'));
        }
        
        /*
        
        
                        */