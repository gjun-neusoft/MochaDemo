// const $ = require('jquery')
const Serve = {
    psm: () => {
        let p = new Promise((reslove, reject)=>{
            setTimeout(()=>{
                reslove('Promise异步')
            },1000)
        })
        return p
    },
    // get: () => {
    //     $.get('http://localhost:3000/test',res=>{
    //         console.log(res)
    //     })
    // }
}
exports.Serve = {psm: Serve.psm}



