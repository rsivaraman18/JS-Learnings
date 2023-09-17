// ( )

function genQR2( ){
    let qapi = "https://chart.googleapis.com/chart?cht=qr&chs="
    let mytext =document.getElementById("qtext" ).value;
    let mysize =document.getElementById("qsize" ).value;
    
        
    if (mytext!=="" && mysize=="100" )
        {
            qimg.src =qapi+"100x100"+"&chl="+mytext;
            //myimg.src =qapi+"100x100"+"&chl="+mytext;
        }
    else if (mytext!=="" && mysize=="150" )
        {
            qimg.src =qapi+"150x150"+"&chl="+mytext;
        }
    else if (mytext!=="" && mysize=="200" )
        {
            qimg.src =qapi+"200x200"+"&chl="+mytext;
        }
    else if (mytext!=="" && mysize=="250" )
        {
            qimg.src =qapi+"250x250"+"&chl="+mytext;
        }
    else if (mytext!=="" && mysize=="300" )
        {
            qimg.src =qapi+"300x300"+"&chl="+mytext;
        }
    else{
        alert( "please enter  any text")
    }
       
}

