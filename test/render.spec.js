require('should')
const {Render} = require('../src/render')
let {reset, create} = {...Render}
describe('render测试', ()=>{
    it('render创建',()=>{
        create().should.have.property('imageData')
    })
    it('render重置',()=>{
        reset().should.be.eql('render重置') 
    })
})
