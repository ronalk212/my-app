import About from "./About";
import{shallow} from "enzyme";

describe("About the page testing",()=>{
    it("class check",()=>{
        let wrapper=shallow(<About/>)
        // expect(wrapper.exists(".hlcl")).toEqual(true)
        expect(wrapper.state()).toEqual({name:"code improve",id:111})
    })
    it("html mes chk",()=>{
        let wrapper=shallow(<About/>)
        // expect(wrapper.exists(".hlcl")).toEqual(true)
        // expect(wrapper.state()).toEqual({name:"code improve",id:111})
        expect(wrapper.contains(<div className="clhl">Helllo</div>)).toEqual(true)
    })
    it("only message",()=>{
        let wrapper=shallow(<About/>)
        // expect(wrapper.exists(".hlcl")).toEqual(true)
        // expect(wrapper.state()).toEqual({name:"code improve",id:111})
        expect(wrapper.containsAllMatchingElements([<div >Helllo</div>])).toEqual(true)
        expect(wrapper.containsAnyMatchingElements([<div >Helllo</div>,<div>Help</div>])).toEqual(true)
    })
})