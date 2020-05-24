import React from "react";

import PersonalData from "./PersonalData";
import NameAddress from "./NameAddress";
import Questionnaire from "./Questionnaire";
import Review from "./Review";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      personal: {
        DOB: '',
        SSN: '',
        DL: '',
        rental: '',
        gender:''
      },
      nameAddress: {
        name:'',
        address:'',
        city:'',
        state:'',
        zip:''
      },
      questionnaire: {
        jobChange:'',
            experience:'',
            skill:'',
            location:'',
            salary:'',
      },
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
  
  resetSurvey = () => {
    this.setState({
        step: 0,
        personal: {
          DOB: '',
          SSN: '',
          DL: '',
          rental: '',
          gender:''
        },
        nameAddress: {
          name:'',
          address:'',
          city:'',
          state:'',
          zip:''
        },
        questionnaire: {
          jobChange:'',
              experience:'',
              skill:'',
              location:'',
              salary:'',
        },
    });
  };
  render() {
    let view;
    switch (this.props.step) {
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

    return (
      <div>
        <button className="btn-warning" onClick={this.resetSurvey}>Reset Survey</button>
      {view}
      </div>
      )
  }
}
