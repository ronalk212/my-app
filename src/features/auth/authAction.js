import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const registerUser=createAsyncThunk("auth/signup",async(userData,thunkAPI)=>{
    try{
       const res= await axios.post("/api/v1/users/signup",userData);
       if(res.data){
        return res.data
       }
    }catch(err){
        const message= (err.message&& err.response.data.message)|| err.message
        //reject with values send the error message as apayload
        return thunkAPI.rejectWithValue(message)
    }
})