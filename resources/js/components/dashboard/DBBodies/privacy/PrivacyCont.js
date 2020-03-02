import React from 'react';
import ReactDOM from 'react-dom';

class PrivacyCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Privacy Container</h1>
            </div>
        );
    }
}

export default PrivacyCont;

if (document.getElementById('PrivacyCont')) {
    ReactDOM.render(<PrivacyCont />, document.getElementById('PrivacyCont'));
}