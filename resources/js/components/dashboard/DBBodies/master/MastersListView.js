import React from 'react';
import ReactDOM from 'react-dom';

class MastersListView extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <ul className="list-group">
                <li>TEST</li>
                <li>TEST</li>
            </ul>
        );
    }
}

export default MastersListView;

if (document.getElementById('MastersListView')) {
    ReactDOM.render(<MastersListView />, document.getElementById('MastersListView'));
}