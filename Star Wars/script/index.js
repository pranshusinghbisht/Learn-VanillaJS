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
        list.addEventListener("click",function(){
            let obj = {
                name : el.name,
                birth_year : el.birth_year,
                gender: el.gender,
                height: el.height,

                eye_color: el.eye_color,
                mass: el.mass,
                hair_color: el.hair_color,
            }
            console.log("new obj:",obj);

            localStorage.setItem("character",JSON.stringify(obj));
            window.location.href = "./info.html"
        })

        dataList.append(list)
   
})
}