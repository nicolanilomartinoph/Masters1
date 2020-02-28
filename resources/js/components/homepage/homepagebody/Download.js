import React from 'react';
import ReactDOM from 'react-dom';

class Download extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <a href="#">
                <div id="Download">
                    DOWNLOAD
                </div>
            </a>
        );
    }
}

export default Download;

if (document.getElementById('Download')) {
    ReactDOM.render(<Download />, document.getElementById('Download'));
}