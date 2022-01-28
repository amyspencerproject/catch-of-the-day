import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (e) => {
        // console.log(e.currentTarget.name);
        // console.log(e.currentTarget.value);
        // console.log(updatedFish);

        // 1. take a copy of current fish
        const updatedFish = { 
            ...this.props.fish,
            //computed property names which is new in es6
            //e.currentTarget.name will notice when anything is changed bc name is a property for each field}
            [e.currentTarget.name]: e.currentTarget.value
         };
         this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="description" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
                <input type="text" name="image"  onChange={this.handleChange} value={this.props.fish.image}/>
            </div>
        );
    }
}

export default EditFishForm;