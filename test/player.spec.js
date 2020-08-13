require('should')
const {Player} = require('../src/player')
let {refresh, destroy, layout} = {...Player}
// import {add} from '../src/add'
describe('Player测试',()=>{
    it('player刷新',()=>{
        refresh().should.be.eql('player刷新') 
    })
    it('player销毁',()=>{ 
        destroy().should.be.eql('player销毁')
    })
    it('player布局 ',()=>{ 
        layout().should.be.eql('player布局')
    })
})