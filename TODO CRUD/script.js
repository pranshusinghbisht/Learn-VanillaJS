let arr = JSON.parse(localStorage.getItem("completed")) || [];
let url = "http://localhost:3000/api";
window.addEventListener("load", ()=> {
    getData()
})

let getData = async () => {
    let res = await fetch(`${url}/todo`);
    res = await res.json();
    renderDom(res);
};

let renderDom = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(({id, title, status},i) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerHTML = title;

        let p = document.createElement("p")
        p.innerHTML = status;

    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.onclick = () => {

        remove(id);
    }

    let toggle_btn = document.createElement("button");
    toggle_btn.innerText = "Completed";
    toggle_btn.onclick = () => {
        toggle(id);
        localStorage.setItem("ined",i)
    }
    
    div.append(h3,p, delete_btn, toggle_btn);
    container.append(div)
    });
}

let addTodo = async () => {
    let todo = document.getElementById("todo").value;
    
    let todo_data = {
        title: todo,
        id: Date.now() + todo,
        status: "Not Completed",
    };

    let res = await fetch(`${url}/todo`, {
        method: "POST",
        body: JSON.stringify(todo_data),
        headers: {
            "Content-Type": "application/json",
        },
    });
};


let toggle = async (id) => {
    let todo = await fetch(`${url}/todo/${id}`);
    todo = await todo.json();
    let todo_status = {status: "Completed"};

    
    let res = await fetch(`${url}/todo/${id}`,{
        method: "PATCH",
            // method: "DELETE",
        body: JSON.stringify(todo_status),
        headers: {
            "Content-Type": "application/json",
        },
    })
    let data = await res.json();
    arr.push(data);
    console.log('arr:', arr)
    localStorage.setItem("completed",JSON.stringify(arr))
    getData()
    res = await fetch(`${url}/todo/${id}`,{
            method: "DELETE",
        })
}

let complete =  () => {
    let List = document.getElementById("completeList");
    let data = JSON.parse(localStorage.getItem("completed"));
    console.log('data:', data)
    List.innerHTML = null;
    data.forEach(({id,title,status},index) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerHTML = title;
        
        let p = document.createElement("p")
        p.innerHTML = status;
        
    let delete_btn = document.createElement("button");
    delete_btn.innerText = "Delete";
    delete_btn.onclick = () => {
        del(index);
    }
    div.append(h3,p,delete_btn);
    List.append(div);
});
}

let del = (i) => {
    arr.splice(i,1);
    localStorage.setItem("completed",JSON.stringify(arr));
    complete();
};