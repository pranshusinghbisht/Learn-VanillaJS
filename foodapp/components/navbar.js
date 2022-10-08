function navbar(){
    return `
    <nav>
    <input type="text" id="query" placeholder="Search food by name">

    <button id="btn">receipe by name</button>
    <button id="btn" onclick="window.location.href = 'randomReceipes.html'">show random receipes</button>
    <button id="btn" onclick="window.location.href = 'receipesOfDay.html'"> receipe of the day </button>
    
</nav>
    `
}

export default navbar;