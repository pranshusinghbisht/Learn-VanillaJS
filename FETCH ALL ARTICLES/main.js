// https://jsonmock.hackerrank.com/api/articles 

let url = "https://jsonmock.hackerrank.com/api/articles";

let fetchArr = [];
for(let i=0; i<=5; i++){
    let f = fetch(`${url}?page${i}`).then((res) => res.json());
    fetchArr.push(f);
}

let getData = async () => {
    try {
let data = await Promise.all(fetchArr);
console.log('data:', data)

let allData = [];
for(let res of data){
    allData.push(...res.data);
}
console.log(allData)

renderDom(allData)
z(allData)
    }
catch (err){
console.log(err)
}
};

getData();

let div = ({author, title, num_comments }) => {
    let div = document.createElement("div");
    let t = document.createElement("h3");
    let auth = document.createElement("p");
    let comm = document.createElement("p");

    t.innerText = `Title: ${title}`;
    auth.innerText = `Author Name: ${author}`;
    comm.innerText = `No of comments: ${num_comments}`;

    div.append(t,auth,comm);
    return div;
}

let renderDom = (data) => {

    console.log(data);
    let c = document.getElementById("container");
    c.innerHTML=null;
    data.forEach(el => {
        let article = div(el);
        c.append(article);
    });
    
}

function z(data){
    console.log("z:",data);
    sortLTH = () => {
        let sort = data.sort((a,b) => a.num_comments - b.num_comments); 
        console.log('sortLTH:', sort)
        renderDom(sort);
    }

    sortHTL = () => {
        let sort = data.sort((a,b) => b.num_comments - a.num_comments); 
        console.log('sortHTL:', sort)
        renderDom(sort);

    }
}


