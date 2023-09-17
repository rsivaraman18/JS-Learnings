//console.log( "sivaraman1233")

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
            displayme +=  ` 
            <div> <tr>
            <td> ${VALUES.id}  </td>
            <td> ${VALUES.title} </td>
            <td> ${VALUES.category}   </td>
            <td> ${VALUES.price}  </td>
            <td> <span class='delete-product btn-danger' onclick="call(this)"  > Delete </span> </td>      
            <td> <span class='delete-product btn-danger' > Delete </span> </td>                         
        </tr>
        </div> `
            document.getElementById( "tbody1").innerHTML = displayme


        })

    })

};
// 


function call(x ){
    const current = document.querySelector('x');
    const parent = current.parentNode;
    console.log(current )
    //console.log(parent )

}



















