// https://swapi.dev/api/people/?search={your_search_term}




async function main() {
    
    try {
        let input = document.getElementById("input").value;
        
        let res = await fetch(`https://swapi.dev/api/people/?search=${input}`)
        
        let data = await res.json();
        console.log('data:', data.results)
        // displaylist(data)
        dropList(data.results)
    }

    catch (err) {
        console.log('err:', err)
        
    }
    // console.log(input)
}

function dropList(data){
    
    let dataList = document.getElementById("dropList");
    dataList.innerHTML = null;
    data.forEach(el => {
        let list = document.createElement("li");
        list.innerText=el.name;

        dataList.append(list)
   
})
}


function post(){
    let a = document.getElementById("dropList");
let val = a.innerText;
console.log('val:', val)


// 2nd part is little chanllenging for me here


// let b = li.innerText

// for(let i=0;i<li.length;i++){
//     if()
// }






    // let selectName = (a.innerText);
//     a.forEach(el => {
//         ele.addEventListener('click', async () => {
//             console.log(el)
//     });
// }

// )}


    // console.log('selectName:', li)

//     a.innerHTML=`
// <a href="info.html"></a>
// var url=document.redirect.selection.value
// document.location.href= url
// let result = await fetch(`https://swapi.dev/api/people/?search=${selectName}`);
//             let infoData = await result.json();


//             console.log("infoData" , infoData.results)



            // displayMovieDetails(movieDetails);

// window.location="info.html";

}


// function displaylist(data){
//     document.getElementById("searchInfo").html=`
    
//     <h1>
//     Luke skywalker
//     </h1>
//     <br>
//     <br>
//     <div id="papa">
//     <div>
//         <h2>
//             Personal Info
//     </h2>
//     <h4>
//         Birth Year: 19BBY
//     </h4>
//     <h4>
//         Gender: male
//     </h4>
//     <h4>
//         height 172
//     </h4>

// </div>
// <div>
//     <h2>
//         Anatomy
//     </h2>

//     <h4>
//         Eye Color: blue
//     </h4>
//     <h4>
//         Mass: 77
//     </h4>
//     <h4>
//         Hair Color : blond
//     </h4>
// </div>
// </div>
// <br>
// <br>
// <a href="index.html"> <button>
//     Go Back
// </button></a>
// `
// }

// function loadInfo(){
// let searchInfo = document.getElementById("searchInfo");

// searchInfo.forEach(el => {
//     ele.addEventListener('click', async() =>{
//         console.log(ele.data)

//     } )
// });