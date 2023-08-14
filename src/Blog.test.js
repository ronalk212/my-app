import Blog from "./Blog";
import { shallow } from "enzyme";
describe("Blog page test",()=>{
    it('find check',()=>{
        let wrapper=shallow(<Blog/>);
        expect(wrapper.find(".jj").length).toBe(3)
    })
    it('at key check',()=>{
        let wrapper=shallow(<Blog/>);
        expect(wrapper.find(".jj").at(0).key()).toBe("angular")
    })
    it('child key check',()=>{
        let wrapper=shallow(<Blog/>);
        expect(wrapper.find(".numbers").childAt(0).type()).toBe("span")
    })
    it('children length key check',()=>{
        let wrapper=shallow(<Blog/>);
        expect(wrapper.find("ul").children().length).toBe(3)
    })
    it('has class key check',()=>{
        let wrapper=shallow(<Blog/>);
        expect(wrapper.find(".my-button").hasClass('disabled')).toBe(true)
    })
    it('exist class key check',()=>{
        let wrapper=shallow(<Blog/>);
        expect(wrapper.is(".main")).toBe(true)
    })
})