import React from "react";
import PropTypes from "prop-types";

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

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount() {
        const {params} = this.props.match;
        //first reinstate localStorage
        const localStorageRef = localStorage.getItem(params.storeId);

        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        // console.log(localStorageRef);
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
            //sycState needs an object and this directs it to state: fishes and not state: order
            //order will be handled in local storage
        });
    };

    componentDidUpdate() {
        // console.log(this.state.order);
        //storeId is the key and order is the value for setItem()
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    };

    componentWillUnmount() {
        // console.log("Unmouinting");
        base.removeBinding(this.ref);
    };

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

    updateFish = (key, updatedFish) => {
        //1. take a copy of state
        const fishes = { ...this.state.fishes };
        //2. update that state
        fishes[key] = updatedFish;
        //3. set that to state
        this.setState({fishes});
    }

    deleteFish = (key) => {
        // take a copy of state
        const fishes = { ...this.state.fishes };
        // update state by setting fish to null (firebase needs a null to delete)
        fishes[key] = null;
        //set state 
        this.setState({fishes});
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes}) //this sampleFishes is what we called the import of sample-fishes.js
    };

    addToOrder = (key) => {
        //1. copy the state object
        const order = { ...this.state.order};
        //2. either add order to state or update the quantity in the order
        order[key] = order[key] + 1 || 1;
        //3. call setState to update the state object
        this.setState({order});
    };

    removeFromOrder = (key) => {
        //1. copy the state object
        const order = { ...this.state.order};
        //2. delete from order without null since order is not mirrored in firebase
        delete order[key];
        //3. call setState to update the state object
        this.setState({order});
    };


    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline = "Fresh Seafood Market" />
                    <ul className="fishes"> 
                        {Object.keys(this.state.fishes).map(key => 
                            <Fish 
                                key={key} 
                                details={this.state.fishes[key]}
                                index={key} 
                                addToOrder={this.addToOrder} 
                            />
                        )} 
                    </ul>
                </div>
                <Order fishes={this.state.fishes}
                order={this.state.order}
                removeFromOrder={this.removeFromOrder}/>
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes}
                    storeId={this.props.match.params.storeId}
                />
            </div>
        );
    }

}

export default App;

 