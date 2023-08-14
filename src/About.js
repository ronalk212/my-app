import React,{Component} from"react";
class About extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"code improve",
            id:111
        }
    }
    render(){
        return(
            <div>
                About
                <div className="clhl">Helllo</div>
            </div>
        )
    }
}
export default About