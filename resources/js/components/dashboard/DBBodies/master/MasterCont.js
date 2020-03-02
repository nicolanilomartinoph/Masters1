import React from 'react';
import ReactDOM from 'react-dom';
import MastersListView from './MastersListView'
const history = []
const typing = false

class MasterCont extends React.Component {
    constructor() {
        super()
        this.handleInputOnChange = this.handleInputOnChange.bind(this)
        this.debounce = this.debounce.bind(this)
        this.state = {
            query: '',
            title: null,
            composer: null,
            performer: null,
            arranger: null,
            genre: null,
        }
    }

    // do not fire the query immediately after recieving an input
    // delay the axios query until typing has stopped 
    // delay once typing have stopped is 1500 ms

    // Updates the state with the search parameters from Input
    handleInputOnChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState !== this.state) {
            console.log("State has changed")
        }
    }

    // Waits for the search parameters to settle down before firing searchQuery()
    debounce(func = function () {
        console.log(context)
        console.log(args)
        console.log("Func")
    }, wait = 1, immediate = true) {
        var timeout;

        return function executedFunction() {
            var context = this;
            console.log(context)
            var args = arguments;

            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            var callNow = immediate && !timeout;

            clearTimeout(timeout);

            timeout = setTimeout(later, wait);

            if (callNow) func.apply(context, args);
        };
    };

    searchQuery() {

    }

    render() {
        return (
            <div className="col-10 m-3">
                <div className="row DBsectionHeader">
                    <div className="col-12 m-auto">
                        Search titles
                    </div>
                </div>
                <div className="row DBsectionBody form-group">
                    <div className="col-3 input-group-lg" id="selection">
                        <input className="form-control d-block col-10 DBinput m-4" onChange={event => this.debounce()} name="title" type="text" placeholder="Title" />
                        <input className="form-control d-block col-10 DBinput m-4" onChange={event => this.handleInputOnChange(event)} name="composer" type="text" placeholder="Composer" />
                        <input className="form-control d-block col-10 DBinput m-4" onChange={event => this.handleInputOnChange(event)} name="performer" type="text" placeholder="Performer" />
                        <input className="form-control d-block col-10 DBinput m-4" onChange={event => this.handleInputOnChange(event)} name="arranger" type="text" placeholder="Arranger" />
                        <input className="form-control d-block col-10 DBinput m-4" onChange={event => this.handleInputOnChange(event)} name="genre" type="text" placeholder="Genre" />
                    </div>
                    <div className="col-9" id="selectionResult">
                        <div className="row" id="header">
                            <div className="col-12" style={{ fontSize: "40px" }}>
                                Results
                            </div>
                        </div>
                        <hr />
                        <div className="row" id="body">
                            <div className="col-12 bg-danger">
                                <MastersListView />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default MasterCont;

if (document.getElementById('MasterCont')) {
    ReactDOM.render(<MasterCont />, document.getElementById('MasterCont'));
}