var $ = function (id) {
    return document.getElementById(id);
};

if(grade_1 == 'A' && 'a'){
    credit_hours_1 = 4.0;
}

else if(grade_1 == 'B' && 'b'){
    credit_hours_1 = 3.0;
}

else if(grade_1 == 'C' && 'c'){
    credit_hours_1 = 2.0;
}

else if(grade_1 == 'D' && 'd'){
    credit_hours_1 = 1.0;
}

else if(grade_1 == 'F' && 'f'){
    credit_hours_1 = 0;
}

var cal = function(){
    var credit_hours_1 = parseFloat($("credit_hours_1").value);
    var grade_1 = parseFloat($("grade_1").value);
    
    var credit_hours_2 = parseFloat($("credit_hours_2").value);
    var grade_2 = parseFloat($("grade_2").value);
    
    var GPA = ((grade_1 * credit_hours_1)/credit_hours_1)
};

var clear = function(){
    $("credit_hours_1").value = "";
    $("grade_1").value = "";
    
    $("credit_hours_2").value = "";
    $("grade_2").value = "";
}
    

window.onload = function(){
    $("calculate").onclick= cal;
    $("clear").onclick = clear;
}