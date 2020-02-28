import React from 'react';
import ReactDOM from 'react-dom';
import UpperHeaderCont from './upperHeader/UpperHeaderCont';
import NavbarCont from './navbar/NavbarCont';
import HomepageBody from './homepagebody/HomepageBody';
import LNAUCont from './homepagebody/LNAUCont';

class Page1 extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="col-12 mx-auto" id="Page1">
                <UpperHeaderCont />
                <NavbarCont />
                <div className="container" id="hpbody">
                    <div className="row">
                        <HomepageBody />
                    </div>
                    <div className="row">
                        <LNAUCont />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;

if (document.getElementById('Page1')) {
    ReactDOM.render(<Page1 />, document.getElementById('Page1'));
}