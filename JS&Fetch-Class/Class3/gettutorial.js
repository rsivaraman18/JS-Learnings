//  ( )
// Getting data from API link 

url = "https://fakestoreapi.com/products"
fetch(url).then( rawdata  => {
    console.log(rawdata)                //this is in Json data ,so convert to Javascript Object 
    return rawdata.json( );
    
})

.then( condata => {
    //console.log(condata)          //We can see the converted data
    let Displaydata = " ";
    condata.map( (myvalues) =>{
        Displaydata += `<div class="card">
                        <p class="title"> ${myvalues.title}  </p>
                        <img src="${myvalues.image}" alt="keychain " class="images">
                        <p class="description"> ${myvalues.description}  </p>
                        <p class="category"> ${myvalues.category}  </p>
                        <p class="price">  $ ${myvalues.price} </p>   
                        </div>`
        document.getElementById("BOX").innerHTML = Displaydata;
    })
})
.catch( (err) => {
    console.log(err)
});

