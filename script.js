
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const headlines = [
        { title: "Breaking: Market Hits New Highs!", link: "https://www.example.com" },
        { title: "Sports: Bangladesh Wins!", link: "https://www.example.com" },
        { title: "Weather: Rain Expected Tomorrow.", link: "https://www.example.com" }
    ];

    const newsList = document.getElementById("news-list");
    headlines.forEach(headline => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${headline.link}" target="_blank">${headline.title}</a>`;
        newsList.appendChild(li);
    });
});
