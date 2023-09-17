//  ( )


/* 
//Get data from api

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


*/




/* 

// Posting data to API link -1

url = "https://reqres.in/api/users"
fetch(url , {
    method  : "POST",
    headers : {
            "Content-type" : "application/json"
            },
    body : JSON.stringify (
            {
                "name" : "sivaraman" ,
                "job" : "programmer"
            }
        )
})
.then( (result) => {
    console.log(result)  
    console.log("successfully added") 
})

*/





/*
// POST data to API link -2
url = "https://reqres.in/api/users"
fetch(url , {
    method  : "POST",
    headers : {
            "Content-type" : "application/json"
            },
    body : JSON.stringify (
            {
                "name" : "sivaraman" ,
                "job" : "programmer"
            }
        )
})
.then(rawdata =>rawdata.json( ) )
.then(condata =>console.log(condata) )
.catch(err  => console.log(err ))

*/


/*
//3.PUT request -1 

url = "https://reqres.in/api/users/2"
fetch(url , {
    method  : "PUT",
    headers : {
            "Content-type" : "application/json"
            },
    body : JSON.stringify (
            {
                "name" : "sivaramanff" ,
                "job" : "programmer"
            }
        )
})
.then( (result) => {
    console.log(result)  
    console.log("successfully updated") 
})
*/
 




/*
//3.PUT request -2 
url = "https://reqres.in/api/users/2"
fetch(url , {
    method  : "PUT",
    headers : {
            "Content-type" : "application/json"
            },
    body : JSON.stringify (
            {
                "name" : "sivaramanff" ,
                "job" : "programmer"
            }
        )
})
.then(rawdata =>rawdata.json( ) )
.then(condata =>console.log(condata) )
.catch(err  => console.log(err ))

*/









/*

//4.Delete request

url = "https://reqres.in/api/users/2"
fetch(url , {
    method  : "DELETE",
    headers : {
            "Content-type" : "application/json"
            },
    body : JSON.stringify (
            {
                "name" : "sivaramanff" ,
                "job" : "programmer"
            }
        )
})
.then(rawdata => console.log(rawdata) )

*/

