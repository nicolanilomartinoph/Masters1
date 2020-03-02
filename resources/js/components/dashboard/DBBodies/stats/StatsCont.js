import React from 'react';
import ReactDOM from 'react-dom';

class StatsCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Stats Container</h1>
            </div>
        );
    }
}

export default StatsCont;

if (document.getElementById('StatsCont')) {
    ReactDOM.render(<StatsCont />, document.getElementById('StatsCont'));
}