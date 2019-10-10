import * as io from 'ws';
import { DataModel } from './types/type';
import { Proxy } from './util/proxy'

const ws= new io("ws://www.zheyao.top:6700/")
ws.onopen = function(){
    console.log("webscoket Connection to zheyao.top:6700/"); 
}
ws.onmessage = function(v:io.MessageEvent) {
    const data:DataModel = JSON.parse(v.data.toString()) as DataModel;
    Proxy.handleCommand(data,ws) 
};
ws.onclose = function() {
    console.log("Connection closed.");
};     