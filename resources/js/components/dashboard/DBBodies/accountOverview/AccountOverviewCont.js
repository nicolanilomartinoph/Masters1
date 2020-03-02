import React from 'react';
import ReactDOM from 'react-dom';

class AccountOverviewCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Account Overview Container</h1>
            </div>
        );
    }
}

export default AccountOverviewCont;

if (document.getElementById('AccountOverviewCont')) {
    ReactDOM.render(<AccountOverviewCont />, document.getElementById('AccountOverviewCont'));
}