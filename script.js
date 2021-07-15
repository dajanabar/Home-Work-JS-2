function middleSymbol (){
    var x, y, middle, dubleMiddle;
    x = document.getElementById(`jsName`).value;
    y = (x.length) / 2;
    middle = y--;
    dubleMiddle = middle--;


     if ( (x === ``) || (x === ` `) )  {

         document.getElementById(`jsResult`).innerHTML = `<p> *Invalid value</p>`;
         return;
     } else if  (y % 1 === 0) {

         var sym = x[middle];
         var symDub = x[dubleMiddle];
         document.getElementById(`jsY`).innerHTML = `Middle Symbol your name: ` + sym + symDub;
     } else {

         var y2 = (--x.length) / 2;
         var symthree = x[y2];
         document.getElementById(`jsY`).innerHTML =`Middle Symbol your name: ` + symthree;
     }
};