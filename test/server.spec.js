require('should')
const {Serve} = require('../src/serve')
const {psm, get} = {...Serve}
const request = require('supertest')
describe('Promise异步', ()=>{
    it('Promise异步', async()=>{
        const ret = await psm()
        ret.should.be.eql('Promise异步')
    }) 
    
})
describe('GET请求测试', ()=>{
    it('GET请求', (done)=>{
        request('localhost:3000')
            .get('/test')
            .end((err, res) => {
                res.body.should.be.eql('{"name":"g.jun"}')
                done()
            })
    })
})