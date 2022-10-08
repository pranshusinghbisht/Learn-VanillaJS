
// https://masai-api.herokuapp.com/hotels/search?city={query}

let login = JSON.parse(localStorage.getItem("login"));
console.log('login:', login)

let enter = async(event) => {
    console.log(12)
    let query = document.getElementById("query").value;
    console.log('query:', query)
        try {
            let res = await fetch(`https://masai-api.herokuapp.com/hotels/search?city=${query}`) 
            let data = await res.json();
            // console.log('data:', data.hotels)
            appendData(data.hotels)
            
            
        }
        catch (err) {
            console.log('err:', err)
        }
    }

    let container = document.getElementById("hotels-list");
    let appendData = (data) => {
        container.innerHTML = null;
        data.forEach(({Title,Images: {one},Price,Rating,Ac}) => {
            // console.log("one:" ,one)
            let div = document.createElement("div");
            div.setAttribute("class","hotel")
            
            let img=document.createElement("img");
            img.src = one;
            let title =document.createElement("p");
            title.innerText = Title;
            let price =document.createElement("p");
            price.innerText = `Price per room: ${Price}`;
            let ac =document.createElement("p");
            ac.innerText = `AC: ${Ac}`
            let rating =document.createElement("p");
            rating.innerText = `Rating: ${Rating}`;
            let btn =document.createElement("button");
            btn.innerText = "BOOK NOW";
            btn.setAttribute("class","book");
            btn.addEventListener("click",function(){
                if(login ===null){
                    alert("Log In to continue!")
                }
                else if(login == 'true'){
                    window.location.href = './checkout.html'
                }
            })

            div.append(img,title,price,ac,rating,btn);
            container.append(div)
            
        });
        z(data);
    }
   let z = (data) => {
       console.log('data:', data);
        sortLTH = () => {
        let sort = data.sort((a,b) => (a.Price - b.Price));
        appendData(sort)
       }

       sortHTL = () => {
        let sort = data.sort((a,b) => (b.Price - a.Price));
        appendData(sort)
       }

       filterAC = () => {
        let ac = data.filter(checkAC);
        appendData(ac)
        

        }
        function checkAC(data){
           return data.Ac == true;
        }

        filterNonAC = () => {
            let Nonac = data.filter(checkNonAC);
            appendData(Nonac);
            }
            function checkNonAC(data){
               return data.Ac == false;
            }
       }







