function addRow() {
    let table = document.getElementById("dynamicTable");
    let myForm = document.getElementById("myForm");
    let options = document.getElementById("foodChoice").selectedOptions;
    let values = Array.from(options).map(({ value }) => value);
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = "<td>" + document.getElementById("firstName").value + "</td>";
    cell2.innerHTML = "<td>" + document.getElementById("lastName").value + "</td>"; 
    cell3.innerHTML = "<td>" + document.getElementById("address").value + "</td>";    
    cell4.innerHTML = "<td>" + document.getElementById("pincode").value + "</td>";    
    cell5.innerHTML = "<td>" + myForm.elements["genderRadio"].value + "</td>";    
    cell6.innerHTML = "<td>" + values + "</td>";    
    cell7.innerHTML = "<td>" + document.getElementById("state").value + "</td>";    
    cell8.innerHTML = "<td>" + document.getElementById("country").value + "</td>";
    myForm.reset();
}