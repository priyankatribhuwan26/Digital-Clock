function digitalClock(){
    var d = new Date() + '';
   
    var minutes = d.getMinutes() +'';
    var seconds = d.getSeconds() + '';
    var day = d.getDay();
    if(hour.length < 2){
        hour = '0' + hour
    }
    if(minutes.length < 2){
        minutes = '0' + minutes
    }
    if(seconds.length < 2){
        seconds = '0' + seconds
    }
var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];    
var clock = weekDays[day] + '' + hour + ':' + minutes + ':' + seconds;
document.getElementById('clock').innerHTML = clock;
console.log(clock);
}
digitalClock();
setInterval(digitalClock, 1000);