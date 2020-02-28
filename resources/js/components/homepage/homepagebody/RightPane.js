import React from 'react';
import ReactDOM from 'react-dom';

class RightPane extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <img className="col-xl-12 col-6 mx-0 mt-xl-0 mt-5 hover_transform " src="./img/hpbodyphoto.png" id="musicians5" />
        );
    }
}

export default RightPane;

if (document.getElementById('RightPane')) {
    ReactDOM.render(<RightPane />, document.getElementById('RightPane'));
}