function gridMapDel() {
    $('.tile').remove();
}

function gridMapLoad() {
    console.log(getMapViewPx());

    // W, H (tile num)
    // let mapViewTiles = [Math.floor(mapView[0]/44), Math.floor(mapView[1]/12.5)];
    // console.log("mVT:", mapViewTiles);

    // // set tiles
    // let h, w, inLine=0;
    // for (h=0;h<mapViewTiles[1]-3;h++){
    //     inLine = inLine===0 ? (44/2) : 0;
    //     for (w=0;w<mapViewTiles[0]-1;w++){
    //         const dc_p = document.createElement("p");
    //         dc_p.innerText = "⬣";
    //         let inPx = (44*w) + inLine;
    //         dc_p.setAttribute("style","top:"+String(12.5*h)+"px;left:"+String(inPx)+"px;");
    //         dc_p.setAttribute("class","tile");
    //         map.appendChild(dc_p);
    //     }
    // }
}

// OUTPUT : Start Width, End Width, Strat Height, End Height
function getMapViewPx() {
    const map = document.getElementById("map");
    const ml = map.getBoundingClientRect().left;
    const mt = map.getBoundingClientRect().top;
    const mw = map.getBoundingClientRect().width;
    const mh = map.getBoundingClientRect().height;
    const bw = window.innerWidth;
    const bh = window.innerHeight;
    let SW, EW, SH, EH;
    
    // S width
    if(ml<0){
        if(mw+ml<0){
            console.log("W: -X");
            return false;
        }else{ 
            SW = -ml;
        }
    }
    else{ 
        if(bw<ml){
            console.log("W: +X");
            return false;
        }else{ 
            SW = 0;
        }
    }

    // E width
    if(ml+mw<bw){
        EW = mw;
    }else{
        EW = bw-ml;
    }

    // S height 
    if(mt<0){
        if(mh+mt<0){
            console.log("H: -Y");
            return false;
        }else{ 
            SH = -mt;
        }
    }
    else{ 
        if(bh<mt){
            console.log("H: +Y");
            return false;
        }else{ 
            SH = 0;
        }
    }

    // E height
    if(mt+mh<bh){
        EH = mh;
    }else{
        EH = bh-mt;
    }

    return [SW, EW, SH, EH];
}