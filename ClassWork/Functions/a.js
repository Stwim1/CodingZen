var a = [1,3,2,5,4, 9,7,2]
var b = [3,1,4,2,5]
var c = [3,2,5,1,2]
var d = [1,5,3,2,9]


function sorting(x)
{
     for(let i=0; i<x.length; i++)
{
    for(let j=0; j<x.length; j++)
    {
        if(x[i]<x[j])
        {
            let t = x[i];
            x[i] = x[j]
            x[j] = t
        }
    }
} 

}
sorting(a);
sorting(b);
sorting(c);
sorting(d);



console.log(a);
console.log(b);
console.log(c);
console.log(d);