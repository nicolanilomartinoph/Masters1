import React from 'react';
import ReactDOM from 'react-dom';

class ExploreTheMasters extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <a href="#">
                <div id="ExploreTheMasters">
                    EXPLORE THE MASTERS
                </div>
            </a >
        );
    }
}

export default ExploreTheMasters;

if (document.getElementById('ExploreTheMasters')) {
    ReactDOM.render(<ExploreTheMasters />, document.getElementById('ExploreTheMasters'));
}