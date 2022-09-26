let oraAtuale = new Date()

document.getElementById('screen').innerHTML=oraAtuale;

let hours= oraAtuale.getHours()
document.getElementById('Hours').innerHTML=hours;

let minutes= oraAtuale.getMinutes()
document.getElementById('Minutes').innerHTML=minutes;

let seconds= oraAtuale.getSeconds()
document.getElementById('seconds').innerHTML=seconds;


let europeDAte= (oraAtuale.getDay())+'/'+(oraAtuale.getMonth())+'/'+(oraAtuale.getFullYear())


document.getElementById('europe').innerHTML=europeDAte;









