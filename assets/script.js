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

var scheduleArray = []

function renderSchedule(){
    containerDiv.append($("<h2>"))
    $("h2").text(moment().format("dddd, MMMM Do YYYY, h:mm a"))
    containerDiv.append($("<ul>"));
    // var li = $("<li>").append($("<button>"))
    for(var i = 0; i < 9; i++) {
        // console.log(i);
        if (i >= 0 && i < 3) {
            $("ul").append($(`<li><span data-time="${i}">${i+9}:00 AM</span><textarea data-time=${i}></textarea><button id="btn-${i}"><span class="emoji">💾</span></button></li>`));
            // scheduleArray.push({i :  ""})
        }else if(i === 3) {
            $("ul").append($(`<li><span data-time="${i}">${i+9}:00 PM</span><textarea data-time=${i}"></textarea><button id="btn-${i}"><span class="emoji">💾</span></button></li>`));
        }else if (i > 3 && i < 9) {
            $("ul").append($(`<li><span data-time="${i}">${i-3}:00 PM</span><textarea data-time=${i}"></textarea><button id="btn-${i}"><span class="emoji">💾</span></button></li>`));
        }
    }
    currentTime()
}

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function currentTime() {
    $("textarea").css( "background-color", function( index ) {
        // console.log(index);
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
// var scheduleItems = {
//     nineAm: "",
//     tenAm: "",
//     elevenAm: "",
//     twelvePM: "",
//     onePm: "",
//     twoPm: "",
//     threePm: "",
//     fourPm: "",
//     fivePm: "",
// }




// localStorage.setItem(moment().format("L"), JSON.stringify(scheduleItems))

// var buttonEl = document.querySelectorAll("button");



// buttonEl.addEventListener("click", function(event){
//     console.log("test1")
//     event.preventDefult();
//     console.log(event.target.value)
//     // tar = event.target
//     // console.log($("textarea").value)
//     // scheduleItems.nineAm = message.value;
// })

// renderSchedule();


// $("button").on("click", function(event){
//     event.preventDefault();
//     console.log("test1");
//     console.log(event);
//     // scheduleItems["nineAm"] = message.value;
//     for(var i=0; i < Object.keys(scheduleItems).length; i++) {
//         var message = $("textarea")[i]
//         // Object.keys(scheduleItems)[i] = message.value;
//         Object.keys(scheduleItems).forEach(key)[i] = message.value;
//         console.log(Object.keys(scheduleItems)[i])
//     }
// })

function init() {
    var storedSchedule = JSON.parse(localStorage.getItem(moment().format("L")));
    if (storedSchedule !== null) {
        scheduleArray = storedSchedule;
    }
    renderSchedule();
}

function storeSchedule() {
    localStorage.setItem(moment().format("L"), JSON.stringify(scheduleArray))
}

$("button").on("click", function(event){
    event.preventDefault();
    console.log(event);

    var saveBtn = event.target;
    var btnId = saveBtn.parentElement.id;
    console.log($("textarea")[0].dataset.time);
    //  i need to change i to start at 0
    for(var i = 0; i < 9; i++) {
        if (btnId === `btn-${i}`) {
            if ($("textarea")[i].value === "") {
                return;
            } else {
                var scheduleText = scheduleArray.push($("textarea")[i].value);
                var index = $("textarea")[i].dataset.time;
                scheduleArray.splice(index, 1, scheduleText);
            }
            storeSchedule();
            // renderSchedule():
        }
    }
})


init();
