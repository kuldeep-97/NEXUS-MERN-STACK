<!-- Event Listener -->

Events JavaScript ka woh feature hai jo user interactions (जैसे क्लिक, हॉवर, कीप्रेस) ya browser activities (जैसे पेज लोड, रिसाइज) ko handle karta hai.

If the user clicks a button on a webpage you might want to react to that action by displaying an information box.

Events is a function and perform action alson knows events triger so that console window reRender and show output 

"Events are browser actions that trigger JavaScript functions (handlers) to respond with some output or change in the UI."


"Events in JavaScript are actions or occurrences (like clicks, key presses, or form submissions) that happen in the browser. We can write functions—called event handlers—to respond when these events are triggered. These handlers can update the UI, log to the console, or perform any action when the event occurs."

🔁 Explanation:
Events are NOT functions, but they trigger functions (called event handlers or listeners).



When an event occurs, the browser does not re-render the console; instead, it runs the function attached to that event.

For example, clicking a button triggers a function that might log something to the console or update the screen.



JavaScript Events are actions or occurrences that happen in the browser, and you can respond to them using JavaScript.

Event listeneer is a fn that waits for a specific event to occur on html element and then execute a predefined fn (callback) in response

🔸 Common Examples of Events:
Event	Triggered When...
click	User clicks on an element
mouseover	User hovers over an element
keydown	User presses a key
submit	A form is submitted
load	Page finishes loading
change	Input value is 


"An event listener is a function in JavaScript that waits for a specific event (like a click, keypress, or form submission) to occur on an element, and then runs a block of code in response to that event."
 DOM updates, or other actions."
 
🔹 One-liner (Simplified):
"Event listener is used to detect user actions and run code when something happens on the webpage."

🔹 Definition (Hindi):
"Event Listener JavaScript ka ek function hota hai jo kisi specific event (jaise click ya key press) ke hone ka intezaar karta hai, aur jab wo event hota hai to turant koi action perform karta hai."




<!-- Mouse Event -->
1: click
2: dblclick
3: mouseover
4: mousemove

<!-- Keyboard Event -->

1: keydown
2: keyup

<!-- Event Object -->
1: event
2: event.target
3: event.type
4: event.key
5: event.clientX
6: event.clientY