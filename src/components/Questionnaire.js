import React from 'react'


export default class Questionnaire extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jobChange:'',
            experience:'',
            skill:'',
            location:'',
            salary:'',
        }
    }
    componentDidMount(){
        this.setState({
            jobChange:this.props.questionnaireData.jobChange,
            experience:this.props.questionnaireData.experience,
            skill:this.props.questionnaireData.skill,
            location:this.props.questionnaireData.location,
            salary:this.props.questionnaireData.salary,
        })
    }
    handleFormChange=(e)=>{
        e.preventDefault()
        const {jobChange,experience,skill,location,salary}=this.state
        this.props.setQuestionnaire({
            jobChange,
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
    saveJobChange=(e)=>{     
        const value=e.target.type=='checkbox'?e.target.checked:e.target.value        
        console.log(value)
        this.setState({
            jobChange:value
        })
    }
    render(){
        return (
            <div>
                <h2>Please answer the below survey questionnaire:</h2>
                <form onSubmit={this.handleFormChange}>
                    <label>Are you open for a job change?
                        <input name="jobChange" type="checkbox" checked={this.state.jobChange} onChange={this.saveJobChange}></input>
                    </label><br/>
                   
                    <input type="text" value={this.state.experience} onChange={this.saveExperience} placeholder="Experience"></input><br/>
                    
                    <input type="text" value={this.state.skill} onChange={this.saveSkill} placeholder="Skill"></input><br/>
                    
                    <input type="text" value={this.state.location} onChange={this.saveLocation} placeholder="Work Location"></input><br/>
                    
                    <input type="text" value={this.state.salary} onChange={this.saveSalary} placeholder="Expected Salary"></input><br/>
                    <button className="btn-success" type="submit">Save</button>
                </form>
            </div>
        )
    }



}