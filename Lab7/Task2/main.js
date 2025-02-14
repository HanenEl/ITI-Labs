function registeration() {
    var employee = {
        firstName: document.getElementById("Fname").value,
        lastName: document.getElementById("Lname").value,
        address: document.getElementById("address").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        birthDate: document.getElementById("date").value
    };

    if (!employee.firstName || !employee.lastName || !employee.address || !employee.age || !employee.birthDate) {
        alert("Complete registration!!!");
        return;
    }

    sessionStorage.setItem("employeeData", JSON.stringify(employee));
    window.location.href = "info.html";
}

var employeeData = sessionStorage.getItem("employeeData");

if (employeeData) {
    var employee = JSON.parse(employeeData);
    var table = document.getElementById("employeeTable");

    var row = `<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.address}</td>
        <td>${employee.gender}</td>
        <td>${employee.age}</td>
        <td>${employee.birthDate}</td>
    </tr>`;

    table.innerHTML = row;
}







// var searchSplitted = location.search.substring(1).split("&");
// document.write("<div>");
// for (var i =0;i < searchSplitted.length; i++) {
//     var spl1 = searchSplitted[i].split("="); 
//     var key=spl1[0];
//     var value=spl1[1]; 
//     document.write("<p>" + key+" :<span> "+ value+"</span></p>");
// } 







