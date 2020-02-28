import React from 'react';
import ReactDOM from 'react-dom';
import Download from './Download';
import ExploreTheMasters from './ExploreTheMasters';

class LeftPane extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 text-center text-xl-left" id="enter_your_music_text">ENTER YOUR MUSIC</div>
                <div className="col-12 text-center text-xl-left" id="leftPaneParagraph">
                    Master your own sound and extend your reach. Bring your music out into the world and
                    create unity with your art.
                </div>
                <div className="col-12" id="DLandExploreTheMasters">
                    <div className="row no-gutter mt-xl-5 mt-5">
                        <div className="col-xl-4 col-3 mx-xl-0 mx-auto">
                            <Download />
                        </div>
                        <div className="col-xl-6 col-4  mx-xl-0 mx-auto">
                            <ExploreTheMasters />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default LeftPane;

if (document.getElementById('LeftPane')) {
    ReactDOM.render(<LeftPane />, document.getElementById('LeftPane'));
}