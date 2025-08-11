## How to run:

1. Navigate to this project directory
2. Run `npm install` to install dependencies
3. Run `npm start` to initialize and connect to a node server with your default browser

## What you like about your implementation?
- I liked the way I defined to generate the width of each timebar, using the setDayWith state I can also set this width according to the specified zoom, which made the implementation much easier.

## What you would change if you were going to do it again?
- If I had more time, I'd add more features. First, I'd create a dynamic day and month label to display on the timeline, providing a better user experience. I'd make it dynamic, displaying fewer or more days depending on the zoom, up to the maximum zoom, which would display exactly every day of that month. I'd make color differentiation more distinct, and also create a hover modal that provides more information about each task when hovered over.

## How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
- I just searched for some generic timelines to have a guide.

## How you would test this if you had more time.
- I would test if the zoom is applying correctly when clicking zoom in or zoom out, checking in the DOM if each element is getting the correct size and filling exactly where it should in the timeline grid.