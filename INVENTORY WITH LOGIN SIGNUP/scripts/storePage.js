
let Login = JSON.parse(localStorage.getItem("Login"));

if (Login === true) {


    let appendData = () => {
        let container = document.getElementById('container');
        let Data = JSON.parse(localStorage.getItem("Products"))

        container.innerHTML = null;
        Data.forEach(({ productName, productImage, productDetails }, index) => {
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            h2.innerText = productName;

            let img = document.createElement('img');
            img.src = productImage;

            let p = document.createElement('p');
            p.innerText = productDetails;

            let del = document.createElement("button");
            del.innerText = "Delete Product";
            del.addEventListener("click", function () {
                remove(index);
            })


            div.append(h2, img, p, del);
            container.append(div);
        });
    }
    appendData();

    let remove = (id) => {
        let products = JSON.parse(localStorage.getItem("Products"));
        products.splice(id, 1);
        localStorage.setItem("Products", JSON.stringify(products))
        appendData();
    }
}


if (Login !== true) {
    let appendData = () => {
        let container = document.getElementById('container');
        let Data = JSON.parse(localStorage.getItem("Products"))

        container.innerHTML = null;
        Data.forEach(({ productName, productImage, productDetails }, index) => {
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            h2.innerText = productName;

            let img = document.createElement('img');
            img.src = productImage;

            let p = document.createElement('p');
            p.innerText = productDetails;


            div.append(h2, img, p);
            container.append(div);
        });
    }
    appendData();
}

//Type of user

let UserDetails = document.getElementById("UserDetails");

if (Login !== null) {
    if (Login === true) {
        UserDetails.innerHTML = null;
        adminLogin();

    }
    else {

        UserDetails.innerHTML = null;
        userLogin();

    }


    function adminLogin() {

        let Login_User = document.createElement("h1");
        Login_User.innerHTML = `Login User`;
        let admin = document.createElement("h3");
        admin.innerHTML = `Admin`;
        let signout = document.createElement("button");
        signout.innerText = "Sign Out";
        signout.setAttribute("onclick", "signOutAdmin()")

        UserDetails.append(Login_User, admin, signout)

    }

    function userLogin() {
        let UserDetails = document.getElementById("UserDetails");
        // console.log('userLogin:', userLogin)
        let Login_User = document.createElement("h1");
        Login_User.innerHTML = `Login Type`;
        let name = document.createElement("h3");
        name.innerHTML = `Name: ${Login.name}`;
        let email = document.createElement("h3");
        email.innerHTML = `Email: ${Login.email}`;

        let phoneNumber = document.createElement("h3");
        phoneNumber.innerHTML = `Phone Number: ${Login.phoneNumber}`;

        let signOutUser = document.createElement("button");
        signOutUser.innerText = "Sign Out";
        signOutUser.setAttribute("onclick", "signOutUser()")

        UserDetails.append(Login_User, name, email, phoneNumber, signOutUser)
    }
}