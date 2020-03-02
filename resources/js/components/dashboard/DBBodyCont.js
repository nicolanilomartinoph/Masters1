import React from 'react';
import ReactDOM from 'react-dom';
import DBBody from './DBBody';

class DBBodyCont extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: this.props.currentCat
        }
        console.log(this.state.header)
    }

    static getDerivedStateFromProps(props, state) {
        return {
            header: props.currentCat
        }
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="col-9">
                <div className="row">
                    <header className="col-12 mt-lg-5">
                        <h1 className="col-12 " id="dbBodyHeader">{this.state.header}</h1>
                    </header>
                </div>
                <DBBody bodyCategory={this.state.header} />
            </div>
        );
    }
}

export default DBBodyCont;

if (document.getElementById('DBBodyCont')) {
    ReactDOM.render(<DBBodyCont />, document.getElementById('DBBodyCont'));
}
