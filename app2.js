
let button=document.querySelector('.button')
button.addEventListener('click',(symbols, colors) => {
        var symbols, colors;
        symbols = "0123456789ABCDEF";
        colors = "#";
        for (var i = 0; i < 6; i++) {
            colors = colors + symbols[Math.floor(Math.random() * 16)];
            document.body.style.background = colors;
            document.getElementById("hex").innerHTML = colors;
            

        }
        console.log("getHexCodes;"+colors);
    }) 