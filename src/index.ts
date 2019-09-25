import * as Koa from 'koa';

const app:Koa = new Koa();

app.use(async (ctx)=>{
    ctx.body = "hello koa2";    
    let data:string = '';
    ctx.req.addListener('data',(chunk) => {
        data+=chunk;
    })
    ctx.req.addListener('end',() => {
        console.log(data)
	})
	console.log("aabbcc")
})
app.listen(3000,function(){
    console.log("server run on port 3000")
})
