let loginArr = JSON.parse(localStorage.getItem('loginDatabase'));
// console.log('loginArr:', loginArr)

function displayTable() {

    document.querySelector('tbody').innerHTML = "";
    loginArr.forEach(function (e, index) {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = e.name;
        let col2 = document.createElement("td");
        col2.innerText = e.email;

        let col3 = document.createElement("td");
        col3.innerText = e.phoneNumber;

        let col4 = document.createElement("td");
        col4.innerText = e.time;

        row.append(col1, col2, col3, col4);
        document.querySelector("tbody").append(row);

    });

}

displayTable()