
import $ from '../lib/jquery'
import {post, get} from './serve'
import {Player} from './player'
import {Render} from './render'

let {layout, refresh, destroy} = {...Player}
let {create, reset} = {...Render}
// let {post, get} = {...Serve}
//Player
layout()
refresh()
destroy()

//Render
create()
reset() 

//Server
post()
get()