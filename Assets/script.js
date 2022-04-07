var currentDayE1 = $("#currentDay");



function displayTime(){
    var timeDate = moment().format("dddd, MMMM Do");
    currentDayE1.text(timeDate);
    console.log(timeDate);
}











// var date = moment();
// $("currentDay").text(date.format("dddd", "MMMM Do"));
