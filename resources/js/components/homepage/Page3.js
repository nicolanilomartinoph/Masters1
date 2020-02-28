import React from 'react';
import ReactDOM from 'react-dom';
import UpperHeaderCont from './upperHeader/UpperHeaderCont';

class Page3 extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="col-sm-12 mx-auto" id="Page3">

            </div>
        );
    }
}

export default Page3;

if (document.getElementById('Page3')) {
    ReactDOM.render(<Page3 />, document.getElementById('Page3'));
}