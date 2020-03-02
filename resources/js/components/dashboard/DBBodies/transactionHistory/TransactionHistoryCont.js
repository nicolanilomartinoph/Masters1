import React from 'react';
import ReactDOM from 'react-dom';

class TransactionHistoryCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Transaction History Container</h1>
            </div>
        );
    }
}

export default TransactionHistoryCont;

if (document.getElementById('TransactionHistoryCont')) {
    ReactDOM.render(<TransactionHistoryCont />, document.getElementById('TransactionHistoryCont'));
}