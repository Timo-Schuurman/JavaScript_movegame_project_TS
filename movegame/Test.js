let stepX = 10;
let stepY = 10;
let moveDivje = document.getElementById("moveDiv");
let greenbox = document.getElementById("greenbox");
let score = 0;
let yPos, xPos;
let moving = false


// window.addEventListener("keyup",  (event) => {
//     if(event.keyCode === 39){
//         go("right")
//     } else if (event.keyCode === 37) {
//         go("left")
//         console.log("click")
//     }
// });

// function go(dir) {
//     let left = block.offsetLeft
//     if(dir === "right") {
//         if(block.offsetLeft <= (greenbox.offsetwidth - block.offsetwidth)) {
//             left = block.offsetLeft + 60;
//         }
//     } else {
//         if(block.offsetLeft >= 20) {
//             left = block.offsetLeft - 60;
//         }
//     }
//     block.style.left = left + "px";
//     console.log(block.offsetLeft)


// }

function move() {
    console.log("in move function")
    console.log("yPos = " + yPos)
    yPos = moveDivje.offsetTop
    xPos =  moveDivje.offsetLeft
    if(yPos + stepY > 555) {
        stepY = -stepY
    }
    if(yPos + stepY < 0) {
        stepY = -stepY
    }
    if(xPos + stepX > 755) {
        stepX = -stepX
    }
    if(xPos + stepX < 0) {
        stepX = -stepX
    }


    moveDivje.style.top = (yPos + stepY) + "px";
    moveDivje.style.left = (xPos + stepX) + "px";
}
function auto() {
    if (moving == false){
    myinterval = setInterval(move, 50);
    moving = true;
    }
}
function stop() {
    clearInterval(myinterval);
    moving = false;
}
function reset(){
    location.reload();
}
function showCoords(event){
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    document.getElementById("steps").innerHTML = "(" + mouseX + "," + mouseY + ")"
}
document.getElementById("greenbox").onmousemove = showCoords;

function mouseClick(event) {
    console.log("mouseX + hitDivWidth  = " + (mouseX + hitDivWidth));
    let posX = mouseX;
    if (event.button == 0) {
        hitDivLeft = mouseX - Math.round (0.5*hitDivWidth)
        if(hitDivLeft+hitDivWidth > 400) {
            hitDivLeft = 400 -hitDivWidth
        }
        if(hitDivLeft+hitDivWidth > 0) {
            hitDivLeft = 0;
        }
        document.getElementById("hitDiv").style.left = hitSivLeft + "px"
    }
}
hitBox.onmousedown = mouseClick;