import * as io from 'ws'
export namespace Util {
    export const sendMessage = (ws:io,user_id:number,message:string) => {
        const data = {
            action: "send_private_msg",
            params: {
                user_id,
                message
            }
        }
        ws.send(JSON.stringify(data))
    }
}
