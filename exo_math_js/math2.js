window.onload = function() {
    let result = 6;
    let result2 = 3;

    result * result2;

    let finalResult = result.toFixed(2);

    if (typeof finalResult === "string") {
        let finalNumber = parseFloat(finalResult);
        document.getElementById('output').textContent = finalNumber;
    }
}