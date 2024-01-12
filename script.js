const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

/*
This is what happened. You stored a reference to your <img> element in myImage. 
Next, you made its onclick event handler property equal to a function with no name 
(an "anonymous" function). So every time this element is clicked:
- The code retrieves the value of the image's src attribute.
- The code uses a conditional to check if the src value is equal to the path of the original image:
    > If it is, the code changes the src value to the path of the second image, 
 forcing the other image to be loaded inside the <img> element.
    > If it isn't (meaning it must already have changed), the src value swaps back to the original image path, 
    to the original state.
 */

let myButton = document.querySelector("button");

myButton.onclick = () => {
    setUserName();
  };
// When clicked, setUserName() runs. This allows the user to enter a different name by pressing the button.

let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName(); //If myName has no value, run setUserName() again from the start. 
    //If it does have a value (if the above statement is not true), then store the value in localStorage 
    //and set it as the heading's text.
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

/*
The setUserName() function contains a prompt() function, which displays a dialog box, similar to alert(). 
This prompt() function does more than alert(), asking the user to enter data, and storing it in a variable 
after the user clicks OK. In this case, we are asking the user to enter a name. 
Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. 
We use localStorage's setItem() function to create and store a data item called 'name', 
setting its value to the myName variable which contains the user's entry for the name. 
Finally, we set the textContent of the heading to a string, plus the user's newly stored name.
*/

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
/* We could call this initialization code, as it structures the app when it first loads.
This first line of this block uses the negation operator (logical NOT, represented by the !) 
to check whether the name data exists. If not, the setUserName() function runs to create it. 
If it exists (that is, the user set a user name during a previous visit), 
we retrieve the stored name using getItem() and set the textContent of the heading to a string, 
plus the user's name, as we did inside setUserName().*/

// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

/*The heading text changed to Hello world! using JavaScript. 
You did this by using a function called querySelector() to grab a reference to your heading, 
and then store it in a variable called myHeading. 
This is similar to what we did using CSS selectors. When you want to do something to an element, 
you need to select it first. 
Following that, the code set the value of the myHeading variable's textContent property 
(which represents the content of the heading) to Hello world!*/

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//     alert("Yay, I love chocolate ice cream!");
// } else {
//     alert("Awwww, but chocolate is my favorite…");
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

/* Events: Real interactivity on a website requires event handlers. 
These are code structures that listen for activity in the browser, and run code in response. 
The most obvious example is handling the click event, which is fired by the browser when you click on 
something with your mouse.*/
// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

/*The function we just passed to addEventListener() here is called an anonymous function, 
because it doesn't have a name. 
There's an alternative way of writing anonymous functions, which we call an arrow function. 
An arrow function uses () => instead of function (): */

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });