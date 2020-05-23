import React from "react";

import PersonalData from "./PersonalData";
import NameAddress from "./NameAddress";
import Questionnaire from "./Questionnaire";
import Review from "./Review";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      personal: {},
      nameAddress: {},
      questionnaire: {},
    };
  }
  getQuestionnaire=()=>this.state.questionnaire;
  setQuestionnaire=(data)=>{
      console.log(data)
    this.setState({
        questionnaire:data
    })
  }
  getPersonalData = () => this.state.personal;
  setPersonalData = (personalData) => {
    this.setState({
      personal: personalData,
    });
  };
  getNameAddressData = () => this.state.nameAddress;
  setNameAddressData = (nameAddress) => {
    console.log(nameAddress);
    this.setState({
      nameAddress: nameAddress,
    });
  };
  goHome = () => {
    this.setState({
      step: 0,
    });
  };
  goToPrevStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  };
  goToNextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };
  render() {
    let view;
    switch (this.state.step) {
      case 0:
        view = (
          <PersonalData
            personalData={this.state.personal}
            setPersonalData={this.setPersonalData}
          />
        );
        break;
      case 1:
        view = (
          <NameAddress
            nameAddressData={this.state.nameAddress}
            setNameAddressData={this.setNameAddressData}
          />
        );
        break;
      case 2:
        view = <Questionnaire
                    setQuestionnaire={this.setQuestionnaire}
                    questionnaireData={this.state.questionnaire}  
                />;
        break;
      default:
        view =  <Review
        personalData={this.getPersonalData}
        nameAddressData={this.getNameAddressData}
        questionnaireData={this.getQuestionnaire}
        />
    }

    if(this.state.step>0){
        return (
            <div>
                <h1>Welcome to Survey Donkey</h1>
                <button onClick={this.goHome}>Home</button>
                {view}
                <button onClick={this.goToPrevStep}>Prev</button>
                <button onClick={this.goToNextStep}>Next</button>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Welcome to Survey Donkey</h1>
                <button onClick={this.goHome}>Home</button>
                {view}
                <button onClick={this.goToNextStep}>Next</button>
               
            </div>
        )
    }
  }
}
