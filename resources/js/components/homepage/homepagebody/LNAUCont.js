import React from 'react';
import ReactDOM from 'react-dom';
import LNAU from './LNAU';

class LNAUCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }

        this.LNAUdata = [
            {
                img: "/img/versus.jpg",
                date: "January 20, 2020",
                title: "Battle Of The Bands",
                href: "#"
            },
            {
                img: "/img/sheetmusic.jpg",
                date: "January 23, 2020",
                title: "Music Theory Battle",
                href: "#"
            }
        ]
    }

    render() {
        return (
            <div className="col-xl-12">
                <header className="row">
                    <div className="col-12 text-xl-left text-center" id="lnau_header">Latest news and update</div>
                </header>
                <main className="row">
                    <LNAU content={this.LNAUdata[0]} />
                    <LNAU content={this.LNAUdata[1]} />
                </main>
            </div>
        );
    }
}

export default LNAUCont;

if (document.getElementById('LNAUCont')) {
    ReactDOM.render(<LNAUCont />, document.getElementById('LNAUCont'));
}