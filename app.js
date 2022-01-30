document.getElementById("date").innerHTML =moment().format('MMMM Do YYYY');

function getInfo(){
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

}

