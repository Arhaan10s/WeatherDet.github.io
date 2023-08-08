const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_val =document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
const datahide =document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value; 
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search :(`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=973ce99008b9f2d8202aaf41b03e1002`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];  //creating array to store API and fetch with the help of indexing
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            //symbols for the weather
            if(tempMood == "Clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style= 'color : #eccc68'></i>"
            }
            else if(tempMood == "Clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style= 'color : #f1f2f6'></i>"
            }
            else if(tempMood == "Rain") 
            {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style= 'color : #a4b0be'></i>"
            }
            else
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style= 'color : #eccc68'></i>"
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `Plz enter the city name correctly :(`;
            datahide.classList.add('data_hide');
        }
    }
}

const getCurrentDay =() =>{
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Teusday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    let day = document.getElementById('day');

    day.innerText= days;
};
getCurrentDay();

const getCurrentTime = () =>{
    var months =[
        "jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "jun",
        "jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth()+1];
    var date =now.getDate();
    let today_data = document.getElementById('today_data');
    today_data.innerText=  `${date}   ${month}`;
};
getCurrentTime();

submitBtn.addEventListener('click',getInfo);