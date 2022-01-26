import React from "react"; 

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };


    componentDidMount() {
        const {params} = this.props.match;
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
            //sycState needs an object and this directs it to state: fishes and not state: order
            //order will be handled in local storage
        });
    };

    componentWillUnmount() {
        console.log("Unmounting");
    }

    addFish = (fish) => {
        //1. take a copy of existing state
        const fishes = { ... this.state.fishes }
        //2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`]=fish 
        //3. set the new fishes object to state
        this.setState({
            fishes: fishes
        })
    };

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes}) //this sampleFishes is what we called the import of sample-fishes.js
    };

    addToOrder = (key) => {
        //1. copy the state object
        const order = { ...this.state.order};
        //2. either add order to state or update the quantity in the order
        order[key] = order[key] + 1 || 1;
        //3. call setState to update the state object
        this.setState({order: order});
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = "Fresh Seafood Market" />
                    <ul className="fishes"> 
                        {Object.keys(this.state.fishes).map(key => 
                        <Fish key={key} details={this.state.fishes[key]} index={key} addToOrder={this.addToOrder} />)} 
                    </ul>
                </div>
                <Order />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                />
            </div>
        );
    }

}

export default App;

 