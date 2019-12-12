var ddaytimer = setInterval (dayGap, 1000)
function dayGap () {
    var dday = new Date("November 19, 2020 08:10:00").getTime();//µðµ¥ÀÌ
    var nowday = new Date();
    nowday = nowday.getTime();
    var distance = dday - nowday;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));

    var h = Math.floor((distance / (1000*60*60)) % 24);
    var m = Math.floor((distance / (1000*60)) % 60);
    var s = Math.floor((distance / 1000) % 60);

    if (distance <= 0) {
        document.getElementById("dday-timer").innerHTML = "D-day";
    } else {
        document.getElementById("time-day").innerHTML = d;
        document.getElementById("time-hour").innerHTML = h;
        document.getElementById("time-minute").innerHTML = m;
        document.getElementById("time-second").innerHTML = s;
    }
}