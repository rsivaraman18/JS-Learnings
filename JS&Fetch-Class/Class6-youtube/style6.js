function selectme(x){
    document.getElementById("para").textContent = "selected row Id is : "+x.rowIndex;
    console.log("Rowindex" ,x.rowIndex)

}

function deleteme(x){
    //document.getElementById("para2").textContent = "selected row Id is : "+x.rowIndex;
    //console.log("Row clicked for delete is : " +x.rowIndex )
    //console.log("Row clicked for delete is : " +x)
    selctedRow = x.parentElement
    console.log(selectedRow.rowIndex)

}