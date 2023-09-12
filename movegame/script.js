let stepX = 10;
let stepY = 10;
let moveDivje = document.getElementById("moveDiv");
let greenbox = document.getElementById("greenbox");
let score = 0;
let yPos, xPos;
let moving = false
let minusPoints = 10;
let plusPoints = 10;
let mouseX, mouseY;
let hitDivWidth = 150;
let hitDiv = document.getElementById("hitDiv");


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
    if(yPos + stepY > 549.5) {  // door de onderkant
        stepY = -stepY
        setScore()
        setlevels()
        console.log("score =" + score + " minusPoints =" + minusPoints)

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

    showScore()

}

function setScore() {
    let moveDivLinks = moveDivje.offsetLeft
    let moveDivRechts = moveDivje.offsetLeft + moveDivje.offsetWidth
    let hitDiveLinks = hitDiv.offsetLeft
    let hitDiveRechts = hitDiv.offsetLeft + hitDiv.offsetWidth
    if (moveDivLinks >= hitDiveLinks && moveDivRechts <= hitDiveRechts) {
        console.log("hit");
        score = score + plusPoints;
    }
        else {
        score = score - minusPoints;
        }
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
function getCoords(event){
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    //document.getElementById("score").innerHTML = score + "punten";
    // console.log(mouseX + ", " + mouseY)
}
document.getElementById("greenbox").onmousemove = getCoords;

function showScore(){
    document.getElementById("score").innerHTML = score + "punten";
}


function mouseClick(event) {
    console.log("mouseX + hitDivWidth  = " + (mouseX + hitDivWidth));
    hitDivLeft = 0;
    if (event.button == 0) {
        hitDivLeft = mouseX - Math.round(0.5*hitDivWidth);
        if(hitDivLeft+hitDivWidth > 799){
          hitDivLeft = 800 - hitDivWidth;
        }
        if(hitDivLeft < 0){
          hitDivLeft = 0;
        }
        hitDiv.style.left = hitDivLeft + "px";
    }
  }












