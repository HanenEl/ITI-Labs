document.getElementById("addButton").addEventListener("click", function() {
    var newsText = document.getElementById("newsInput").value;

    if (!newsText) {
        alert("Please enter some news before adding!");
        return;
    }

    var tableBody = document.querySelector("#newsTable tbody");
    var newRow = tableBody.insertRow();
    
    newRow.insertCell(0).textContent = tableBody.rows.length;
    newRow.insertCell(1).textContent = newsText;

    document.getElementById("newsInput").value = ""; 
});

document.getElementById("countButton").addEventListener("click", function() {
    alert("Total Rows: " + document.querySelector("#newsTable tbody").rows.length);
});

