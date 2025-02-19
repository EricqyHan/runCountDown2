const date = new Date()
// console.log(now);
let day = date.getDate();
console.log(date);
let month = date.getMonth() + 1;
let year = date.getFullYear();

document.querySelector("#todayDate").innerText = `${month}/${day}/${year}`

const endTimeCinnamonBun = new Date("2025-04-06T10:00:00")/1000
const diffDays = Math.round(Math.abs(()))


function setTimeCinnamon(){
    //hours left
    let elapsed = new Date() / 1000;
    let timeUntilCinnamonBunRun =  endTimeCinnamonBun - elapsed;
    let h = parseInt( timeUntilCinnamonBunRun / 3600 )
    let m = parseInt( timeUntilCinnamonBunRun / 60 ) % 60;
    let s = parseInt(timeUntilCinnamonBunRun % 60, 10);
    let result = `${h} hours ${m} minutes ${s} seconds`
    // document.querySelector("#cinnamonDays").innerHTML = totalSec;
    document.querySelector('#cinnamonHours').innerHTML = result;
    document.querySelector("#cinnamonDays").innerHTML = result
    setTimeout(setTimeCinnamon, 1000);


}

setTimeCinnamon()


const endSuperhero = new Date("2025-05-04T08:30:00")/1000
function setTimerSuper(){
    let elapsed = new Date() / 1000;
    let totalSec =  endSuperhero - elapsed;
    let h = parseInt( totalSec / 3600 )
    let m = parseInt( totalSec / 60 ) % 60;
    let s = parseInt(totalSec % 60, 10);
    let result = `${h} hours ${m}minutes ${s} seconds`
    document.querySelector('#superhero').innerHTML = result;
    setTimeout(setTimerSuper, 1000);
}

setTimerSuper()
