import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { registerUser } from "../../features/auth/authAction";
const SignUp = () => {
    const defaultFormFields={
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    const[formFields,setFormFields]=useState(defaultFormFields)
    const[formError,setFormError]=useState({});
    const dispatch=useDispatch();
    const changeBorderColorOnError=(inputName)=>{
        let formatInput=document.getElementById(`${inputName}`)
        formatInput.classList.add("error");
    }
    const {user,error,success,message}=useSelector(state=>state.auth)

    // const handleValidation=()=>{
    //     let error={};

    //     if(!formFields.name){
    //         error.name="Name is required"
    //         changeBorderColorOnError("name")
    //     }
    //     if(!formFields.email){
    //         error.email="Email is required"
    //         changeBorderColorOnError("email")
    //     }
    //     if(!formFields.password){
    //         error.password="Password is required"
    //         changeBorderColorOnError("password")
    //     }
    //     if(!formFields.confirmPassword){
    //         error.confirmPassword="Confirm Password is required"
    //         changeBorderColorOnError("confirmPassword")
    //     }
    //    return error
    // }
    useEffect(()=>{
      if(error){
        handleError(message)
      }
    },[error,message])
    const handleError=(message)=>{
      // alert(message)
      const messageObject=JSON.parse(message)
      setFormError(messageObject)
      Object.keys(messageObject).forEach((item)=>{
        changeBorderColorOnError(item)
      })
    }
    console.log(formFields)
    const {name,email,password,confirmPassword}=formFields
    const handleInputValueChange=(e)=>{
            const {name,value}=e.target
            setFormFields({...formFields,
                [name]:value})
    }
    const handleSubmit=(e)=>{
           e.preventDefault() ;
           console.log(formFields)
           dispatch(registerUser(formFields))
          //  setFormError(handleValidation())
    }
  return (
    <section className="form-container">
      <h1 className="form-heading">create an account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-item" id="name">
          <label>Name</label>
          <input placeholder="enter your name" name="name" type="text" value={name} onChange={handleInputValueChange}/>
          <span className="error-text">{formError.name}</span>
        </div>
        <div className="form-item" id="email">
          <label>Email</label>
          <input placeholder="enter your email" name="email" type="email" value={email} onChange={handleInputValueChange}/>
          <span className="error-text">{formError.email}</span>
        </div>
        <div className="form-item" id="password">
          <label>Password</label>
          <input placeholder="enter your password" name="password" type="password" value={password} onChange={handleInputValueChange}/>
          <span className="error-text">{formError.password}</span>
        </div>
        <div className="form-item" id="confirmPassword">
          <label>Confirm Password</label>
          <input placeholder="confirm your password" name="confirmPassword" type="password" value={confirmPassword} onChange={handleInputValueChange}/>
          <span className="error-text">{formError.confirmPassword}</span>
        </div>
        <button className="form-button" type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default SignUp;
