import React, { useState } from "react";

const SignIn = () => {
    const defaultFormFields={
        // name:"",
        email:"",
        password:"",
        // confirmPassword:""
    }
    const[formFields,setFormFields]=useState(defaultFormFields)
    const[formErrors,setFormErrors]=useState({});


    const handleValidation=()=>{
        let error={}
        if(!formFields.email){
            error.email="Email is Required"
            changeBorderColorOnError("email")
        }
        if(!formFields.password){
            error.password="Password is Required"
            changeBorderColorOnError("password")
        }
        return error
    }
    const {name,email,password,confirmPassword}=formFields
    const handleInputValueChange=(e)=>{
            const {name,value}=e.target
            setFormFields({...formFields,
                [name]:value})
    }
    const handleSubmit=(e)=>{
           e.preventDefault() ;
        //    console.log(formFields)
        setFormErrors(handleValidation())
    }
    const changeBorderColorOnError=(inputName)=>{
        let formatInput=document.getElementById(`${inputName}`)
        formatInput.classList.add("error");
    }
  return (
    <section className="form-container">
      <h1 className="form-heading">Sign in</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="form-item" id="name">
          <label>Name</label>
          <input placeholder="enter your name" name="name" type="text" value={name} onChange={handleInputValueChange}/>
        </div> */}
        <div className="form-item" id="email">
          <label>Email</label>
          <input placeholder="enter your email" name="email" type="email" value={email} onChange={handleInputValueChange}/>
          <span className="error-text">{formErrors.email}</span>
        </div>
        <div className="form-item" id="password">
          <label>Password</label>
          <input placeholder="enter your password" name="password" type="password" value={password} onChange={handleInputValueChange}/>
          <span className="error-text">{formErrors.password}</span>
        </div>
      
        {/* <div className="form-item" id="confirmPassword">
          <label>Confirm Password</label>
          <input placeholder="confirm your password" name="confirmPassword" type="password" value={confirmPassword} onChange={handleInputValueChange}/>

        </div> */}
        <button className="form-button" type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default SignIn;
