const gridBox = document.querySelector('.gridBox');
const screenSize = 980;
let gridCount = 50;
let gridSize = 980/gridCount;

function drawGrid () {
    for (i=1 ; i <= gridCount**2 ; i++) {
    gridBox.innerHTML += "<div class = gridSquare></div>"
        };
    }


drawGrid();

let gridSquare = Array.from(document.getElementsByClassName('gridSquare'));
for (i=0 ; i <= gridSquare.length - 1 ; i++) {
    gridSquare[i].style.width = gridSize + 'px';
    gridSquare[i].style.height = gridSize + 'px';
    
}


for (i=0 ; i <= gridSquare.length - 1 ; i++) {
    gridSquare[i].addEventListener('mouseover', function () {this.classList.add('hovered')});
};
