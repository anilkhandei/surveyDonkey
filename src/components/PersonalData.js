import React from "react";

export default class PersonalData extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        DOB: '',
        SSN: '',
        DL: '',
        rental: '',
        gender:''
    }
  }
  componentDidMount(){
      this.setState({
        DOB: this.props.personalData.DOB,
        SSN: this.props.personalData.SSN,
        DL: this.props.personalData.DL,
        rental: this.props.personalData.rental,
        gender:this.props.personalData.gender
      })
  }
 
  saveData = (e) => {
    e.preventDefault();
    this.props.setPersonalData(this.state);
  };

  handleFormInput=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Enter your Personal Details</h2>
        <form onSubmit={this.saveData}>
            
            <label>
                Male:
                <input name="gender" 
                value="male" 
                checked={this.state.gender=='male'} 
                onChange={this.handleFormInput} 
                type="radio"></input>
            </label>
            <label>
                Female:
                <input name="gender" value="female" 
                checked={this.state.gender=='female'} 
                onChange={this.handleFormInput} 
                type="radio"
                ></input>
            </label>
            <br/>
          <input 
            type="text" 
            name="DOB"
            value={this.state.DOB} 
            onChange={this.handleFormInput} 
            placeholder="Date of Birth" 
          />
          <br />
          <input 
            type="text" 
            name="DL"
            value={this.state.DL} 
            onChange={this.handleFormInput} 
            placeholder="Driving Lic No" 
          />
          <br />
          
          <input type="text" 
          name="SSN" 
          value={this.state.SSN} 
          onChange={this.handleFormInput} 
          placeholder="Social Security Number" />
          <br />
          <input 
          type="text" 
          name="rental" 
          value={this.state.rental} 
          onChange={this.handleFormInput} 
          placeholder="Rental or Own Car" />
          <br />
          <button className="btn-success" type="submit">Save</button>
        </form>
      </div>
    );
  }
}
