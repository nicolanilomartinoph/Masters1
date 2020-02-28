import React from 'react';
import ReactDOM from 'react-dom';

class LNAU extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: this.props.content.img,
            date: this.props.content.date,
            title: this.props.content.title,
            href: this.props.content.href
        }
    }

    render() {
        return (
            <a className="col-xl-3 col-4 mx-xl-1 mx-auto hover_transform" href={this.state.href}>
                <div className="card" style={{ border: "none" }}>
                    <img className="card-img lnau_img" src={this.state.img} />
                    <div className="card-img-overlay">
                        <h3 className="text-light lnau_date">{this.state.date}</h3>
                        <h1 className="text-light lnau_title">{this.state.title}</h1>
                    </div>
                </div>
            </a>
        );
    }
}

export default LNAU;

if (document.getElementById('LNAU')) {
    ReactDOM.render(<LNAU />, document.getElementById('LNAU'));
}