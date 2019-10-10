export enum PostType{
    message = "message",
    notice = "notice", 
    request = "request"
}
export enum MessageType{
    private = "private",
    group = "group"
}
export enum SubType{
    friend,
    group,
    discuss,
    other
}
interface SenderModel{
    user_id:number,
    nickname:string,
    sex:string,
    age:number
}
export interface DataModel{
    post_type:PostType,
    message_type:MessageType,
    sub_type:SubType,
    message_id:number,
    user_id:number,  
    message:string,
    row_message:string,
    font:number,
    sender:SenderModel,
    group_id:number,
    time:number,
    self_id:number
}