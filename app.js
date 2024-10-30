document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value.trim();
    let url = "superheroes.php";
    
    // Append query if a specific superhero name or alias is provided
    if (query) {
        url += `?query=${encodeURIComponent(query)}`;
    }

    // Fetch data from superheroes.php
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching superhero data:", error);
            document.getElementById("result").innerHTML = "Error fetching data.";
        });
});
