# Array Web Components

Welcome to my Web Component Project

## How to get the project spinning

Open up the project on a vscode and right click on `test_page.html` and left click on "Open with Live Server"

## Assumed Features

Within the credit table, other than displaying the data provided, it felt odd to me that this component would have two unusable buttons. So I made some assumptions and added features where I thought made sense.

<strong>Feature 1.</strong> "Show All" Lock History

1. It should have the functionality to show all data
2. It should reflect different text when the whole history is being shown, as such to offer user to minimize
3. It should minimize back to showing 5 items when #2 is clicked
4. It should be disabled when less than a certain amount (I chose 5)
5. Hiding and showing entire lock history (the other feature) should hide/show the last selected (show all) state

<strong>Feature 2.</strong> Locked/Unlocked event feature

1. The event where clicking the lock/unlock button should post a new lock history to the server
2. The button should toggle between lock <--> unlock
3. Table should reflect the event after it passes through by refetching data on post/put event success

<em>#1 and #3 are mocked in this project since there's no server to perform a put/post request.</em>

<strong>Feature 3.</strong> Collapsible items

1. Items wrapped around the collapsible component should hide from view

### Personal Note

Some things I'm still unsure about:

1. I'm still unsure of which features needed were actually requested from this task, other than to display data from json. There were many aspects in the html content that had signs that it was missing functionality. But I was just told to simulate the demo, and that no extra styling was necessary. In order to add the featuers I thought made sense, I would have to go beyond the demo and some styling needed to be done, which led me to believe that the features weren't part of the task scope. I felt that it doensn't hurt to add functionality so I went ahead anyways.

<em>There's a note in the objectives that quotes: "Don't worry about making any other elements on the page dynamic." Unfortunately, I was still confused because I still wasn't sure what qualifies the "lock history" table as functional with real data. To me, making the entire thing dynamic was part of scope.</em>

2. I'm still unsure about the best practices in Web Components:
   - Whether it was supposed to be broken down into parts, or be kept in one giant file. I felt broken down parts is more maintainable and easier to understand.
   - Whether to use templating strings for static html (some html content was just huge and I wanted to abstract it away) or migrate them via web component class based approach. Neither seemed like a "wrong answer" so I went for the cleanest approach between the two.

Other than that, to conclude, no other dependencies or libraries were used, so I have nothing else to add! Please do let me know if there are any discrepencies! I would love to have some feedback, and learn a little bit more about what makes a Web Component!

## License

[MIT](https://choosealicense.com/licenses/mit/)
