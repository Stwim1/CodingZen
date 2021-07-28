var fs = require('fs')
let i =0;
while(i<10)
{
    fs.unlink(i.toString()+".txt",(err)=>{
        if(err)
        console.log(err)
    })
    i++;
}