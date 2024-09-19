let avar= document.querySelector("#container").children;
let avar2= document.querySelector("#container2").children;
console.dir(avar);
console.dir(avar2);
let x;
let y;
let z;
let avar3 = () => {
x=Math.floor(Math.random()*255);
y=Math.floor(Math.random()*255);
z=Math.floor(Math.random()*255);

return "rgb" + "(" + x + "," + y + "," + z + ")" ;
}
console.log(avar3(x,y,z));
let btn=document.querySelector("button");


btn.onclick = () =>{
for(j=0;j<5;j++){
   avar[j].replaceChildren();
   avar2[j].replaceChildren();  //Children is used since avar2[j] is an elementnode and not other nodes. If it is some other node then we can use replaceChild().
                                //Elements have children while node have child.Element node are the spefic HTML tag used in HTML.
}

for(i=0;i<avar.length;i++){
    document.querySelector("#container").children[i].style.backgroundColor= avar3(x,y,z);
    avar[i].append("rgb" + "(" + x + "," + y + "," + z + ")");
    document.querySelector("#container").children[i].style.textAlign="center";
}
for(i=0;i<avar2.length;i++){
    document.querySelector("#container2").children[i].style.backgroundColor= avar3(x,y,z);
    avar2[i].append("rgb" + "(" + x + "," + y + "," + z + ")");
    document.querySelector("#container2").children[i].style.textAlign="center";
}
}


