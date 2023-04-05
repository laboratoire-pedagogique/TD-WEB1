const titre = document.getElementById("titre");
const description = document.getElementById("description");
const add = document.getElementById("add");
const tableBody = document.getElementById("table-body");


function addElementToTable(title, description,element) {
    element.innerHTML += `
        <tr>
            <td>${title}</td>
            <td>${description}</td>
            <td>todo</td>
            <td><button>Remove</button></td>
        </tr>
    `;
}

function addElementsToTable(title, description,element) {
    var tr = document.createElement("tr");
    var titre = document.createElement("td").innerText = title.value;
    var descr = document.createElement("td").textContent = description.value;
    var btn = document.createElement("button").innerText = "Remove";
    tr.append(titre, descr, btn);
    element.append(tr);
    //title.value = "";
    //description.value = "";
}

function checkValue(element) {
    return element.value == "" || element.value == null;
}

add.addEventListener("click", (e) => {
    e.preventDefault();
    if(!checkValue(titre) && !checkValue(description)) {
        //addElementToTable(titre.value, description.value, tableBody);
        addElementsToTable(titre, description, tableBody);
    }
    else alert("Missing values !");
})