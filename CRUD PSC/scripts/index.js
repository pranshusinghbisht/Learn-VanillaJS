// 


let submit = async() => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let batch = document.getElementById("batch").value;
    let mobile_no = document.getElementById("mobile_no").value;
    let score = document.getElementById("evaluation_score").value;

    let send_this_data = {name,age,course,batch,mobile_no,score};
    console.log('send_this_data:', send_this_data)

    try {
        let res = await fetch(`https://aqueous-island-33964.herokuapp.com/api/users`,{
            method: 'POST',
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
        }) 
        let data = await res.json();
        console.log('data:', data)
    }
    catch (err) {
        console.log('err:', err)
    }
//  form.reset();
}