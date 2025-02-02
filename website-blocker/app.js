// Get The URL
const site = window.location.hostname

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.querySelector("html").append(custom_element)
}

// Initialize the site list from localStorage or set default
let site_list = JSON.parse(localStorage.getItem('blockedSites')) || [
    "google.com", "translate.google.com", "www.google.com",
    "javascript.info", "www.javascript.info",
    "wikipedia.org", "www.wikipedia.org",
    "youtube.com", "www.youtube.com",
    "apple.com", "www.apple.com",
    "chatgpt.com", "www.chatgpt.com"
];

// Function to add a site to the block list
function addSiteToBlockList(site) {
    if (!site_list.includes(site)) {
        site_list.push(site);
        localStorage.setItem('blockedSites', JSON.stringify(site_list));
        alert(`${site} has been added to the block list.`);
    } else {
        alert(`${site} is already in the block list.`);
    }
}

// Example usage of adding a site to the block list
// You can replace this with actual user input logic
// addSiteToBlockList("example.com");

// Check Current Site With The Sites In The List
if (!site_list.includes(site)) {
    // Remove All Lines From HTML Tag
    document.querySelector("html").innerHTML = ""

    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Aboreto");

        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");

        * {
            user-select: none !important;
            pointer-events: none !important;
        }

        html {
            background-image:linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%); !important;
        }

        #access-denied {
         font-family: "Aboreto";
            display: block !important;
            color: #fff;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 70px;
            font-weight: bold;
            z-index: 999999999999;
        }
    `)

    /* ---------------------- */
    /* Create Custom Elements */
    /* ---------------------- */
    Create_Custom_Element(
        "div",
        "id",
        "access-denied",
        `</i> Access Denied ${site} for you🤣`
    )
    // alert(`Access to ${site} is blocked. Don't you have an exam to prepare for?`)
}

// Example: Adding a site dynamically by user input
document.querySelector("#add-site-button").addEventListener("click", () => {
    const newSite = prompt("Enter the site to block:");
    if (newSite) {
        addSiteToBlockList(newSite);
    }
});
