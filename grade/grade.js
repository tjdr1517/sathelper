document.write('<script src="question.js"></script>');
var check_sub;
var check_detail;
var check_year;


function submit(){
    
    <!-- subject -->
    var check_korean = document.getElementsByName('radio1')[0];
    var check_Math = document.getElementsByName('radio1')[1];
    var check_English = document.getElementsByName('radio1')[2];   
    
    
    <!-- korean -->
    if (check_korean.checked == true){
    check_sub = "Korean";
    }
    else if (check_Math.checked == true){
    check_sub = "Math";
    }
    else if (check_English.checked == true){
    check_sub = "English";
    }
    
    var check_1to2 = document.getElementsByName('radio2')[0];
    var check_3to4 = document.getElementsByName('radio2')[1];
    var check_5to6 = document.getElementsByName('radio2')[2];  
    var check_7to9 = document.getElementsByName('radio2')[3]; 
        
    if (check_1to2.checked == true){
    check_detail = 4;
    a = "1~2 Grade";
    }
    else if (check_3to4.checked == true){
    check_detail = 3;
    a = "3~4 Grade";
    }
    else if (check_5to6.checked == true){
    check_detail = 2;
    a = "5~6 Grade";
    }
    else if (check_7to9.checked == true){
    check_detail = 1;
    a = "7~9 Grade";
    }
    else {
        check_detail = "none";
    }
    

    if(check_detail == "none"){
        alert("Select a Detail PLZ!!!!");
        return;
    }
    
    
    alert(" You select "+check_sub+" and "+a);
    document.getElementsByClassName("inline2")[0].style.display = "none";
    test();
    mix_num();
    pick();

}

