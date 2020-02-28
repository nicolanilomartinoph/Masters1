import React from 'react';
import ReactDOM from 'react-dom';

class Support extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <a href="#" className="UpperHeaderText">Support</a>
        );
    }
}

export default Support;

if (document.getElementById('Support')) {
    ReactDOM.render(<Support />, document.getElementById('Support'));
}

/*
<div className="col-lg-6 col-md-5 col-sm-4 my-sm-auto">
                <a className="UpperHeaderCont_text" href="#">Support</a>
            </div>
            */