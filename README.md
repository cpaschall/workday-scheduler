# Workday-Scheduler

## Project Goal

To create a simple schedule that has a "To-Do" element for each business hour (9am-5pm). A user can enter and save a To-Do item under each hour and the data in that item will not be lost when the page is refreshed.  The current Date and Time will show at the top of the page and each set of To-Do items will be associated with the date they are created on.

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Final Product
[Workday Scheduler](https://cpaschall.github.io/workday-scheduler)

![Work Scheduler in Action](./assets/images/scheduler.gif)