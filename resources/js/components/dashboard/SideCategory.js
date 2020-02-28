import React from 'react';
import ReactDOM from 'react-dom';

class SideCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: this.props.Style[1],
        }

        this.highlight = this.highlight.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {
            clicked: props.Style[1]
        }
    }

    highlight() {
        this.props.clicked(this.props.Style[0], this.props.Style[3]);
        window.localStorage.setItem("category", `${this.props.Style[0]}`)
        window.localStorage.setItem("categoryHeader", `${this.props.Style[3]}`)
    }

    render() {
        let style = {
            textDecoration: "none",
        }
        if (this.state.clicked === true) {
            style = {
                textDecoration: "none",
                background: "rgba(108, 112, 218,0.5)",
                color: "white"
            }
        }

        return (
            <a className="row my-2 sideCategory" href="#" style={style} onClick={this.highlight}>
                <div className="col-2 justify-content-center align-self-center d-table">
                    <i className="d-table-cell align-middle my-auto material-icons">{this.props.Style[2]}</i>
                </div>
                <div className="col-10 align-self-center d-table">
                    <div className="d-table-cell align-middle my-auto h1"  >{this.props.Style[3]}</div>
                </div>
            </a >
        );
    }
}

export default SideCategory;

if (document.getElementById('SideCategory')) {
    ReactDOM.render(<SideCategory />, document.getElementById('SideCategory'));
}