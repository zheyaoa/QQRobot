export interface Events{
    [index:string]:()=>null
}
export class EventEmitter{
    events:Events = null
    constructor(){
        this.events = {}
    }
    on(command:string,callback:() => null){
        this.events[command] = callback
    }
    exec(message:string){
        const command = message.split("")[0];
        this.events[command]();
    }
}