function showTime(params) {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s  = date.getSeconds();
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
       
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    var time = h + ":" + m + "" ;
    document.getElementById("sol").innerText = time;
    document.getElementById("sol").textContent = time;

    setTimeout(showTime, 1000)
}
showTime();
