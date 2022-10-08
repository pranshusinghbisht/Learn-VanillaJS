function clickFunc() {
    function onSubmit() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("success")
            }, 1000)
        })
    }
    let id1 = setInterval(function () {
        document.getElementById("container").innerHTML = " ";
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "center";
        let image = document.createElement("img");
        image.setAttribute(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS24mtxMRPHEMAAPUxTNa-EAIC_yqcMSUwzg&usqp=CAU"
        );
        image.style.height = "650px"
        image.style.width = "auto";
        div.append(image);
        document.getElementById("container").append(div);
    }, 3000);

    let id2 = setInterval(function display() {
        document.getElementById("container").innerHTML = " ";
        let div = document.createElement("div");
        div.style.display = "flex";
        div.style.justifyContent = "center";
        let image = document.createElement("img");
        image.setAttribute(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IN4I3WcUZLbvCYN0ikDijRMlH7LPzL6J3g&usqp=CAU"
        );
        image.style.height = "650px"
        image.style.width = "auto";
        div.append(image);
        document.getElementById("container").append(div);
        clearInterval((id1));
    }, 6000);
}