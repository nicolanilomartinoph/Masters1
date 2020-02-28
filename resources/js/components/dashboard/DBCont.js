import React from 'react';
import ReactDOM from 'react-dom';
import SideCategoryCont from "./SideCategoryCont"
import DBBodyCont from './DBBodyCont'

class DBCont extends React.Component {
    constructor() {
        super()
        this.state = {
            currentCat: window.localStorage.getItem("categoryHeader")
        }

        this.DBBodyCategoryUpdater = this.DBBodyCategoryUpdater.bind(this);
    }

    DBBodyCategoryUpdater(catName) {
        this.setState({
            currentCat: catName
        })
    }

    render() {
        return (
            <div className="row">
                <SideCategoryCont handleClick={this.DBBodyCategoryUpdater} />
                <DBBodyCont currentCat={this.state.currentCat} />
            </div>
        );
    }
}

export default DBCont;

if (document.getElementById('DBCont')) {
    ReactDOM.render(<DBCont />, document.getElementById('DBCont'));
}