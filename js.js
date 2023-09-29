let btn = document.getElementById("btn");
let search = document.getElementById("search");
let tempt3 = document.getElementById("tempt");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");





  let myRequest = new XMLHttpRequest();
  let url = "https://api.openweathermap.org/data/2.5/weather?q=casablanca&appid=e60d273e00f0656e8eb50bad1a2dc55f";
  
  myRequest.open("GET", url);
  myRequest.send();

  myRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      console.log(data.weather[0]['id']);

      let weather = data.weather;
      let name = data.name;
      let tempt2 = data.main.temp;
      console.log(tempt2);

      tempt3.innerHTML = tempt2 +"°C";
      city.innerHTML =name;


      

      
    }
  }

  btn.onclick = () => {
    if(search.value === "")
    {
        alert("The Search is empty");
    }
    else
    {
        let myRequest = new XMLHttpRequest();
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&appid=e60d273e00f0656e8eb50bad1a2dc55f";  
        myRequest.open("GET", url);
        myRequest.send();
      
        myRequest.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            console.log(data.weather[0]['id']);
            console.log("wind :" +data.wind.speed)
      
            let weather = data.weather;
            let name = data.name;
            let tempt2 = data.main.temp;
            var windspeed = data.wind.speed;
            var h = data.main.humidity;
            console.log(tempt2);
            let Celisus = parseInt(tempt2 -273.15);

            tempt3.innerHTML = Celisus +"°C";
            city.innerHTML =name;
            wind.innerHTML = " "+windspeed +"Km/h";
            humidity.innerHTML = " "+h+"%";
      
            
            var container = document.querySelector(".content");
            var container2 = document.querySelector(".content3");

            container.classList.add("drope");
            container2.classList.add("fadeIn");
          }
        };
    }
  
  
  };