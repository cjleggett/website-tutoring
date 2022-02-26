window.addEventListener('DOMContentLoaded', () => {
    // Get title element
    let title = document.getElementById("title");
    
    // Get button elements
    let red_button = document.getElementById("redbutton");
    let green_button = document.getElementById("greenbutton");

    // Change title color when buttons clicked
    red_button.addEventListener("click", () => {
        title.style.color = "red";
    })
    green_button.addEventListener("click", () => {
        title.style.color = "green";
    })


    // Get clicker button
    let button = document.getElementById("clicker");
    let clicks = 0;

    // get our paragraph attribute
    let click_count = document.getElementById("click_count");

    // Update clicks variable when button clicked
    button.addEventListener("click", () => {
        clicks ++;
        click_count.innerHTML = `Number of clicks: ${clicks}`;
    })

    

    
})


