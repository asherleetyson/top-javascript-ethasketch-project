for (i = 0; i < 256; i++) {
    const grid1 = document.createElement('div');
    grid1.className = 'thatGRIDDY';
    grid1.style.width = "30px";
    grid1.style.height = "30px";
    // grid1.style.backgroundColor = "red";
    grid1.innerHTML = "1";

    document.getElementById('grid').appendChild(grid1);
}

// Attaching event listener to the node
const squaresInput = document.querySelector('#squares-input');

// Grid adjusting function
function adjustGrid (num1) {
    for (i = 0; i < num1; i++) {
        const grid2 = document.createElement('div');
        grid2.className = 'thatGRIDDY2';
        grid2.style.width = "30px";
        grid2.style.height = "30px";
        grid2.innerHTML = "2";

        document.getElementById('grid2').appendChild(grid2);

        const z = document.getElementById('grid2')
        z.style.display = "flex";
        z.style.flexWrap = "wrap";

        gridAdjustment = document.getElementById("grid2");
        gridAdjustment.style.gridTemplateColumns = `repeat(${num1}, 1fr)`;          //Need to get this line right and the one below it to autofill
        gridAdjustment.style.gridTemplateRows = `repeat(${num1}, 1fr)`

        console.log(num1);

        const y = document.getElementById('grid');
        y.style.display = "none";
    }
}

// Adding event listener
squaresInput.addEventListener('click', function (e) {
    const x = prompt("Enter the desired number of squares per side",);
    const num1 = parseInt(x);
    console.log(num1);
    adjustGrid(num1);
}
)
