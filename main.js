(()=>{"use strict";const e=async function(e,t){const n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dbf592303e174c8d8d620709242601&q=${e}&days=3`,{mode:"cors"});return async function(e){const{weatherData:t,units:n}=e;return{units:n,location:{city:t.location.name,country:t.location.country},current:{date:(new Date).toLocaleDateString([],{hour:"numeric",minute:"numeric",second:"numeric",weekday:"long",year:"numeric",month:"short",day:"numeric"}),description:t.current.condition.text,temp:"",tempC:Math.round(t.current.temp_c),tempF:Math.round(t.current.temp_f),feelsLike:"",feelsLikeC:Math.round(t.current.feelslike_c),feelsLikeF:Math.round(t.current.feelslike_f),humidity:t.current.humidity,clouds:t.current.cloud,uv:t.current.uv,vis:"",visKm:t.current.vis_km,visMiles:t.current.vis_miles,windSpeed:"",windSpeedKph:t.current.wind_kph,windSpeedMph:t.current.wind_mph,windDirection:t.current.wind_dir,windDegree:t.current.wind_degree},forecast:[...t.forecast.forecastday]}}({weatherData:await n.json(),units:t})},t=(document.querySelector("main"),{renderApp:function(e,t){!function(e,t){let n,r,i;"imperial"==t&&(n="miles",r="mph",i="F"),"metric"==t&&(n="km",r="m/s",i="C"),"metric"==t&&(e.current.temp=e.current.tempC,e.current.feelsLike=e.current.feelsLikeC,e.current.vis=e.current.visKm,e.current.windSpeed=e.current.windSpeedKph),"imperial"==t&&(e.current.temp=e.current.tempF,e.current.feelsLike=e.current.feelsLikeF,e.current.vis=e.current.visMiles,e.current.windSpeed=e.current.windSpeedMph);const c=document.querySelector(".location-display"),a=document.querySelector(".date-display"),u=document.querySelector(".current-temp"),d=document.querySelector(".description"),s=document.querySelector(".feels-like"),o=document.querySelector(".wind-data"),l=document.querySelector(".humidity-data"),m=document.querySelector(".uv-data"),p=document.querySelector(".visibility-data"),y=document.querySelector(".cloud-data");c.innerHTML=`${e.location.city}, ${e.location.country}`,a.innerHTML=`${e.current.date}`,u.innerHTML=`${e.current.temp}°${i}`,d.innerHTML=`${e.current.description}`,s.innerHTML=`${e.current.feelsLike}°${i}`,o.innerHTML=`${e.current.windSpeed} ${n} ${e.current.windDirection}`,l.innerHTML=`${e.current.humidity}%`,m.innerHTML=`${e.current.uv}`,p.innerHTML=`${e.current.vis} ${n}`,y.innerHTML=`${e.current.clouds}%`}(e,t),function(e,t){const n=e.forecast,r=document.querySelector(".forecast");r.innerHTML="",n.forEach((e=>{let n,i;e.day.condition.code;const c=new Date(e.date),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][c.getDay(c)];"imperial"==t&&(n=Math.round(e.day.maxtemp_f),i=Math.round(e.day.mintemp_f)),"metric"==t&&(n=Math.round(e.day.maxtemp_c),i=Math.round(e.day.mintemp_c));const u=document.createElement("div"),d=document.createElement("h2"),s=document.createElement("h2"),o=document.createElement("h2");u.classList.add("forecast-item"),o.classList.add("light-blue"),d.innerHTML=a,s.innerHTML=n,o.innerHTML=i,u.appendChild(d),u.appendChild(s),u.appendChild(o),r.appendChild(u)}))}(e,t)}}),n=(()=>{const n=document.querySelector(".top-nav"),r=document.querySelector(".search-input"),i=document.querySelector(".settings-metric"),c=document.querySelector(".settings-imperial");async function a(n="Cincinnati",r="imperial"){const i=await e(n,r);t.renderApp(i,r)}return{load:a,searchHandler:function(){let e,t;n.addEventListener("click",(async n=>{n.target.classList.contains("submit")||n.target.parentElement.classList.contains("submit")?(n.preventDefault(),e=r.value,a(e,t)):n.target.classList.contains("settings-metric")?(t="metric",c.classList.remove("settings-active"),i.classList.add("settings-active"),a(e,t)):n.target.classList.contains("settings-imperial")&&(t="imperial",i.classList.remove("settings-active"),c.classList.add("settings-active"),a(e,t))}))}}})();n.load(),n.searchHandler()})();