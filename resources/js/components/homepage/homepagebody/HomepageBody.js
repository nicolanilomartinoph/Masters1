import React from 'react';
import ReactDOM from 'react-dom';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

class HomepageBody extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="col-xl-6 col-lg-12">
                    <LeftPane />
                </div>
                <div className="col-xl-6 col-lg-12">
                    <div className="d-flex justify-content-center">
                        <RightPane />
                    </div>
                </div>
            </>
        );
    }
}

export default HomepageBody;

if (document.getElementById('HomepageBody')) {
    ReactDOM.render(<HomepageBody />, document.getElementById('HomepageBody'));
}