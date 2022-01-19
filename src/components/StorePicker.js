import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => { 
        //1. stop form from submitting/stop browser from reloading
        event.preventDefault();
        //2. get text from the input
        const storeName = this.myInput.current.value;
        //3. change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}> 
                <h2>Please enter a store</h2>
                <input 
                    type="text" 
                    ref = {this.myInput}
                    required placeholder= "Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store → </button>
            </form>
        );
    } 
}

export default StorePicker;
