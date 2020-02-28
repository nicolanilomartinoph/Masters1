import React from 'react';
import ReactDOM from 'react-dom';
import SideCategory from './SideCategory';

class SideCategoryCont extends React.Component {
    constructor() {
        super()
        this.state = {
            currentHL: window.localStorage.getItem("category")
        }

        this.categories = {
            cat1: ["cat1", false, "home", "Account Overview"],
            cat2: ["cat2", false, "pie_chart", "Stats"],
            cat3: ["cat3", false, "mic", "Studio"],
            cat4: ["cat4", false, "graphic_eq", "Master"],
            cat5: ["cat5", false, "queue_music", "Concert"],
            cat6: ["cat6", false, "lock", "Privacy"],
            cat7: ["cat7", false, "security", "Security"],
            cat8: ["cat8", false, "people_alt", "Connections"],
            cat9: ["cat9", false, "credit_card", "Payment Method"],
            cat10: ["cat10", false, "shopping_cart", "Transaction History"]
        }


        this.getLocalStorageCategory = () => {
            if (!this.state.currentHL) {

            }
            else {
                this.categories[this.state.currentHL][1] = true;
            }
        }
        this.getLocalStorageCategory()
        this.highlightTheClicked = this.highlightTheClicked.bind(this);
    }


    highlightTheClicked(catID, catName) {
        this.props.handleClick(catName)
        if (catID !== this.state.currentHL) {
            if (!this.state.currentHL) {
                this.categories[catID][1] = true;
                this.setState({ currentHL: catID })
                console.log(`IN NULL: ${catID}`)

            }
            else {
                this.categories[this.state.currentHL][1] = false
                this.categories[catID][1] = true;
                this.setState({ currentHL: catID })
                console.log(`NOT NULL: ${catID}`)
            }
        }
    }

    render() {
        const style = {
            background: "rgba(0, 0, 0, 0.5)"
        }

        return (
            <div className="col-3">
                < div className="nav row mt-5" >
                    <div className="col-10 offset-2" style={style}>
                        <SideCategory Style={this.categories.cat1} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat2} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat3} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat4} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat5} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat6} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat7} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat8} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat9} clicked={this.highlightTheClicked} />
                        <SideCategory Style={this.categories.cat10} clicked={this.highlightTheClicked} />
                    </div>
                </div >
            </div>
        );
    }
}

export default SideCategoryCont;

if (document.getElementById('SideCategoryCont')) {
    ReactDOM.render(<SideCategoryCont />, document.getElementById('SideCategoryCont'));
}