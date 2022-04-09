var currentDayE1 = $("#currentDay");



function displayTime() {
    var timeDate = moment().format('dddd, MMMM Do');
    currentDayE1.text(timeDate);

}








setInterval(displayTime, 1000);