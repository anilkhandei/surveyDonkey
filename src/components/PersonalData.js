import React from "react";

export default class PersonalData extends React.Component {
  constructor() {
    super();
    this.DOB = React.createRef()
    this.DL = React.createRef()
    this.SSN = React.createRef()
    this.rental = React.createRef()
  }
  saveData = (e) => {
    e.preventDefault();
    let personalData= {
        DOB: this.DOB.current.value,
        SSN: this.SSN.current.value,
        DL: this.DL.current.value,
        rental: this.rental.current.value,
      }
    this.props.setPersonalData(personalData);
  };

  render() {
    return (
      <div>
        <h2>Enter your Personal Details</h2>
        <form onSubmit={this.saveData}>
          <input type="text" value={this.props.personalData.DOB} ref={this.DOB} placeholder="Date of Birth" />
          <br />
          <input type="text" value={this.props.personalData.DL} ref={this.DL} placeholder="Driving Lic No" />
          <br />
          <input type="text" value={this.props.personalData.SSN} ref={this.SSN} placeholder="Social Security Number" />
          <br />
          <input type="text" value={this.props.personalData.rental} ref={this.rental} placeholder="Rental or Own Car" />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
