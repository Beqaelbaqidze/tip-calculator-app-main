function but1(butt) {
    const dollar = document.getElementById("dollar").value;
    const person = document.getElementById("person").value;       
    var btn1 = dollar * (butt/100);
    var amnt = btn1/person;     
    document.getElementById("amount").innerHTML = '$' + amnt.toFixed(2); 
    document.getElementById("total").innerHTML ='$' + btn1.toFixed(2);
}

document.getElementById("btn1").addEventListener('click', function(){but1(5)});
document.getElementById("btn2").addEventListener('click', function(){but1(10)});
document.getElementById("btn3").addEventListener('click', function(){but1(15)});
document.getElementById("btn4").addEventListener('click', function(){but1(25)});
document.getElementById("btn5").addEventListener('click', function(){but1(50)});


document.getElementById("btn6").addEventListener('input', function(){
    if(document.getElementById("btn6").value != 0){
        but1(document.getElementById("btn6").value)
    }
});

function res(){
    document.getElementById("amount").innerHTML = '$0';
    document.getElementById("total").innerHTML = '$0';
    document.getElementById("dollar").value = null;
    document.getElementById("person").value = null;
}

document.getElementById("person").addEventListener('input', function(){
    if (document.getElementById("person").value == 0){
        document.getElementById("forjs").style.display = "block";
        }else{
        document.getElementById("forjs").style.display = "none";
        }
})






