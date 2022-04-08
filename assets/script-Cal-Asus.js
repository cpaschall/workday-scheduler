var containerDiv = $(".container");
// var olCreate = $("<ol>");
// var olEl = $("ol");
var liCreate = $("<li><button></button></li>");
var liEl = $("li");
var labelCreate = $("<label>");
var labelEl =$("label");
var textCreate = $("<textarea>");
var textEL = $("textarea")
var btnCreate = $("<button>")
var btnEl = $("button")

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours


function renderSchedule(){
    containerDiv.append($("<h2>"))
    $("h2").text(moment().format("dddd, MMMM Do YYYY, h:mm a"))
    containerDiv.append($("<ul>"));
    // var li = $("<li>").append($("<button>"))
    for(var i = 0; i < 24; i++) {
        // console.log(i);
        if (i > 8 && i < 12) {
            $("ul").append($(`<li><span data-time="${i}">${i}:00 AM</span><textarea data-text="${i}"></textarea><button><span class="emoji">💾</span></button></li>`));
        }else if(i === 12) {
            $("ul").append($(`<li><span data-time="${i}">${i}:00 PM</span><textarea data-text="${i}"></textarea><button><span class="emoji">💾</span></button></li>`));
        }else if (i > 12 && i < 18) {
            $("ul").append($(`<li><span data-time="${i}">${i-12}:00 PM</span><textarea data-text="${i}"></textarea><button><span class="emoji">💾</span></button></li>`));
        }
    }
    currentTime()
}

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function currentTime() {
    $("textarea").css( "background-color", function( index ) {
        console.log(index);
        if((index + 9) === parseInt(moment().format("H"))){
            return "green"
        } 
        if ((index + 9)> moment().format("H")){
            return "blue"
        }
        if ((index + 9)< moment().format("H")){
            return "grey"
        }   
    });
}

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// function init() {
//     var storedItems = JSON.parse(localStorage.getItem(moment().format("L")))
// }
// todaysItems = []

// function storeItems() {
    
//     for(var i = 9; i < 18; i++) {
//         todaysItems += {"$("span").data().time" : "$("textarea").data().text"}
//     }

    
//     localStorage.setItem(moment().format("L"), JSON.stringify());
    
// }

// btnEl.on("click", function() {

// })

// https://stackoverflow.com/questions/7892446/how-to-save-to-localstorage-from-textarea
// https://blog.logrocket.com/localstorage-javascript-complete-guide/

// WHEN I refresh the page
// THEN the saved events persist
$("button").on("click", function(event){
    event.preventDefult();
    tar = event.target
    console.log($("textarea").value)
})

renderSchedule();