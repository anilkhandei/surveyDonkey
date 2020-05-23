import React from "react";

export default class NameAddress extends React.Component {
  constructor() {
    super();
    this.nameRef = React.createRef()
    this.addressRef = React.createRef()
    this.cityRef = React.createRef()
    this.stateRef = React.createRef()
    this.zipRef = React.createRef()
  }
  saveData = (e) => {
    e.preventDefault();
    let nameAddress= {
        name: this.nameRef.current.value,
        address: this.addressRef.current.value,
        city: this.cityRef.current.value,
        state: this.stateRef.current.value,
        zip: this.zipRef.current.value,
      }
    this.props.setNameAddressData(nameAddress);
  };

  render() {
    return (
      <div>
        <h2>Enter your Address:</h2>
        <form onSubmit={this.saveData}>
          <input type="text" value={this.props.nameAddressData.name} ref={this.nameRef} placeholder="Enter your Full Name" />
          <br />
          <input type="text" value={this.props.nameAddressData.address} ref={this.addressRef} placeholder="Address 1" />
          <br />
          <input type="text" value={this.props.nameAddressData.city} ref={this.cityRef} placeholder="City" />
          <br />
          <input type="text" value={this.props.nameAddressData.state} ref={this.stateRef} placeholder="State" />
          <br />
          <input type="text" value={this.props.nameAddressData.zip} ref={this.zipRef} placeholder="ZipCode" />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
