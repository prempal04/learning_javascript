// --Browser Events

// events, respond, data stored, stop, lifecycle, event bubbling, event capturing

// har ek event ke sath ek action attached hota hai 

// events are the announcements done by the browser to the javascript code that something has happened

// to check which events are running we do:
// monitorEvents(document);

//to unmonitor the events we do:
// unmonitorEvents(document);

// --Event target

// it is a type of object that can receive events and may have listeners for them. event listner is applied to the event target

// for eg if a take a button in a document , click is an event and the event target is the button itself, and the action performed is written in the event listener

// event listner pr hum yeh define krte hai ki is event targer pr agar yeh event hua to kya action perform hoga



// --Event listener

function changeText() {
    let fpara = document.getElementById('fhead');
    fpara.textContent = "Love & Peace";
}

let fpara = document.getElementById('fhead');

fpara.addEventListener('click', changeText);

// here after clicking the fpara element, the changeText function will be called which will change the text content of the fpara element to "Love & Peace"


fpara.removeEventListener('click', changeText); 

// to remove event listner we use removeEventListener method, it takes the same parameters as addEventListener, so we can remove the event listener that we added before