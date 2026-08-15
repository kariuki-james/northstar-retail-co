# Northstar Support Deflection MVP

## Overview

This repository contains the minimum viable product (MVP) for Northstar Retail Co.'s Support Deflection initiative, built during a 1-week sprint engagement. The goal of this product is to reduce manual ticket handling by allowing customers to self-serve two high-volume ticket types:

1. **Order Status** ("Where is my order?")
2. **Returns & Refunds** ("How do I return this?")

## Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Simulated via static JSON fetching (`orders.json`)
- **No External Dependencies:** Ensures a zero-friction handoff to Northstar's internal engineering team.

## File Structure

```text
.
├── docs/
│   ├── index.html                  # Main navigation dashboard
│   ├── orders.html                 # Order status checking interface
│   ├── returns.html                # Return eligibility & processing interface
│   ├── styles.css                  # Global stylesheet
│   ├── main.js                     # Core CRUD and UI logic
│   └── orders.json                 # Mock database for sprint testing
├── CHARTER.md
├── RELEASE_NOTES.md                # Handoff documentation
└── README.md
```

## How to Run Locally

Because the application uses the JavaScript Fetch API to read `orders.json`, opening the HTML files directly via `file://` will cause a CORS error in modern browsers. You must serve the files using a local web server.

**Option 1: Python (Built-in)**

1. Open your terminal in the project directory.
2. Run: `python -m http.server 8000` (or `python3 -m http.server 8000`)
3. Navigate to `http://localhost:8000` in your web browser.

**Option 2: VS Code**

1. Open the project folder in Visual Studio Code.
2. Install the "Live Server" extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

## Testing the MVP

You can use the following mock Order IDs (from `orders.json`) to test the application's logic:

- **`ORD-123`**: (Wireless Headphones) - Tests standard shipped status and valid return.
- **`ORD-456`**: (Mechanical Keyboard) - Tests delivered status and valid return.
- **`ORD-789`**: (USB-C Cable) - Tests processing status and **ineligible** return window.
- **`ORD-987`**: (Laptop Bag) - Tests standard shipped status and valid return.
- **`ANY-OTHER-ID`**: Tests the error handling and "Not Found" UI states.

## Handoff & Go-Live

Please review the included `RELEASE_NOTES.md` for sprint audit details, known technical shortcuts, and the 3-step guide for wiring this frontend prototype to Northstar's production REST APIs.
