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
    // // Toggle the Sun on
    // day_logo.classList.toggle('appear');
    // // Toggle the Moon off
    // nite_logo.classList.toggle('dissapear');
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

    // If screenmode is light then set button to the moon
    // create a variable and set it to the conditional like above
    // buttonLogo = (screen_mode === 'light') ? 'dark' : 'light'

    // Set the HTML attribute to the button logo (appends the two)
    // nite_logo = document.documentElement
    // console.log(nite_logo);
    // set the class of the logo based on the html attribute
    // nite_logo.setAttribute('screen_mode', buttonLogo);
    // conditional for logos
});