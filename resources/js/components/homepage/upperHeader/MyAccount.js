import React from 'react';
import ReactDOM from 'react-dom';

class MyAccount extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row mx-auto">
                <a href="#" className="UpperHeaderText">MyAccount</a>
                <a href="#" >
                    <img className="my-auto ml-4 mt-3" src="/img/downArrow.png" id="downArrow" />
                </a>
            </div>
        );
    }
}

export default MyAccount;

if (document.getElementById('MyAccount')) {
    ReactDOM.render(<MyAccount />, document.getElementById('MyAccount'));
}

/*
<div className=" col-xl-8 my-sm-auto">
                <div className="row">
                    <div className="col-8"><a href="#" className="UpperHeaderCont_text">MyAccount</a></div>
                    <div className="col-4"><a href="#"><img src="/img/downArrow.png" id="downArrow" /></a></div>
                </div>
            </div>
            */