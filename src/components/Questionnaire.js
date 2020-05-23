import React from 'react'


export default class Questionnaire extends React.Component{
    constructor(props){
        super(props)
        this.state={
            experience:this.props.questionnaireData.experience,
            skill:this.props.questionnaireData.skill,
            location:this.props.questionnaireData.location,
            salary:this.props.questionnaireData.salary,
        }
    }
    state={
        experience:'',
        skill:'',
        location:'',
        salary:'',
    }
    handleFormChange=(e)=>{
        e.preventDefault()
        const {experience,skill,location,salary}=this.state
        this.props.setQuestionnaire({
            experience,
            skill,
            location,
            salary,
        })
    }
    saveExperience=(e)=>{
        this.setState({
            experience:e.target.value
        })
    }
    saveSkill=(e)=>{
        this.setState({
            skill:e.target.value
        })
    }
    saveLocation=(e)=>{
        this.setState({
            location:e.target.value
        })
    }
    saveSalary=(e)=>{
        this.setState({
            salary:e.target.value
        })
    }
    render(){
        return (
            <div>
                <h2>Please answer the below survey questionnaire:</h2>
                <form onSubmit={this.handleFormChange}>
                    <label>What is your work experience?</label>
                    <input type="text" value={this.state.experience} onChange={this.saveExperience} placeholder="Experience"></input><br/>
                    <label>What is your primary Skill?</label>
                    <input type="text" value={this.state.skill} onChange={this.saveSkill} placeholder="Skill"></input><br/>
                    <label>What is your current work Location?</label>
                    <input type="text" value={this.state.location} onChange={this.saveLocation} placeholder="Work Location"></input><br/>
                    <label>What is your expected salary?</label>
                    <input type="text" value={this.state.salary} onChange={this.saveSalary} placeholder="Expected Salary"></input><br/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }



}