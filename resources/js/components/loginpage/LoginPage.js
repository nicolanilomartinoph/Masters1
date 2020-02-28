import React from 'react';
import ReactDOM from 'react-dom';

class LoginPage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div id="loginPage">
                <div className="container" id="loginPageCont">
                    <div className="row justify-content-center">
                        <img className="mt-lg-4" src="/img/navbar/masterLogo.png" />
                        <div className="w-100"></div>
                        <div className="col-5 justify-content-center">
                            <form className="row mt-lg-5 mt-1">

                                <input type="email" placeholder="Email or Username" className="col-12 my-3"
                                    id="usernameInput"></input>
                                <input type="password" placeholder="Password" className="col-12 my-3"
                                    id="passwordInput"></input>

                                <button type="submit" className="w-100 mt-3" id="loginButton">Log In</button>
                            </form>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-5 justify-content-center mt-4">
                            <div className="row justify-content-center">OR LOG IN WITH </div>
                            <div className="row no-gutter justify-content-between mt-3">
                                <div className="col-5 fa fa-facebook-official text-center">{` `}<span id="facebook-text">Facebook</span></div>
                                <div className="col-5 text-center my-auto" id="google-icon-cont">{` `}{` `}<img src="/img/google-icon.png" id="google-icon" /> Google</div>
                            </div>
                        </div>
                        <div className="w-100"></div>
                        <div className="row mt-3">
                            <div className="col-12 light-blue-text">Create a free Masters Account</div>
                        </div>
                        <div className="w-100"></div>
                        <div className="row mt-3">
                            <div className="col-12 light-blue-text">Can't log in?</div>
                        </div>
                        <div className="w-100"></div>

                    </div>
                    <div className="row justify-content-center loginFooter">

                        <div className="col-2 text-center footerItems my-auto"><a href="#">Masters' EULA</a></div>|
                        <div className="col-2 text-center footerItems my-auto"><a href="#">PRIVACY</a></div>|
                        <div className="col-2 text-center footerItems my-auto"><a href="#">TERMS</a></div>|
                        <div className="col-3 text-center footerItems my-auto"><a href="#">COPYRIGHT INFRINGEMENT</a></div>|
                        <div className="col-2 text-center footerItems my-auto"><a href="#">COOKIES</a></div>
                        <div className="w-100"></div>
                        <div className="row mt-3">
                            <div className="col-12 justify-content-center">
                                ©2020 MASTERS , INC. ALL RIGHTS RESERVED.
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default LoginPage;

if (document.getElementById('LoginPage')) {
    ReactDOM.render(<LoginPage />, document.getElementById('LoginPage'));
}