let s=[];
let ope=[];
let b="";
let op;
let a="";
let val;
let up=0;
let sum=0;
function number(val){
    b=b+val;
    a=a+val;
    document.getElementById("num").innerHTML=b;
}
function oper(op){
    if (op=="Delete"){
        var k="";
        k=b.slice(-1);
        b=b.slice(0,b.length-1);
        a=a.slice(0,a.length-1);
        document.getElementById("num").innerHTML=b
    }
    else{
        b=b+op;
        ope.push(op);
        s.push(Number(a));
        a="";
        if (op=='C'){
            up=0;
            sum=0;
            a="";
            b="";
            s=[];
            ope=[];
            val="";
            op="";
            document.getElementById("num").innerHTML=b
        }
        document.getElementById("num").innerHTML=b;
        if(op=="="){
            sum+=(Number(s[up]));
            up+=1;
            for(let i=0;i<ope.length;i+=1){
                if (ope[i]=='+'){
                    sum+=(Number(s[up]));
                    up+=1;
                    console.log(sum);
                }
                else if (ope[i]=='-'){
                    sum=sum-Number(s[up]);
                    up+=1;
                }
                else if (ope[i]=='*'){
                    sum=sum*Number(s[up]);
                    up+=1;
                }
                else if (ope[i]=='/'){
                    sum=sum/Number(s[up]);
                    up+=1;
                }
                else if (ope[i]=='%'){
                    sum=sum%Number(s[up]);
                    up+=1;
                }
                    
            }
            b+=sum;
            document.getElementById("num").innerHTML=b;
        }
    }
}