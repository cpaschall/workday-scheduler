var containerDiv = $(".container");

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

var scheduleArray = ["","","","","","","","","",];

function renderSchedule(){
    containerDiv.append($("<h2>"))
    $("h2").text(moment().format("dddd, MMMM Do YYYY, h:mm a"))
    containerDiv.append($("<ul>"));
    for(var i = 0; i < scheduleArray.length; i++) {
        if (i >= 0 && i < 3) {
            $("ul").append($(`<li><span>${i+9}:00 AM</span><textarea id="text-${i}" data-time=${i}></textarea><button id="btn-${i}"><span class="emoji">💾</span></button></li>`));
            renderScheduleItems(i);
        }else if(i === 3) {
            $("ul").append($(`<li><span>${i+9}:00 PM</span><textarea id="text-${i}" data-time=${i}></textarea><button id="btn-${i}"><span class="emoji">💾</span></button></li>`));
            renderScheduleItems(i);
        }else if (i > 3 && i < 9) {
            $("ul").append($(`<li><span>${i-3}:00 PM</span><textarea id="text-${i}" data-time=${i}></textarea><button id="btn-${i}"><span class="emoji">💾</span></button></li>`));
            renderScheduleItems(i);
        }
    }
    currentTime() 
}

function renderScheduleItems(index) {
    var currText = $(`#text-${index}`);
    currText.text(scheduleArray[index]);
}

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function currentTime() {
    $("textarea").css("background-color", function(index) {
        if((index + 9) === parseInt(moment().format("H"))){
            return "#FC4F4F"
        } 
        if ((index + 9)> moment().format("H")){
            return "#80ED99"
        }
        if ((index + 9)< moment().format("H")){
            return "#E2DCD5"
        }   
    });
}

// WHEN I refresh the page
// THEN the saved events persist

function init() {
    var storedSchedule = JSON.parse(localStorage.getItem(moment().format("L")));
    if (storedSchedule !== null) {
        scheduleArray = storedSchedule;
    };
    renderSchedule();
    
}

function storeSchedule() {
    localStorage.setItem(moment().format("L"), JSON.stringify(scheduleArray))
}

init();

$("button").on("click", function(event){
    event.preventDefault();

    var saveBtn = event.target;
    var btnId = saveBtn.parentElement.id;

    for(var i = 0; i < 9; i++) {
        if (btnId === `btn-${i}`) {
            var scheduleText = $("textarea")[i].value;
            var index = $("textarea")[i].dataset.time;
            scheduleArray.splice(index, 1, scheduleText);
        }
        storeSchedule();
    }
})