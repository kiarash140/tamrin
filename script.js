let num=0;
let minus1 =document.getElementById("minus");
let plus1=document.getElementById("plus");
plus1.addEventListener("click",plus);
function a(){
    document.getElementById("counter").textContent=num;
    if (num>0) {

        minus1.addEventListener("click", minus);


    }
    else{
        minus1.removeEventListener("click", minus);

    }
    if (num<4){
        plus1.addEventListener("click",plus);
        document.getElementById("brand").innerHTML="fancy <br>counter";

    }
}
a();
function plus(){
 num++;
 a();
 if (num>4) {
document.getElementById("brand").textContent="lotfan premium bekharid";
plus1.removeEventListener("click", plus);

 }

}
function minus() {
    num--;
    a();

}
function reset(){
    num=0;
    a();
}

