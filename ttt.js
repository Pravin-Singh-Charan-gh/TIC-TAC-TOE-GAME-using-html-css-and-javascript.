x=1;
b1=b2=b3=b4=b5=b6=b7=b8=b9='';
count=0;
function f1(){
   ele=document.getElementById("1");
   if(x==1){
    ele.innerHTML=`X`;
    x=0;
    b1='X';
   }else{
    ele.innerHTML=`O`;
    x=1;
    b1='O';
   }
   count++;
   checkwin();
}
function f2(){
    ele=document.getElementById("2");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b2='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b2='O';
    }
    count++;
    checkwin();
 }
 function f3(){
    ele=document.getElementById("3");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b3='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b3='O';
    }
    count++;
    checkwin();
 }
 function f4(){
    ele=document.getElementById("4");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b4='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b4='O';
    }
    count++;
    checkwin();
 }
 function f5(){
    ele=document.getElementById("5");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b5='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b5='O';
    }
    count++;
    checkwin();
 }
 function f6(){
    ele=document.getElementById("6");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b6='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b6='O';
    }
    count++;
    checkwin();
 }
 function f7(){
    ele=document.getElementById("7");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b7='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b7='O';
    }
    count++;
    checkwin();
 }
 function f8(){
    ele=document.getElementById("8");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b8='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b8='O';
    }
    count++;
    checkwin();
    
 }
 function f9(){
    ele=document.getElementById("9");
    if(x==1){
     ele.innerHTML=`X`;
     x=0;
     b9='X';
    }else{
     ele.innerHTML=`O`;
     x=1;
     b9='O';
    }
    count++;
    checkwin();
}
function checkwin(){
    bt1=document.getElementById("1");
    bt2=document.getElementById("2");
    bt3=document.getElementById("3");
    bt4=document.getElementById("4");
    bt5=document.getElementById("5");
    bt6=document.getElementById("6");
    bt7=document.getElementById("7");
    bt8=document.getElementById("8");
    bt9=document.getElementById("9");
    if(b1==b2 && b2==b3 && b1!=''){
        addcolor(bt1,bt2,bt3);
        return;
    }
    if(b4==b5 && b5==b6 && b5!=''){
        addcolor(bt4,bt5,bt6);
        return;
    }

    if(b7==b8 && b8==b9 && b9!=''){
        addcolor(bt7,bt8,bt9);
        return;
    }
    if(b1==b4 && b4==b7 && b4!=''){
        addcolor(bt1,bt4,bt7);
        return;
    }

    if(b2==b5 && b5==b8 && b8!=''){
        addcolor(bt2,bt5,bt8);
        return;
    }
    if(b3==b6 && b6==b9 && b9!=''){
        addcolor(bt3,bt6,bt9);
        return;
    }
    if(b1==b5 && b5==b9 && b1!=''){
        addcolor(bt1,bt5,bt9);
        return;
    }
    if(b3==b5 && b5==b7 && b5!=''){
        addcolor(bt3,bt5,bt7);
        return;
        freeze(bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9);
    }
    if(count==9){
        addcolorred(bt1,bt2,bt3);
        addcolorred(bt4,bt5,bt6);
        addcolorred(bt7,bt8,bt9);
    }
}
function addcolor(bt1,bt2,bt3){
    bt1.style.backgroundColor='#03fc03';
    bt2.style.backgroundColor='#03fc03';
    bt3.style.backgroundColor='#03fc03';
}
function addcolorred(bt1,bt2,bt3){
    bt1.style.backgroundColor='#ff0000';
    bt2.style.backgroundColor='#ff0000';
    bt3.style.backgroundColor='#ff0000';
}

function myfunc_2() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}
function freeze(bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9){
    b1.disabled = true;
    b2.disabled = true;
    b.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
}