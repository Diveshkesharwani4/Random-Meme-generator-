document.getElementById("subscribeBtn").addEventListener("click", function () {
    const value = document.getElementById("userInput").value.trim();

    if (value === "") {
        alert("Input empty hai");
    } else {
        alert("Subscribed with: " + value);
    }
});