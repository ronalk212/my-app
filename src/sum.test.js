// test('Sum added',()=>{
//     let data=10;
//     expect(data).toBe(10);
// })

import{sum,Object1} from"./sum";

describe('Update Home page',()=>{
it('my second data',()=>{
    
    expect(sum(1,3)).toBe(4)
})
    describe("Update 2nd",()=>{
        expect(sum(2,4)).not.toBe(3)
    })
})
describe("object check",()=>{
    expect(Object1()).toEqual({name:"code"})
})
