function quadric_on(){
    all_off();
    document.getElementsByClassName("study")[0].style.display = "block";
}

function triangle_on(){
    all_off();
    document.getElementsByClassName("study2")[0].style.display = "block";
}

function diagram_on(){
    all_off();
    document.getElementsByClassName("study3")[0].style.display = "block";
}

function circle_on(){
    all_off();
    document.getElementsByClassName("study4")[0].style.display = "block";
}

function all_off(){
    document.getElementsByClassName("study")[0].style.display = "none";
    document.getElementsByClassName("study2")[0].style.display = "none";
    document.getElementsByClassName("study3")[0].style.display = "none";
    document.getElementsByClassName("study4")[0].style.display = "none";
}