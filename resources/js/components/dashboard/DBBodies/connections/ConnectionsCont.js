import React from 'react';
import ReactDOM from 'react-dom';

class ConnectionsCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Connections Container</h1>
            </div>
        );
    }
}

export default ConnectionsCont;

if (document.getElementById('ConnectionsCont')) {
    ReactDOM.render(<ConnectionsCont />, document.getElementById('ConnectionsCont'));
}