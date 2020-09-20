function random (){
    document.getElementById("number").innerHTML=Math.floor(Math.random()*11)+10;
}
/*Enterbtn.addEventListener('number'() =>{
    if(number.value.length >0){
        Enterbtn.removeAttribute('abled');
    }else{
        loginbtn.setAttribute('abled', 'abled')
    }
})*/

/*function random (){
    document.write(Math.floor(Math.random() *20))
}*/
/*function random (){
    var random = Math.floor(Math.random() *10) +10;
    console.log(random);
}*/
function checklottery(event) {
    var num = document.getElementById("text").value;
    if(num==10||num==15||num==20){
        document.getElementById("result").style.display = "block";
        document.getElementById("winner").style.display = "block";
    }
    else if(num>10&&num<15||num>15&&num<20) {
        document.getElementById("result").style.display = "block";
        document.getElementById("loose").style.display = "block";
    }
}