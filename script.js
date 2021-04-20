

function kreirajBrojcanik(id){
    var sviSegmenti = [];
    var clock = document.getElementById(id);
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper'; 
    
    for (var i = 1; i < 8; i++) {
        var segment = document.createElement('div');
        segment.className = 'segment s'+i;
        wrapper.appendChild(segment);
        sviSegmenti.push(segment);
        
    }

  clock.appendChild(wrapper);

  function ukljuci(segment){

    segment.classList.remove('ugasen');

  }
  

  function postaviVrijeme(broj){

    for (var i = 0; i < sviSegmenti.length; i++) {
        sviSegmenti[i].classList.add('ugasen'); // gasenje brojcanika
        }
    
    switch(broj){
        case 0: // za slucaj nule na brojcaniku
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[2]); 
            ukljuci(sviSegmenti[4]); 
            ukljuci(sviSegmenti[5]); 
            ukljuci(sviSegmenti[6]);   
        break;
        case 1:
            ukljuci(sviSegmenti[2]); // ukljucujemo 3 i 6 segment da bi dobili br 1 na brojcaniku
            ukljuci(sviSegmenti[5]);    // jer nam index krece od 0
        break;
        case 2:
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[3]); 
            ukljuci(sviSegmenti[4]); 
            ukljuci(sviSegmenti[6]); 
        break;
        case 3:
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[3]); 
            ukljuci(sviSegmenti[5]); 
            ukljuci(sviSegmenti[6]); 
        break;
        case 4:
            ukljuci(sviSegmenti[1]); 
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[3]); 
            ukljuci(sviSegmenti[5]);    
        break;
        case 5:
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[3]); 
            ukljuci(sviSegmenti[5]); 
            ukljuci(sviSegmenti[6]); 
        break;
        case 6:
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[3]);
            ukljuci(sviSegmenti[4]);  
            ukljuci(sviSegmenti[5]); 
            ukljuci(sviSegmenti[6]); 
        break;
        case 7:
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[5]); 
        break;
        case 8:
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[3]); 
            ukljuci(sviSegmenti[4]); 
            ukljuci(sviSegmenti[5]); 
            ukljuci(sviSegmenti[6]); 
        break;
        case 9:
            ukljuci(sviSegmenti[0]); 
            ukljuci(sviSegmenti[1]);
            ukljuci(sviSegmenti[2]);
            ukljuci(sviSegmenti[3]); 
            ukljuci(sviSegmenti[5]); 
            ukljuci(sviSegmenti[6]); 
        break;
    }    

    }


    return {

        setTime:postaviVrijeme
    }

}

var date = new Date();

var sati = date.getHours().toString().split('');

console.log(sati);

var br1 = kreirajBrojcanik('clock');
br1.setTime(+sati[0]); // znak + stavili da bi ga ovaj gore prepoznao kao string
var br2 = kreirajBrojcanik('clock');
br2.setTime(+sati[1]);
var min1 = kreirajBrojcanik('clock');

var min2 = kreirajBrojcanik('clock');


setInterval(function(){
    var sec = date.getSeconds().toString().split('');
    console.log(sec);
    min1.setTime(+sec[0]);
    min2.setTime(+sec[1]);
  
},100);