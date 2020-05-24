import React from "react";

export default class NameAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        name:'',
        address:'',
        city:'',
        state:'',
        zip:''
    }
  }
  componentDidMount(){
    this.setState({
        name:this.props.nameAddressData.name,
        address:this.props.nameAddressData.address,
        city:this.props.nameAddressData.city,
        state:this.props.nameAddressData.state,
        zip:this.props.nameAddressData.zip
    })
  }
  saveData = (e) => {
      e.preventDefault();
    this.props.setNameAddressData(this.state);
  };
  handleFormInputChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Enter your Address:</h2>
        <form onSubmit={this.saveData}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleFormInputChange} placeholder="Enter your Full Name" />
          <br />
          <input type="text" name="address" value={this.state.address}  onChange={this.handleFormInputChange} placeholder="Address 1" />
          <br />
          <input type="text" name="city" value={this.state.city} onChange={this.handleFormInputChange} placeholder="City" />
          <br />
          <input type="text" name="state" value={this.state.state} onChange={this.handleFormInputChange} placeholder="State" />
          <br />
          <input type="text" name="zip" value={this.state.zip} onChange={this.handleFormInputChange} placeholder="ZipCode" />
          <br />
          <button className="btn-success" type="submit">Save</button>
        </form>
      </div>
    );
  }
}
