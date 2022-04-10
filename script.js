class Box{
    constructor(op){
        this.width = "250px"
        this.height = "250px"
        this.opacity = op;
    }
    getwidth(){
        return this.width;
    }
    getheight(){
        return this.height;
    }

    getopacity(){
        return this.opacity;
    }
}

let B = new Box("12%");

let opa = document
for (let i = 0; i < 8; i++) {
    let square = document.createElement("div");
    square.className = 'squares';
    square.style.backgroundColor = "white";
    square.style.width = B.getwidth();
    square.style.height = B.getheight();
    square.style.opacity = B.getopacity();
    
    if ((i==0) || (i==2))
        square.style.opacity = "75%";
    if ((i==1) || (i==3))
        square.style.opacity = "50%";
    if ((i==4) || (i==6))
        square.style.opacity = "25%";
        
    document.getElementById("blueArea").appendChild(square);
    
}


// let hover = document.querySelectorAll('.squares');
// for (let i = 0; i < hover.length; i++)
//     {
//         hover[i].addEventListener("mouseover", mHover);
//         hover[i].addEventListener("mouseout", mOut);
        
//     }
//         function mHover(){hover[i].style.backgroundColor = "green"; }
//         function mOut()  {hover[i].style.backgroundColor = "white"; }
    




