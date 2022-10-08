let book = () => {
    // ${user's name}, Your booking is successful!
    user_name = document.getElementById("user_name").value;
    setTimeout(() => {
        alert(`${user_name}, Your booking is successful!`)
    }, 5000);
}