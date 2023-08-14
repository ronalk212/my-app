import Article from "./Aricle"

import { shallow ,mount} from "enzyme"
import Table from "./Table"
describe("Article Page",()=>{
    it("click count",()=>{
        let wrapper=shallow(<Article/>);
        expect(wrapper.find(".clicks-0").length).toEqual(1)
        wrapper.find('button').simulate('click');
        expect(wrapper.find(".clicks-1").length).toEqual(1)
    })
    it("double click count",()=>{
        let wrapper=shallow(<Article/>);
        expect(wrapper.find(".clicks-0").length).toEqual(1)
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.find(".clicks-2").length).toEqual(1)
    })
    it("custom border dive",()=>{
        let wrapper=shallow(<Article/>);
        expect(wrapper.find(Table).dive().find(".custom-border").length).toEqual(1)

    })
    it("snapshot 1",()=>{
        let wrapper=shallow(<Table/>);
        // expect(wrapper).toMatchSnapshot()

    })
  
})
describe('mount vs shallow', () => { 
    it.skip("mount",()=>{
        let wrapper=mount(<Article/>);
      
    

    })
    it("instance testing",async()=>{
        let wrapper=shallow(<Article/>);
        let anyfn=wrapper.instance().checkBoxChecked();
        expect(anyfn).toEqual({"id":4});

    })
    it("load data function testing",async()=>{
        let wrapper=shallow(<Article/>);
        return wrapper.instance().loadData().then(data=>{
            console.log(data)
            expect(data).toEqual({me:12})
        })

    })
    it.skip("jest spyon testing",async()=>{
        jest.spyOn(Article.prototype,'componentDidMount')
        let wrapper=shallow(<Article/>);
        expect(Article.prototype.componentDidMount).toHaveBeenCalled()
        expect(Article.prototype.componentDidMount).toHaveBeenCalledTimes(1)
        Article.prototype.componentDidMount.mockRestore()
    })
    it("jest spyon componentDidMount",async()=>{
        let wrapper=shallow(<Article/>);
        console.log(wrapper.state)
       
    })
    it("props",()=>{
        let wrapper= shallow(<Article/>)
        let inputProp=wrapper.find("input").props();
        let matchProp={
            type:"text",
            id:"firstName",
            value:"codeimprove",
            name:"firstName"
        }
        expect(inputProp).toEqual(matchProp)
    })
})