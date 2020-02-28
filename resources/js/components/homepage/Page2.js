import React from 'react';
import ReactDOM from 'react-dom';
import UpperHeaderCont from './upperHeader/UpperHeaderCont';

class Page2 extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="col-sm-12 mx-auto" id="Page2">

            </div>
        );
    }
}

export default Page2;

if (document.getElementById('Page2')) {
    ReactDOM.render(<Page2 />, document.getElementById('Page2'));
}