var Koa=require('koa');
var app=new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

app.listen(80,function(err){
    console.log('koa2 is running!')
});