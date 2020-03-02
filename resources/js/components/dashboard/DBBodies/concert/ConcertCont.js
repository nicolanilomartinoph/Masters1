import React from 'react';
import ReactDOM from 'react-dom';

class ConcertCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Concert Container</h1>
            </div>
        );
    }
}

export default ConcertCont;

if (document.getElementById('ConcertCont')) {
    ReactDOM.render(<ConcertCont />, document.getElementById('ConcertCont'));
}