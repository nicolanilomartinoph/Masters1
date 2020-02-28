import React from 'react';
import ReactDOM from 'react-dom';


class DBBody extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div className="row" id="DBBodyCont">
                <div className="col-12 text-center my-5">
                    <i className="material-icons" id="build_icon">build</i>
                    <h1 id="pageUnderConstruction">PAGE UNDER CONSTRUCTION</h1>
                </div>
            </div>
        );
    }
}

export default DBBody;

if (document.getElementById('DBBody')) {
    ReactDOM.render(<DBBody />, document.getElementById('DBBody'));
}