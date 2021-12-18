import React from 'react'

import FormInput from '../form-input/form-input.component'


import CustomButton  from '../custom-button/custom-button.component'

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            Name:'',
            phonenumber:'',
            email:'',
            pincode:'',
            isGoogleSignIn:true,
            isclick:false
        }
    }
    //
     handleChange = event =>{
        const { name ,value } = event.target;
        this.setState({[name]:value})
    }
    handleSubmit =(e) =>{
        e.preventDefault();
    }
    render(){
        return(
            <div>
            <form onSubmit = {this.handleSubmit}>
            <FormInput name ='email' type = 'email' value = {this.state.email} handleChange={this.handleChange} label = 'email'required/>
            <FormInput  name ='password' type ='password'  value = {this.state.password} handleChange={this.handleChange} label ='Password'required/>
            <FormInput name = 'phonenumber' type="input" value = {this.state.phonenumber} handleChange = {this.handelChange} label = "Phone-Number" required/>
            <FormInput name = 'pincode' type = 'input' value ={this.state.value} label = 'pincode' handelChange ={this.handelChange} required/>
            <CustomButton children = "SIGN IN" isGoogleSignIn= {this.state.isGoogleSignIn}/>
            </form>
            </div>    
        )
    }
}
export default Login;