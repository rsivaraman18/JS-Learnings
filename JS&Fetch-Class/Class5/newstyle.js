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
            displayme +=  ` <tr onclick="selectme( this)" >
                                <td> ${VALUES.id}  </th>
                                <td> ${VALUES.title} </td>
                                <td> ${VALUES.category}   </td>
                                <td> ${VALUES.price}  </th>
                                <td> <input type="submit" value="Delete" onclick="deleteme(this)"  ></td>                              
                            </tr> `
            document.getElementById( "tbody1").innerHTML = displayme


        })

    })

};



function selectme(x){                         
    selectedRow = x.rowIndex;
    console.log("selectme ID  is : ",selectedRow)

} 



function deleteme(y){ 
    let selectedRow=y.index()
    console.log("delete me delete ID is",selectedRow)
    
}




