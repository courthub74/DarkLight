// Switch function
// const switchTheme = () => {
//     // Do the things
// }

// Query the Switch button
let switch_button = document.getElementById('switch_button');

// Query the Moon and Sun
let nite_logo = document.getElementById('nite');
let day_logo = document.getElementById('day'); 

// add event listener to button
switch_button.addEventListener('click', () => {
    console.log("Switch Background");
    // Toggle the Sun on
    day_logo.classList.toggle('appear');
    // Toggle the Moon off
    nite_logo.classList.toggle('dissapear');
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