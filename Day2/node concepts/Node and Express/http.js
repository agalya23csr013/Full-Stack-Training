const http = require('http');


http.get("/getserver",(req,res)=>{
    res.end("get server");
})
const port=4000;
const server=http.createServer().listen(port,()=>{
    console.log(`server is running in port ${port}`);
});

