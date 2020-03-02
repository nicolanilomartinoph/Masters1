import React from 'react';
import ReactDOM from 'react-dom';

class SecurityCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Security Container</h1>
            </div>
        );
    }
}

export default SecurityCont;

if (document.getElementById('SecurityCont')) {
    ReactDOM.render(<SecurityCont />, document.getElementById('SecurityCont'));
}