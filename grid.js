window.onload = function(){

// _____________________ CREATION GRID _________________________

    const nbLignes = 50;
    const nbColonnes = 50;
    let x = 0;
    let y = 0;


for(let i = 0; i < nbLignes; i++) {
    const trElt = document.createElement('tr');
    trElt.id = 'line-' + i;
    document.querySelector('#myTab').appendChild(trElt);

    for(let j = 0; j < nbColonnes; j++) {
        const tdElt = document.createElement('td');
        tdElt.id = x + '-' + y;
        // tdElt.innerHTML = i + "-" + j;

        document.getElementById(`line-${y}`).appendChild(tdElt);
        x++; // aller a droite

        // passer a la ligne
        if(document.getElementById(`line-${y}`).children.length == nbColonnes) {
            y++;
            x = 0;
        }

    }
}


// __________________ coordonnees gps ___________________________


const table = document.querySelector("#myTab");
const display = document.querySelector("#gps");

table.addEventListener("mousemove", function(event) {
  const cell = event.target;

  if (cell.tagName === "TD") {
    let cellRect = cell.getBoundingClientRect();
    let x = event.pageX - cellRect.left;
    let y = event.pageY - cellRect.top;

    x = Math.round(x);
    y = Math.round(y);

    display.innerHTML = `x: ${x} y: ${y}`;
  }
});



//_____________________________ TABLE ZOOM LEVEL _________________

let zoomLevel = 1;

function handleZoom(e) {
    if (e.deltaY < 0) {
        zoomLevel += 0.1;
    } else {
        zoomLevel -= 0.1;
    }

    if(zoomLevel >= 0){
        zoomLevel == 1;
    }

    document.getElementById("myTab").style.transform = `scale(${zoomLevel})`;
}

document.getElementById("myTab").addEventListener("wheel", handleZoom);


//_______________________________________________________________




































}