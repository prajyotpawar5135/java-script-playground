const http=require("http")
const url=require("url")
const fs=require("fs")
var s=require("./calculations")

const server=http.createServer(function(req,resp){

    var p=url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"text/html"})


    switch(p.pathname)
    {
        case "/form":
            var a=fs.createReadStream("./cal.html")
            a.pipe(resp);
            break;


        case "/calculation"  :
            if(p.query.but==="addition")
            {
               var num1=parseInt(p.query.num1)
               var num2=parseInt(p.query.num2)
               var ans=s.addition(num1,num2)
                resp.write(" "+ans);
                
            }
            resp.end();
           // else if(p.query.url)
            break;  

    }


})

server.listen(5135,function()
{
    console.log("server is running on port 5135");
})