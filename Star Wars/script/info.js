
let data = JSON.parse(localStorage.getItem("character"));
console.log('data:', data)

document.getElementById("searchInfo").innerHTML = `

<h1>
${data.name}
</h1>
<br>
<br>
<div id="papa">
<div>
<h2>
Personal Info 
</h2>
<h4>
Birth Year : ${data.birth_year}
    </h4>
    <h4>
Gender : ${data.gender}
    </h4>
    <h4>
        height : ${data.height}
    </h4>
</div>
<div>
    <h2>
        Anatomy
    </h2>

    <h4>
        Eye Color: ${data.eye_color}
    </h4>
    <h4>
        Mass : ${data.mass}
    </h4>
    <h4>
        Hair Color : ${data.hair_color}
    </h4>
</div>
</div>
<br>
<br>
<a href="index.html"> <button>
    Go Back
</button></a>

`