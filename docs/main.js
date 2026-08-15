// Simulates connecting to the database
async function fetchOrders() {
  try {
    const response = await fetch("orders.json");
    const data = await response.json();
    return data.orders;
  } catch (error) {
    console.error("Database connection error:", error);
    return [];
  }
}

// UI helper to display messages
function showResult(message, isSuccess) {
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.className = isSuccess ? "success" : "error";
  resultDiv.innerHTML = message;
}
// Logic for returns.html
const returnForm = document.getElementById("returnForm");
if (returnForm) {
  returnForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputId = document
      .getElementById("returnOrderId")
      .value.trim()
      .toUpperCase();

    const orders = await fetchOrders();
    const order = orders.find((o) => o.id === inputId);

    if (order) {
      if (order.eligibleForReturn) {
        showResult(
          `<strong>Success!</strong> A return label for your ${order.item} has been sent to ${order.email}. Your order status in our database is now updated to "Return Pending".`,
          true,
        );
      } else {
        showResult(
          `Sorry, the item <strong>${order.item}</strong> is past its return window and is no longer eligible for a refund.`,
          false,
        );
      }
    } else {
      showResult(`Order <strong>${inputId}</strong> not found.`, false);
    }
  });
}
