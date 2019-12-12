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
    
    
            if(score_check != 0){
            alert("Please refresh the page.")
            return;
        }
    
    alert(" You select "+check_sub);

    
    test();
    mix_num();
    pick();

}

