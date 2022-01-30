document.getElementById("date").innerHTML =moment().format('MMMM Do YYYY');

function getInfo(){
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

}

fetch('api.openweathermap.org/data/2.5/forecast?q=london&appid=7d8f81beb3d14e46fe29586b648eabef')
.then(Response => Response.json())
.then(data =>{
    for (let index = 0; index < 5; index++) {
    
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min )+ "°";
        
    }
    for (let index = 0; index < 5; index++) {
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max )+ "°";
        
    }
   
    for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
    }
    console.log(data)


})