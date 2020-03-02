import React from 'react';
import ReactDOM from 'react-dom';
import AccountOverviewCont from './DBBodies/accountOverview/AccountOverviewCont'
import StatsCont from './DBBodies/stats/StatsCont'
import StudioCont from './DBBodies/studio/StudioCont'
import MasterCont from './DBBodies/master/MasterCont'
import ConcertCont from './DBBodies/concert/ConcertCont'
import PrivacyCont from './DBBodies/privacy/PrivacyCont'
import SecurityCont from './DBBodies/security/SecurityCont'
import ConnectionsCont from './DBBodies/connections/ConnectionsCont'
import PaymentMethodCont from './DBBodies/paymentMethod/PaymentMethodCont'
import TransactionHistoryCont from './DBBodies/transactionHistory/TransactionHistoryCont'

class DBBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCategory: this.props.bodyCategory.replace(/\s+/g, '')
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bodyCategory !== this.props.bodyCategory) {
            this.setState({
                currentCategory: this.props.bodyCategory.replace(/\s+/g, '')
            })
        }
    }

    render() {
        const components = {
            AccountOverviewCont, StatsCont, StudioCont, MasterCont, ConcertCont, PrivacyCont,
            SecurityCont, ConnectionsCont, PaymentMethodCont, TransactionHistoryCont
        }
        const compName = `${this.state.currentCategory}Cont`
        const category = React.createElement(components[compName])

        return (
            <div className="row" id="DBBodyCont" >
                {/* shows kinds of body depending on the passed props by body cont */}
                {category}
            </div>
        );
    }
}

export default DBBody;

if (document.getElementById('DBBody')) {
    ReactDOM.render(<DBBody />, document.getElementById('DBBody'));
}