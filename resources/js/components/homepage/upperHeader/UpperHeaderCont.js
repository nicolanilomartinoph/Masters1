import React from 'react';
import ReactDOM from 'react-dom';
import Support from './Support';
import MyAccount from './MyAccount';

class UpperHeaderCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row d-xl-block d-none" id="UpperHeaderCont">
                <div className="col-2 col-md-2 col-lg-2 col-xl-1 offset-6 offset-md-7 offset-lg-8 offset-xl-9 my-auto">
                    <Support />
                </div>
                <div className="col-3 col-md-3 col-lg-2 my-auto">
                    <MyAccount />
                </div>
            </div>
        );
    }
}

export default UpperHeaderCont;

if (document.getElementById('UpperHeaderCont')) {
    ReactDOM.render(<UpperHeaderCont />, document.getElementById('UpperHeaderCont'));
}