var currentDayE1 = $("#currentDay");



function displayTime() {
    var timeDate = moment().format('dddd, MMMM Do');
    currentDayE1.text(timeDate);

}
$(document).ready(function(){
    tableColor()
    displaySaved()
})

currentDayE1.text(currentTime)
for (i=9; i<17; i++){
    $('#b'+i).click(function(){
        var event =($("#"+this.id.slice(1)-(9)).val())
        if (event!=""){
            var q=localStorage.length
            localStorage.setItem(q+1,event+this.id.slice(1))
        }
        else return
    })
}
function tableColor(){
    var input =[]
    for (i=0; i<8; i++){
        input[i]=1
    }
}
var currentTime = moment().format("HH");
for (i=9; i<17; i++){
    if (i<currentTime){
        $("#"+i).classList.add("past")
    }
    else{
        $("#"+i).classList.add("future")
    }
}

function displaySaved() {
    var id=[]
    letters=[]
   for (i=1;i<localStorage.length+1; i++){
      thestring=localStorage.getItem(i)
      id[i-1] = thestring.replace( /^\D+/g, '')
      letters[i-1]=thestring.replace(/\d+/g, '')
   }
}

setInterval(displayTime, 1000);