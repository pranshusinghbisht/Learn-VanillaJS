let url = "https://aqueous-island-33964.herokuapp.com/api/users";
let page = 1;
fetch(url).then((res)=>{
    return (res.json());
}).then((data)=>{
    console.log(data);
    display(data)
}).catch(function(err){
    console.log(err)
})

let display = (data) => {
let container = document.getElementById("container");
container.innerHTML = null;
data.forEach(({name,batch,course,age,mobile_no,score,id}) => {
   let div = document.createElement("div");

    let n = document.createElement("h2");
    n.innerText = `Name: ${name}`;
    let b = document.createElement("p");
    b.innerText = `Batch: ${batch}`
    let c = document.createElement("p");
    c.innerText = `Course: ${course}`
    let a = document.createElement("p");
    a.innerText = `age: ${age}`
    let m = document.createElement("p");
    m.innerText = `Mobile Number: ${mobile_no}`
    let s = document.createElement("p");
    s.innerText = `Evaluation Score: ${score}`
    let i = document.createElement("p");
    i.innerText = `ID: ${id}`
    let del = document.createElement("button");
    del.innerText = "Delete"
    del.addEventListener("click",function(){
        delt(id);
    })

    let update = document.createElement("button");
    update.innerText = "Update"
    update.addEventListener("click",function(){
        updt(id);
    })    
    
    div.append(n,i,b,c,a,m,s,del,update);
    container.append(div)
});
}

let delt = async(id) => {

     let res = await fetch(`${url}/${id}`,{

    method: 'DELETE',

    headers: {
        'Content-Type': "application/json",
    }
     })

     let data = await res.json();
     console.log('data:', data)
     window.location.reload()
}

let updt = async(id) => {

    let new_Score = window.prompt("Enter New Score: ");

    let send_data = {score: new_Score};

    let res = await fetch(`${url}/${id}`,{

   method: 'PATCH',

   body: JSON.stringify(send_data),

   headers: {
       'Content-Type': "application/json",
   }
    })

    let data = await res.json();
    console.log('data:', data)
    if(new_Score === null){ 
    }else{
        window.location.reload()
    }
}

      document.getElementById("course").addEventListener("click", async function(){
        let c = course.value;
        console.log('c:', c)
        if(c === ""){
            let res = await fetch(url);
            let data = await res.json();
            display(data)
        }
        else{
            let res = await fetch(`${url}?course=${c}`);
            let data = await res.json();
            display(data)
        }
      })

    let lth = async() => {
        let res = await fetch(`${url}?_sort=age&_order=asc`)
             let data = await res.json();
             display(data)
             console.log('dataLTH:', data)
    }

    let htl = async() => {
        let res = await fetch(`${url}?_sort=age&_order=desc`)
             let data = await res.json();
             display(data)
             console.log('dataHTL:', data)
    }

    let next = async () => {
        if(page === 3){
            page = 1;
        }
        else{
            page++;
        }
        console.log('page:', page)
        
        let res = await fetch(`${url}?_page=${page}&_limit=5`)
        let data = await res.json();
        display(data)
    }

    let previous = async () => {
        if(page === 1){
            page = 3
        }
        else{

            page--;
        }
        console.log('page:', page)
        let res = await fetch(`${url}?_page=${page}&_limit=5`)
        let data = await res.json();
        display(data)
    }
    // posts
