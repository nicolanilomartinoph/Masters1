import React from 'react';
import ReactDOM from 'react-dom';

class StudioCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Studio Container</h1>
            </div>
        );
    }
}

export default StudioCont;

if (document.getElementById('StudioCont')) {
    ReactDOM.render(<StudioCont />, document.getElementById('StudioCont'));
}