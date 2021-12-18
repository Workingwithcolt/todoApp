import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './Contact.style.scss'

import FormInput from '../form-input/form-input.component'

class  Contact extends  React.Component{
    constructor(){
        super();
    this.state = {
        email:'',
        fullname:'',
        phonenumber:'',
        city:'',
        Write_Detail_here:''
    }
}
handleSubmit = (a) =>{
    a.Defaultprevent();
}
 handleChange = (e) =>{
     const {name,value} = e.target;
     this.setState({[name]:value})
     console.log(this.state.email);
}
    render(){
    return(
        <div>
        <div class='background'>
            <div className ="image">
            <div className="background-image">
            <span className ='text-big'>
            Any Questions ?
            </span>
            <br/>
            <br/>
            <span className = 'text-small'>
            We Are happy to help..
            </span>
            </div>
            </div>
            </div>
            
            <div className = 'second-part'>
            <form onSubmit = {this.handleSubmit}>
            <FormInput name ='fullname' type = 'name' value = {this.state.fullname} handleChange={this.handleChange} label = 'Full Name'required/>                    
            <FormInput name ='email' type = 'email' value = {this.state.email} handleChange={this.handleChange} label = 'email'required/>
            <FormInput name ='phonenumber' type = 'text' value = {this.state.phonenumber} handleChange={this.handleChange} label = 'Phone-number'required/>
            <FormInput name ='city' type = 'text' value = {this.state.city} handleChange={this.handleChange} label = 'City'required/>
            <FormInput name ='Write_Detail_here' type = 'text' value = {this.state.Write_Detail_here} handleChange={this.handleChange} label = 'Write_Detail_here' required/>
            
            <FormInput type ='submit'></FormInput>
            </form>
            </div>
            </div>
        
        )
        }
    }
export default Contact
