const gridBox = document.querySelector('.gridBox');
const screenSize = 500;
let gridCount = 50;
let gridSize = 500/gridCount;

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

let reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    gridCount = Math.round(Number(prompt("Choose your resolution (from 9-64)")));
    gridBox.innerHTML = " ";
    if (gridCount <=64 && gridCount >= 9) {
        drawGrid();

        gridSize = 500/gridCount;
        let gridSquare = Array.from(document.getElementsByClassName('gridSquare'));
        for (i=0 ; i <= gridSquare.length - 1 ; i++) {
            gridSquare[i].style.width = gridSize + 'px';
            gridSquare[i].style.height = gridSize + 'px';
    
        }


        for (i=0 ; i <= gridSquare.length - 1 ; i++) {
            gridSquare[i].addEventListener('mouseover', function () {this.classList.add('hovered')});
        };
       

    } else {
         alert("Enter a valid number!");
        return;
    }
})