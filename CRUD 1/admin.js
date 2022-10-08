// addpost 
async function addPost() {

    let id = document.getElementById('id').value
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value

    let send_this_data = {
        id,
        title,
        author,
    };

    let res = await fetch(`http://localhost:3000/posts`, {

        method: 'POST',
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': "application/json",
        },
    })

    let data = await res.json();
    // console.log('data:', data)
}

// delete 
async function deletePost() {

    let id = document.getElementById('delete_id').value;

    let res = await fetch(`http://localhost:3000/posts/${id}`, {

        method: 'DELETE',

        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();
    //  console.log('data:', data)
}

//update

const updatePost = async () => {

    let id = document.getElementById('update_id').value;
    let new_title = document.getElementById('update_title').value
    console.log('new_title:', new_title)

    let send_data = {
        title: new_title,
    }
    console.log('send_data:', send_data)

    let res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(send_data),
        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();
    //  console.log('data:', data)
}

// replace 

const replacePost = async () => {
    let id = document.getElementById('replace_id').value;
    let new_title = document.getElementById('replace_title').value

    let send_data = {
        title: new_title,
    }

    let res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',

        body: JSON.stringify(send_data),

        headers: {
            'Content-Type': "application/json",
        }
    })

    let data = await res.json();
    //  console.log('data:', data)

}

