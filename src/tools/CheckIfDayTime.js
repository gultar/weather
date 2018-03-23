export function checkIfDayTime(sunsetHour= 19, sunriseHour= 6){
  let isNightTime = false;
  let date = new Date();
  let time = date.getHours();
  //time = 23;
    if(time > sunsetHour || time < sunriseHour){ //
        isNightTime = true;
    }

  return isNightTime;
}
