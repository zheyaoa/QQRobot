import { DataModel, PostType } from './../types/type';
import * as io from 'ws';
import { Util } from './util';

export const Proxy = {
    handleCommand(data:DataModel,ws:io){
        switch(data.post_type){
            case PostType.message:
                return this.handleMessage(data,ws);
        }
    },
    handleMsg(data:DataModel,ws:io){
        Util.sendMessage(ws,data.user_id,"尹薇是我家小仙女")
    }
}
