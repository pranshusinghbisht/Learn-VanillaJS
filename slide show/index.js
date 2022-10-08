let arr = [
    "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXR0YXJha2hhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1608942025318-1191eeade556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0YXJha2hhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHV0dGFyYWtoYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588305665522-1c6af1f69b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHV0dGFyYWtoYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1601622256416-d7f757f99eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHV0dGFyYWtoYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1623591999474-da7de6cdc29a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHV0dGFyYWtoYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1547453155-df6ad7a9e8d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnxfbmg1STN5OUxERXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1601821139990-9fc929db79ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8X25oNUkzeTlMREV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1575194354663-406748a8a4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8X25oNUkzeTlMREV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1573040770064-10a507df287e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTc2MDg4OHx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60",
    "https://images.unsplash.com/photo-1625973937402-2a4d12bff645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8X25oNUkzeTlMREV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626621326088-dda793924b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXR0YXJha2hhbmQlMjB0b3VyaXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1659874862799-91ac98446e15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0YXJha2hhbmQlMjB0b3VyaXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626189400883-bc147621e7ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHV0dGFyYWtoYW5kJTIwdG91cmlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626188638270-54b85a7deceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHV0dGFyYWtoYW5kJTIwdG91cmlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626621331169-5f34be280ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXR0YXJha2hhbmQlMjB0b3VyaXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1652730639092-67e6a6a892eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXR0YXJha2hhbmQlMjB0b3VyaXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1549811253-aed8c89e9f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXR0YXJha2hhbmQlMjB0b3VyaXNtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626189401135-f07931c8a42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1626189401112-eef570f02c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHV0dGFyYWtoYW5kJTIwdG91cmlzbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
]


let i=0;
let stopP;

    function start(){

    let changeTime = document.getElementById("changeT").value;
    if(changeTime==""){
        
        changeTime=1;
    }

 stopP = setInterval(()=>{
    if(i==arr.length){
        i=0;
    }
    else{
        document.getElementById("img").src = arr[i];
    i++;
    }
    console.log(i)
},changeTime*1000);
}

function pause(){
clearInterval(stopP);
console.log("pause",i)
}

function next(){
clearInterval(stopP);
    
    i++;
    console.log('stop:', i)
    if(i === arr.length){
        i = 0;
    }
    document.getElementById("img").src = arr[i];
}


function previous() {
clearInterval(stopP);
    
    i--;
    console.log('next:', i)
    if(i < 0){
        i = arr.length-1;
    }
    document.getElementById("img").src = arr[i];
}