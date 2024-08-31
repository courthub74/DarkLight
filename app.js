// Switch function
// const switchTheme = () => {
//     // Do the things
// }

// Query the Switch button
let switch_button = document.getElementById('switch_button');

// add event listener to button
switch_button.addEventListener('click', () => {
    console.log("Switch Background");
    // Get the Root Element
        // its already defined in the html element
    const rootElem = document.documentElement
    console.log(rootElem);
    // Get Screen Mode theme
    let screen_mode = rootElem.getAttribute('screen_mode');

    newTheme = (screen_mode === 'light') ? 'dark' : 'light'

    // Set the new HTML attribute
    rootElem.setAttribute('screen_mode', newTheme);

    // set localStorage for the screen mode to stay put
    localStorage.setItem('theme', newTheme);
});