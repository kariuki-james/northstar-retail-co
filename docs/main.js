// Simulates connecting to the database
async function fetchOrders() {
    try {
        const response = await fetch('orders.json');
        const data = await response.json();
        return data.orders;
    } catch (error) {
        console.error("Database connection error:", error);
        return [];
    }
}

// UI helper to display messages
function showResult(message, isSuccess) {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.className = isSuccess ? 'success' : 'error';
    resultDiv.innerHTML = message;
}
