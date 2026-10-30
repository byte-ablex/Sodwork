
let searchInput = document.getElementById("searchInput");

let searchEngine = document.getElementById("searchEngine");

let searchBtn = document.getElementById("searchBtn");


function searchWeb() {

    let word = searchInput.value;
    let engine = searchEngine.value;

    if (word === "") {
        alert("Please enter something!");
    }

    else if (engine === "google") {
        window.open("https://www.google.com/search?q=" + encodeURIComponent(word));
    }

    else if (engine === "duck") {
        window.open("https://duckduckgo.com/?q=" + encodeURIComponent(word));
    }

    else if (engine === "bing") {
        window.open("https://www.bing.com/search?q=" + encodeURIComponent(word));
    }
}


// When someone clicks the button
searchBtn.addEventListener("click", searchWeb);


// When someone presses Enter
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchWeb();
    }
});
