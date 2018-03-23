export function checkIfDayTime(sunsetHour= 19, sunriseHour= 6){
  let isNightTime = false;
  let date = new Date();
  let time = date.getHours();
  //time = 8;
    if(time > sunsetHour || time < sunriseHour){ //
        isNightTime = true;
    }

  return isNightTime;
}
