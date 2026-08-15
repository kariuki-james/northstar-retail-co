# Go-Live Readiness Note: Support Deflection MVP
**To:** Northstar Retail Co. Engineering & Support Leadership
**From:** Sprint Pod 
**Date:** August 15, 2026
**Subject:** Self-Serve Dashboard MVP Handoff & Audit

This note accompanies the Support Deflection MVP. We have built a lightweight, self-serve client dashboard designed to deflect two of your highest-volume support ticket categories: **Order Status** and **Returns/Refunds**. 

Here is the exact state of the artifact, its current limitations, and the integration path for your internal team.

---

## 🟢 What Works (Production-Ready Logic)

The core CRUD logic and user interface have been validated and are ready to be wired into your backend.

*   **Order Status Deflection:** Customers can successfully input an Order ID to retrieve real-time shipping and delivery statuses (`orders-status.html`).
*   **Automated Return Triage:** The system successfully evaluates return requests against business logic (`eligibleForReturn` boolean). It automatically approves valid requests and rejects items past their return window (`returns.html`).
*   **Modular Architecture:** The frontend UI uses vanilla HTML/CSS/JS with zero external library dependencies, meaning it will drop cleanly into your existing tech stack without bundle-size bloat or version conflicts.
*   **State Management:** The asynchronous JavaScript (`main.js`) handles UI loading states and error handling gracefully (e.g., displaying user-friendly error messages for invalid inputs).

---

## 🟡 What's Known-Broken (Sprint Limitations)

Because this is a 1-week MVP designed to prove the UX approach, we took specific technical shortcuts that must be addressed before public deployment.

| Issue | Description |
| :--- | :--- |
| **Static Data Mocking** | The app currently reads from a static `orders.json` file. While it successfully simulates a REST API, data mutations (like updating an order to "Return Pending") are localized to the browser session and do not persist upon page reload. |
| **Lack of Authentication** | There is currently no identity verification. Anyone with a valid Order ID can view the status or initiate a return. |
| **Missing Third Category** | To meet the 5-day deadline, we focused on the two highest-volume ticket types. The "Stock Availability" module is not included in this build. |

---

## 🔵 Northstar Handoff: Next Steps

To pick up this prototype and push it to production without our team in the room, your engineering team must complete the following three steps:

1.  **Replace the Data Fetcher:**
    Open `main.js` and locate the `fetchOrders()` function. Swap the local `fetch('orders.json')` call with a `GET` request to your actual production Orders API. 
2.  **Wire Up the `POST` Request:**
    In the `returns.html` logic inside `main.js`, replace the success simulation (the UI message) with a `POST` request to your RMA endpoint to actually generate the return label and update the database.
3.  **Implement Route Protection:**
    Wrap the `orders-status.html` and `returns.html` pages in your existing authentication middleware so customers must be logged into their Northstar accounts to access these tools.
