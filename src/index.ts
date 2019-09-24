import * as Koa from 'koa';

const app:Koa = new Koa();

app.use(async (ctx)=>{
    let url:string = ctx.url;
    console.log(url)
})
app.listen(3000,function(){
    console.log("server run on port 3000")
})
