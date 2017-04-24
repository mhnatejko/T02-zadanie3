fechy = function(url, success, failure){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    
    xhr.onload = function(){
        if(xhr.status == 200) {
            success(xhr.responseText);
        }else{
            failure(new Error("Blad. Status HTML:" + xhr.status))
        };
    };
    xhr.onerror = function(e) {
        failure(new Error("Blad"));
    };
    xhr.send();
};



///////

button.addEventListener("click", function(e){
    fechy(
        "https://jsonplaceholder.typicode.com/users", function(data){
            console.log("Sukces");
            output.textContent = data;
        }, 
        function(err){
            console.log("Blad");
            console.log(err.message)
        })
}, false)