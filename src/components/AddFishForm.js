import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef();

    createFish = e => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            description: this.descriptionRef.current.value,
            image: this.imageRef.current.value,
        };
        this.props.addFish(fish);
        //refesh the form
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef} type="text" placeholder="Status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="description" ref={this.descriptionRef} placeholder="Description"></textarea>
                <input name = "image" ref={this.imageRef} typed="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;

