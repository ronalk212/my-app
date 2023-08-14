import React, {Component, useState} from "react";
import Table from "./Table";
export class Article extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        this.state.count=1
    }
    checkBoxChecked(){
        return{
            id:4
        }
    }
    func(){
        
    }
    loadData(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                this.setState({
                    count:50
                })
                resolve({me:12})
            },2000)
        })
    }
    render(){

        const{count} =this.state;

        
        return(
            <div>
                <div className="click1"></div>
                <div className={`clicks-${count}`}>
                    {count} clicks
                </div>
                <button onClick={()=>{this.setState({count:count+1})}}>Increment</button>
                <h1>Article Details</h1>
                <Table/>
            </div>
           
        )
    }
}
export default Article