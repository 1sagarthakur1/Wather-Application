function currentlocAPI(lat,lon){
    var currloapi = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=ac5b2a0bcc4a4909b301ef2f8a9f903d&include=minutely`
    // console.log(currloapi)

    async function currentlocation(){
        try{
            let current = await fetch(currloapi);

            let CLocT = await current.json()

            console.log(CLocT.data[0].city_name)

            forcurruntlocation(CLocT.data[0].city_name)
        }
        catch(err){
            console.log(err)
        }
    }

    currentlocation()
}

    function getLocationWeather() {
        navigator.geolocation.getCurrentPosition(success);
        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            currentlocAPI(latitude,longitude)
            console.log(latitude);
            console.log(longitude);
        }
    }
    getLocationWeather() 

//  ________________________________________________________________________   

function forcurruntlocation(inputvalue){



var firsturl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${inputvalue}&key=ac5b2a0bcc4a4909b301ef2f8a9f903d`;
var secondurl = `https://api.weatherapi.com/v1/forecast.json?key=4effc6f009a24240a08155906222705&q=${inputvalue}&days=10&aqi=no&alerts=no`
    // console.log(secondurl)
    // console.log(firsturl)
    async function getdata(){
        try{
            let res2 = await fetch(secondurl);
            let SData = await res2.json();
            
            let res = await fetch(firsturl)
            let FData = await res.json();

            console.log(FData);
            // console.log(SData)

            var cityname = (SData.location.name);
            document.querySelector("#naam").append(SData.location.name);
            document.querySelector("#country").append(SData.location.country);
            document.querySelector("#Sta").append(SData.location.region);
            document.querySelector("#Con").append(SData.location.tz_id);
            document.querySelector("#Timval").append(SData.location.localtime);
            document.querySelector("#Tem_C").append(Math.floor(SData.current.temp_c));
            document.querySelector("#Tem_F").append(SData.current.temp_f);
            document.querySelector("#wind_va").append(SData.current.wind_dir);
            document.querySelector("#wind_spe").append(SData.current.wind_kph);
            document.querySelector("#cloud").append("Cloud : "+SData.current.cloud+"%")
            var imag = document.createElement("img")
                imag.setAttribute("src",SData.current.condition.icon)
                imag.setAttribute("id","imag")
                document.querySelector("#img").append(imag);
            document.querySelector("#hud_valu").append(SData.current.humidity+"%");
            document.querySelector("#F_tem").append(+SData.current.feelslike_c+"C");
            let = iframe = document.getElementById("gmap_canvas");
                  iframe.src = `https://maps.google.com/maps?q=${cityname}&t=&z=13&ie=UTF8&iwloc=&output=embed`
            var array = FData.data;
                console.log(array)
            for(let i=0;i<10;i++){
                var for10day = document.createElement("div")
                    for10day.setAttribute("class","I10D")
                    // var I10D = (array[i].weather.ico)
                let forW = document.createElement("p");
                    forW.innerText=("Date : "+array[i].datetime);
                    forW.setAttribute("class","forW");

                let MXT10D = document.createElement("p");
                    MXT10D.innerText=("Max temp : "+array[i].max_temp);
                    MXT10D.setAttribute("class","MX10D");

                let MINT10D = document.createElement("p");
                    MINT10D.innerText = ("Min temp : "+array[i].min_temp);
                    MINT10D.setAttribute("class","MINT10D");

                let TEM10D = document.createElement("p");
                    TEM10D.innerText = ("Temp : "+array[i].temp);
                    TEM10D.setAttribute("class","TEM10D");

                let DE10D = document.createElement("p");
                    DE10D.innerText = (array[i].weather.description);
                    DE10D.setAttribute("class","DE10D")
                
                let danda = document.createElement("div")
                    danda.setAttribute("class","danda")
                
                for10day.append(forW,MXT10D,MINT10D,TEM10D,DE10D,danda);
                document.querySelector("#fomECt").append(for10day)
            }
        }
        catch(err){
            console.log(err)
        }
    }
    getdata()
}     
    
// // ---------------------------------------------------------------------------------------
document.querySelector("#form").addEventListener("submit",forwather);
function forwather(){
    event.preventDefault();

// // ______________________________________________________________
    var Bigcontai = document.querySelector("#naam");
        Bigcontai.innerHTML=null
    var country_code = document.querySelector("#country");
        country_code.innerHTML=null
    var sta=document.querySelector("#Sta");
        sta.innerHTML=null
    var con=document.querySelector("#Con");
        con.innerHTML=null
    var Timval=document.querySelector("#Timval");
        Timval.innerHTML=null
    var Tem_c =document.querySelector("#Tem_C");
        Tem_c.innerHTML=null
    var Tem_f=document.querySelector("#Tem_F");
        Tem_f.innerHTML=null
    var wind_va=document.querySelector("#wind_va");
        wind_va.innerHTML=null
    var wind_spe=document.querySelector("#wind_spe");
        wind_spe.innerHTML=null
    var cloud=document.querySelector("#cloud");
        cloud.innerHTML=null
    var hud_valu=document.querySelector("#hud_valu")
        hud_valu.innerHTML=null
    var f_tem=document.querySelector("#F_tem");
        f_tem.innerHTML=null
    var img=document.querySelector("#img");
        img.innerHTML=null
    var fomECT=document.querySelector("#fomECt");
        fomECT.innerHTML=null
// // ______________________________________________________________________

    var input = document.querySelector("#Gname").value;
    // var input = `Bhopal`;
    var firsturl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${input}&key=ac5b2a0bcc4a4909b301ef2f8a9f903d`;
    var secondurl = `https://api.weatherapi.com/v1/forecast.json?key=4effc6f009a24240a08155906222705&q=${input}&days=10&aqi=no&alerts=no`
    // console.log(secondurl)
    // console.log(firsturl)
    async function getdata(){
        try{
            let res2 = await fetch(secondurl);
            let SData = await res2.json();
            
            let res = await fetch(firsturl)
            let FData = await res.json();

            console.log(FData);
            // console.log(SData)

            var cityname = (SData.location.name);
            document.querySelector("#naam").append(SData.location.name);
            document.querySelector("#country").append(SData.location.country);
            document.querySelector("#Sta").append(SData.location.region);
            document.querySelector("#Con").append(SData.location.tz_id);
            document.querySelector("#Timval").append(SData.location.localtime);
            document.querySelector("#Tem_C").append(Math.floor(SData.current.temp_c));
            document.querySelector("#Tem_F").append(SData.current.temp_f);
            document.querySelector("#wind_va").append(SData.current.wind_dir);
            document.querySelector("#wind_spe").append(SData.current.wind_kph);
            document.querySelector("#cloud").append("Cloud : "+SData.current.cloud+"%")
            var imag = document.createElement("img")
                imag.setAttribute("src",SData.current.condition.icon)
                imag.setAttribute("id","imag")
                document.querySelector("#img").append(imag);
            document.querySelector("#hud_valu").append(SData.current.humidity+"%");
            document.querySelector("#F_tem").append(+SData.current.feelslike_c+"C");
            let = iframe = document.getElementById("gmap_canvas");
                  iframe.src = `https://maps.google.com/maps?q=${cityname}&t=&z=13&ie=UTF8&iwloc=&output=embed`
            var array = FData.data;
                console.log(array)
            for(let i=0;i<10;i++){
                var for10day = document.createElement("div")
                    for10day.setAttribute("class","I10D")
                    // var I10D = (array[i].weather.ico)
                let forW = document.createElement("p");
                    forW.innerText=("Date : "+array[i].datetime);
                    forW.setAttribute("class","forW");

                let MXT10D = document.createElement("p");
                    MXT10D.innerText=("Max temp : "+array[i].max_temp);
                    MXT10D.setAttribute("class","MX10D");

                let MINT10D = document.createElement("p");
                    MINT10D.innerText = ("Min temp : "+array[i].min_temp);
                    MINT10D.setAttribute("class","MINT10D");

                let TEM10D = document.createElement("p");
                    TEM10D.innerText = ("Temp : "+array[i].temp);
                    TEM10D.setAttribute("class","TEM10D");

                let DE10D = document.createElement("p");
                    DE10D.innerText = (array[i].weather.description);
                    DE10D.setAttribute("class","DE10D")
                
                let danda = document.createElement("div")
                    danda.setAttribute("class","danda")
                
                for10day.append(forW,MXT10D,MINT10D,TEM10D,DE10D,danda);
                document.querySelector("#fomECt").append(for10day)
            }
        }
        catch(err){
            console.log(err)
        }
    }
    getdata()
}