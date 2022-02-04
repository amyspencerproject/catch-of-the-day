import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {

    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        addFish: PropTypes.func,
        loadSampelFishes: PropTypes.func,
    };

    state = {
        uid: null,
        owner: null
    }

    //when browser is refreshed this will check to see if we are logged in
    componentDidMount() {
        firebase
        .auth()
        .onAuthStateChanged( user => {
            if(user) {
                this.authHandler({ user });
            }
        })
    } 

    authHandler = async (authData) => {
        // console.log(authData);
        // 1. first we need to look up store in firebase database
        const store = await base.fetch(this.props.storeId, { constext: this });
        // console.log(store);
        // 2. claim it if we are the first owner
        if (!store.owner)
        //save it as our own. 
        //the /owner creates owner field and user.uid saves a unique identifier (could also use email for id)
        await base.post(`${this.props.storeId}/owner`, {
            data: authData.user.uid
        })
        // 3. set the state of the inventory comoponenet to reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
    };

    authenticate = (provider) => {
        // alert(provider)
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler);
    };

    logout = async () => {
        console.log('logging out');
        await firebase
        .auth()
        .signOut();
        this.setState({uid: null});
    }

    render() {
        const logout = <button onClick={this.logout}>Logout</button>

        // 1. Check if they are logged in
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}/>;
        }

        // 2. check if they are NOT the owner of the store
        if (this.state.uid !== this.state.owner) {
            return(
                <div>
                    <p>Sorry you are not the owner</p>
                    {logout}
                </div>
            );
        }

        // 3. the must be the owner so show the inventory
       
        return (
            <div className="inventory">
                <h2>Inventory!!!</h2>
                {logout}
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishForm 
                        key={key}
                        index={key} 
                        fish={this.props.fishes[key]}
                        updateFish={this.props.updateFish}
                        deleteFish={this.props.deleteFish}
                    />
                ))}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div> 
        )
    }
}

export default Inventory;