const Render = {
    reset: () => {
        console.log('render reset')
        return ('render重置')
    },
    create: () => {
        console.log('render create')
        return {'imageData': {'name': 'img', 'num': 2}}
    }
}
exports.Render = {reset: Render.reset, create: Render.create}