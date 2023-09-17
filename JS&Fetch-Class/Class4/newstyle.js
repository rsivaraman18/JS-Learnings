console.log( "sivaraman")

function getme( ){
    document.body.style.backgroundColor = "lightgreen"; 
    let displayme = " ";

    url = "https://fakestoreapi.com/products"
    fetch(url).then((rawdata ) => {
        return rawdata.json( );
    })
    .then((condata) => {
        console.log(condata)
        condata.map((VALUES) => {
            let display;
            displayme +=  `  <p> ${VALUES.title} <p> `
            document.getElementById( "para").innerHTML = displayme


        })

    })

}
//document.body.style.backgroundColor = "lightblue"; 
// document.getElementById( "para").innerHTML = 