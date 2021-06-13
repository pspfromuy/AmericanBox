function ajax(){
    const http = new XMLHttpRequest();
    /*const url = 'login';*/
    var uname = document.getElementById("username");
    var pass = document.getElementById("password");

    http.onreadystatechange = function(){

        if(uname !== null && unmae !== '' && pass !== null && pass !== ''){
            alert("Bienvenido");
        }
        /*if(this.readyState == 4 && this.send == 200){
            console.log(this.responseText);
            alert("Bienvenido");*/
        }

    }
    /*http.open("GET", url);*/
    http.send();
}

document.getElementById("submit").addEventListener("click", function(){
    ajax();
});