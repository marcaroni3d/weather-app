(()=>{"use strict";const e=async function(e,t){const r=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dbf592303e174c8d8d620709242601&q=${e}&days=3`,{mode:"cors"});return async function(e){const{weatherData:t,units:r}=e;return{units:r,location:{city:t.location.name,country:t.location.country},current:{time:t.location.localtime,description:t.current.condition.text,temp:"",tempC:Math.round(t.current.temp_c),tempF:Math.round(t.current.temp_f),feelsLike:"",feelsLikeC:Math.round(t.current.feelslike_c),feelsLikeF:Math.round(t.current.feelslike_f),humidity:t.current.humidity,clouds:t.current.cloud,uv:t.current.uv,vis:"",visKm:t.current.vis_km,visMiles:t.current.vis_miles,windSpeed:"",windSpeedKph:t.current.wind_kph,windSpeedMph:t.current.wind_mph,windDirection:t.current.wind_dir,windDegree:t.current.wind_degree},forecast:[...t.forecast.forecastday]}}({weatherData:await r.json(),units:t})},t=(document.querySelector("main"),{renderApp:function(e,t){!function(e,t){let r,n,i;"imperial"==t&&(r="miles",n="mph",i="F"),"metric"==t&&(r="km",n="m/s",i="C"),"metric"==t&&(e.current.temp=e.current.tempC,e.current.feelsLike=e.current.feelsLikeC,e.current.vis=e.current.visKm,e.current.windSpeed=e.current.windSpeedKph),"imperial"==t&&(e.current.temp=e.current.tempF,e.current.feelsLike=e.current.feelsLikeF,e.current.vis=e.current.visMiles,e.current.windSpeed=e.current.windSpeedMph);const c=document.querySelector(".location-display"),u=document.querySelector(".time-display"),s=document.querySelector(".current-temp"),o=document.querySelector(".description"),a=document.querySelector(".feels-like"),d=document.querySelector(".wind-data"),l=document.querySelector(".humidity-data"),m=document.querySelector(".uv-data"),p=document.querySelector(".visibility-data"),y=document.querySelector(".cloud-data");c.innerHTML=`${e.location.city}, ${e.location.country}`,u.innerHTML=`${e.current.time}`,s.innerHTML=`${e.current.temp}°${i}`,o.innerHTML=`${e.current.description}`,a.innerHTML=`${e.current.feelsLike}°${i}`,d.innerHTML=`${e.current.windSpeed} ${r} ${e.current.windDirection}`,l.innerHTML=`${e.current.humidity}%`,m.innerHTML=`${e.current.uv}`,p.innerHTML=`${e.current.vis} ${r}`,y.innerHTML=`${e.current.clouds}%`}(e,t)}}),r=(()=>{const r=document.querySelector(".top-nav"),n=document.querySelector(".search-input"),i=document.querySelector(".settings-metric"),c=document.querySelector(".settings-imperial");async function u(r="Cincinnati",n="imperial"){const i=await e(r,n);t.renderApp(i,n)}return{load:u,searchHandler:function(){let e,t;r.addEventListener("click",(async r=>{r.target.classList.contains("submit")||r.target.parentElement.classList.contains("submit")?(r.preventDefault(),e=n.value,u(e,t)):r.target.classList.contains("settings-metric")?(t="metric",c.classList.remove("settings-active"),i.classList.add("settings-active"),u(e,t)):r.target.classList.contains("settings-imperial")&&(t="imperial",i.classList.remove("settings-active"),c.classList.add("settings-active"),u(e,t))}))}}})();r.load(),r.searchHandler()})();