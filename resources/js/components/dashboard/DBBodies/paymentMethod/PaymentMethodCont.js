import React from 'react';
import ReactDOM from 'react-dom';

class PaymentMethodCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="pageUnderConstruction">Payment Method Container</h1>
            </div>
        );
    }
}

export default PaymentMethodCont;

if (document.getElementById('PaymentMethodCont')) {
    ReactDOM.render(<PaymentMethodCont />, document.getElementById('PaymentMethodCont'));
}