var mousevent = "empty";
var lastpositionofX, lastpositionofY;

canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var color = "red";
widthofline = 2;

var width = screen.width;
newwidth = screen.width - 60;
newheight = screen.height - 300;
if (width < 992) {
    document.getElementById("mycanvas").width = newwidth;
    document.getElementById("mycanvas").height = newheight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    console.log("mytouchstart");
    color = document.getElementById("color").value;
    widthofline = document.getElementById("width").value;
    lastpositionofX - e.touches[0].clientX - canvas.offsetLeft;
    lastpositionofY - e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e) {
    console.log("mytouchmove");
    currentpositionofX = e.touches[0].clientX - canvas.offsetLeft;
    currentpositionofY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth = widthofline;
    ctx.strokeStyle = color;
    console.log("Last position of X = " + lastpositionofX + " Last position of Y = " + lastpositionofY);
    ctx.moveTo(lastpositionofX, lastpositionofY);
    console.log("Current position of X = " + currentpositionofX + " Current position of Y = " + currentpositionofY);
    ctx.lineTo(currentpositionofX, currentpositionofY);
    ctx.stroke();
    lastpositionofX = currentpositionofX;
    lastpositionofY = currentpositionofY;
}

canvas.addEventListener("mousedown", mdown);

function mdown(e) {

    color = document.getElementById("color").value;
    widthofline = document.getElementById("width").value;

    mousevent = "mousedown";

}

canvas.addEventListener("mousemove", mmove);

function mmove(e) {
    currentpositionofX = e.clientX - canvas.offsetLeft;
    currentpositionofY = e.clientY - canvas.offsetTop;

    if (mousevent == "mousedown") {
        ctx.beginPath();
        ctx.lineWidth = widthofline;
        ctx.strokeStyle = color;
        console.log("Last position of X = " + lastpositionofX + " Last position of Y = " + lastpositionofY);
        ctx.moveTo(lastpositionofX, lastpositionofY);
        console.log("Current position of X = " + currentpositionofX + " Current position of Y = " + currentpositionofY);
        ctx.lineTo(currentpositionofX, currentpositionofY);
        ctx.stroke();
    }

    lastpositionofX = currentpositionofX;
    lastpositionofY = currentpositionofY;
}
canvas.addEventListener("mouseup", mup);

function mup(e) {
    mousevent = "mouseup";
}

canvas.addEventListener("mouseleave", mleave);

function mleave(e) {
    mousevent = "mouseleave";
}

function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}