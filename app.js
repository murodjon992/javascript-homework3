
function showAlert(){
    let x = +prompt ('Enter the number!');

    let y = +prompt ('Enter the level!')

    let result = Math.pow(x,y);
    document.getElementById("in__text").innerHTML = result;
}


function stairCase(){
let n = +prompt("WELCOME STAIRCASE")
let i, j;
for(i=0; i<=n; i++){
    for(j=1; j<=i; j++){
        document.write("#");
    }
    document.write("<br>");
}
}

