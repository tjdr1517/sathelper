document.write('<script src="question.js"></script>');
var check_sub;
var check_detail;
var check_year;

function radio_korean_on(){
    radio_Math_off();
    radio_English_off();
    document.getElementsByClassName("Grammar-label four col")[0].style.display = "block";
    document.getElementsByClassName("Litterature-label four col")[0].style.display = "block";
    document.getElementsByClassName("Inscription-label four col")[0].style.display = "block";
}

function radio_Math_on(){
    radio_korean_off();
    radio_English_off();
    document.getElementsByClassName("Geometry-label four col")[0].style.display = "block";
    document.getElementsByClassName("Vector-label four col")[0].style.display = "block";
    document.getElementsByClassName("Probability-label four col")[0].style.display = "block";
}

function radio_English_on(){
    radio_Math_off();
    radio_korean_off();
    document.getElementsByClassName("GrammarE-label four col")[0].style.display = "block";
    document.getElementsByClassName("Blank-label four col")[0].style.display = "block";
    document.getElementsByClassName("Topic_inference-label four col")[0].style.display = "block";
}

function radio_korean_off(){
    document.getElementsByClassName("Grammar-label four col")[0].style.display = "none";
    document.getElementsByClassName("Litterature-label four col")[0].style.display = "none";
    document.getElementsByClassName("Inscription-label four col")[0].style.display = "none";
}

function radio_Math_off(){
    document.getElementsByClassName("Geometry-label four col")[0].style.display = "none";
    document.getElementsByClassName("Vector-label four col")[0].style.display = "none";
    document.getElementsByClassName("Probability-label four col")[0].style.display = "none";
}

function radio_English_off(){
    document.getElementsByClassName("GrammarE-label four col")[0].style.display = "none";
    document.getElementsByClassName("Blank-label four col")[0].style.display = "none";
    document.getElementsByClassName("Topic_inference-label four col")[0].style.display = "none";
}


function submit(){
    
    <!-- subject -->
    var check_korean = document.getElementsByName('radio1')[0];
    var check_Math = document.getElementsByName('radio1')[1];
    var check_English = document.getElementsByName('radio1')[2];   
    
    
    <!-- korean -->
    if (check_korean.checked == true){
    check_sub = "Korean";
    var check_ALL = document.getElementsByName('radio2')[0];
    var check_Grammar = document.getElementsByName('radio2')[1];
    var check_Litterature = document.getElementsByName('radio2')[2];  
    var check_Inscription = document.getElementsByName('radio2')[3]; 
        
    if (check_ALL.checked == true){
    check_detail = "ALL";
    }
    else if (check_Grammar.checked == true){
    check_detail = "Grammar";
    }
    else if (check_Litterature.checked == true){
    check_detail = "Litterature";
    }
    else if (check_Inscription.checked == true){
    check_detail = "Inscription";
    }
    else {
        check_detail = "none";
    }
    }
    
        
    <!-- Math -->
    else if (check_Math.checked == true){
    check_sub = "Math";
    var check_ALL = document.getElementsByName('radio2')[0];
    var check_Geometry = document.getElementsByName('radio2')[4];
    var check_Vector = document.getElementsByName('radio2')[5];  
    var check_probability = document.getElementsByName('radio2')[6];     
    
    if (check_ALL.checked == true){
    check_detail = "ALL";
    }
    else if (check_Geometry.checked == true){
    check_detail = "Geometry";
    }
    else if (check_Vector.checked == true){
    check_detail = "Vector";
    }
    else if (check_probability.checked == true){
    check_detail = "Probability";
    }
    else {
        check_detail = "none";
    }
    }
    
    
    
    <!-- English -->
    else if (check_English.checked == true){
    check_sub = "English";
    var check_ALL = document.getElementsByName('radio2')[0];
    var check_Grammar = document.getElementsByName('radio2')[7];
    var check_Blank = document.getElementsByName('radio2')[8];  
    var check_Topic = document.getElementsByName('radio2')[9];     
    
    if (check_ALL.checked == true){
    check_detail = "ALL";
    }
    else if (check_Grammar.checked == true){
    check_detail = "Grammar";
    }
    else if (check_Blank.checked == true){
    check_detail = "Blank";
    }
    else if (check_Topic.checked == true){
    check_detail = "Topic";
    }
    else {
        check_detail = "none";
    }
    }

    if(check_detail == "none"){
        alert("Select a Detail PLZ!!!!");
        return;
    }
    

    
    <!-- year -->
    var check_last1 = document.getElementsByName('radio3')[0];
    var check_last3 = document.getElementsByName('radio3')[1];
    var check_last5 = document.getElementsByName('radio3')[2];  
    
    if (check_last1.checked == true){
    check_year = 1;
    }
    else if (check_last3.checked == true){
    check_year = 3;
    }
    else if (check_last5.checked == true){
    check_year = 5;
    }
    
    
    alert(" You select "+check_sub+" and "+check_detail+" and "+check_year);
    document.getElementsByClassName("inline2")[0].style.display = "none";
    test();
    mix_num();
    pick();

}

