# 🚗💨 AutoOrder Pro: Web-Based Car Configurator & Order Form 📝
_An HTML, CSS, and JavaScript-based web page for configuring and "ordering" cars, featuring client-side form validation, car image showcase, and a success modal._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Table of Contents
1.  [Overview](#-overview)
2.  [Key Features](#-key-features)
3.  [Screenshots (Conceptual)](#-screenshots-conceptual)
4.  [Technical Stack & Requirements](#-technical-stack--requirements)
5.  [Local Setup & Viewing](#️-local-setup--viewing)
6.  [Website Usage & Interaction](#️-website-usage--interaction)
7.  [File Structure](#-file-structure)
8.  [Important Notes & Considerations](#-important-notes--considerations)
9.  [Contributing](#-contributing)
10. [License](#-license)
11. [Contact](#-contact)

## 📄 Overview

**AutoOrder Pro**, developed by Adrian Lesniak, is a client-side web application built with HTML, CSS, and JavaScript, designed to simulate a car ordering system. Users can fill out a detailed form specifying their full name, email, preferred car model, brand, color, and select optional extras like GPS or a sunroof. The page features robust **client-side validation** for required fields and correct data formats (name, email). It showcases images of available cars and provides immediate feedback upon form submission via a success modal. All styling is managed by `styles.css`, while `script.js` handles form validation logic and modal display.

<p align="center">
  <img src="screenshots/1.gif" width="70%">
</p>

## ✨ Key Features

*   📝 **Comprehensive Order Form**:
    *   Collects user details: Full Name, Email Address.
    *   Car specifications: Car Model, Car Brand, Color.
    *   Optional Extras: Checkboxes for features like GPS, Sunroof, etc.
*   ✔️ **Client-Side Validation (HTML5 & JavaScript)**:
    *   Enforces `required` fields.
    *   Validates name pattern (allowing letters and spaces).
    *   Checks for a valid email address format.
    *   Custom validation logic is handled by `script.js` (as `novalidate` attribute is likely used on the form).
*   🖼️ **Car Showcase**:
    *   Displays images of four different car models (`car1.jpg` to `car4.jpg`) to aid selection.
*   🎉 **Success Modal**:
    *   Upon successful form submission (passing client-side validation), a modal dialog appears.
    *   Displays a confirmation message, including a personalized message from the "dealer."
*   📢 **Notification Area (Placeholder)**:
    *   An element (e.g., a `div`) is designated for displaying form feedback, primarily for validation errors.
*   📱 **Responsive Design Considerations**:
    *   Utilizes `styles.css` for layout and styling, which should incorporate responsive design principles.
    *   Includes the viewport meta tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0">`) for optimal display on various devices.
*   ⚙️ **JavaScript Interactivity (`script.js`)**:
    *   Handles form submission event.
    *   Performs custom client-side validation logic.
    *   Controls the display and dismissal of the success modal.
    *   Manages the display of error messages in the notification area.

## 🖼️ Screenshots (Conceptual)

_Screenshots of: the car ordering form, the car image showcase, an example of a validation error message, and the success modal after form submission._

<p align="center">
  <img src="screenshots\1.jpg" width="300"/>
  <img src="screenshots\2.jpg" width="300"/>
  <img src="screenshots\3.jpg" width="300"/>
  <img src="screenshots\4.jpg" width="300"/>
  <img src="screenshots\5.jpg" width="300"/>
  <img src="screenshots\6.jpg" width="300"/>
</p>


## 🛠️ Technical Stack & Requirements

### Core Technologies:
*   **Structure**: HTML5
*   **Styling**: CSS3 (`styles.css`)
*   **Interactivity & Validation**: JavaScript (ES6+) (`script.js`)

### Requirements:
*   **Web Browser**: Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
*   **Local Assets**: All specified CSS, JavaScript, and image files must be present in the correct locations relative to `index.html`.
    *   `styles.css` (root directory or linked path)
    *   `script.js` (root directory or linked path)
    *   `images/car-logo.png` (for the header)
    *   `images/car1.jpg`, `images/car2.jpg`, `images/car3.jpg`, `images/car4.jpg` (for car showcase)

## ⚙️ Local Setup & Viewing

1.  **Clone or Download the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    *(Replace `<repository-url>` and `<repository-directory>` with your specific details, or simply download the files into a local folder).*

2.  **Ensure Asset Placement**:
    *   Verify that `styles.css` and `script.js` are in the same directory as `index.html` (or update paths in `index.html` if they are in subfolders like `css/` or `js/`).
    *   Confirm that the `images/` subfolder exists and contains `car-logo.png` and all `car*.jpg` product images. Paths in HTML/CSS must be correct.

3.  **Open in Browser or Host Locally**:
    *   **Directly in Browser**: You can usually open `index.html` directly in your web browser (File > Open File).
    *   **Using a Simple HTTP Server (Recommended for proper asset loading and JS behavior, especially if using fetch/AJAX in the future)**:
        If you have Python installed, navigate to the project's root directory in your terminal and run:
        ```bash
        python -m http.server 8000
        ```
        Then, open your web browser and go to `http://localhost:8000`.
    *   Alternatively, use any other local web server solution (e.g., Live Server extension in VS Code, XAMPP/MAMP htdocs).

## 💡 Website Usage & Interaction

1.  Open `index.html` in your web browser using one of the methods described above.
2.  **Interface**:
    *   **Header**: Displays the car company logo (`images/car-logo.png`) and the title "Car Ordering System."
    *   **Car Showcase**: A section showing images of four different cars.
    *   **Order Form**: Fields to enter:
        *   Full Name
        *   Email
        *   Car Model (dropdown or text input)
        *   Car Brand (dropdown or text input)
        *   Color (dropdown, color picker, or text input)
        *   Optional Extras (checkboxes for GPS, sunroof, etc.)
    *   **Submit Button**: To submit the form.
    *   **Modal Dialog**: Appears upon successful form submission, showing a confirmation message.
    *   **Notification Area**: Displays validation error messages if form fields are incorrect or missing.
3.  **Actions**:
    *   Fill out all required fields in the order form.
    *   Select desired car specifications and extras.
    *   Click the "Submit" (or similarly labeled) button.
    *   **If inputs are valid**: The success modal will appear with a confirmation. Click "Close" or an 'X' button to dismiss the modal.
    *   **If inputs are invalid**: Error messages will appear in the notification area, guiding you to correct the form. The modal will not appear.

## 🗂️ File Structure

The project is expected to have the following basic file structure:

*   `index.html`: The main HTML file containing the page structure, including the header, car showcase, order form, and the modal dialog.
*   `styles.css`: The CSS file for styling all visual elements of the website.
*   `script.js`: The JavaScript file handling form validation, form submission simulation, and modal display logic.
*   `images/` (subfolder):
    *   `car-logo.png`
    *   `car1.jpg`
    *   `car2.jpg`
    *   `car3.jpg`
    *   `car4.jpg`
*   `README.md`: This documentation file.

## 📝 Important Notes & Considerations

*   **English Language UI**: The page uses English (`lang="en"`) for all text and accessibility.
*   **Client-Side Only**: This is a **client-side application**. `script.js` handles validation and simulates submission (by showing a modal). **No actual order is processed or sent to a server.** For real order processing, a backend system (e.g., PHP, Node.js, Python/Django) and a database would be required.
*   **Image Paths**: Correct paths to all images in the `images/` folder are crucial for them to display correctly in the HTML and CSS.
*   **`novalidate` Attribute**: The form likely uses the `novalidate` attribute (`<form novalidate>`). This disables the browser's default HTML5 validation pop-ups, allowing `script.js` to provide custom validation messages and a more controlled user experience.
*   **`styles.css` and `script.js` Implementation**: The functionality and appearance heavily depend on the content of these files, which are assumed to be provided but not detailed in the overview.
*   **Modal and Notification Logic**: The display and behavior of the success modal and error notifications are entirely managed by JavaScript in `script.js`.

## 🤝 Contributing

Contributions to **AutoOrder Pro** are welcome! If you have ideas for:

*   Adding more car options or configuration choices.
*   Improving the client-side validation logic or user experience.
*   Enhancing the CSS styling and responsiveness.
*   Integrating with a mock backend API for a more realistic simulation.
*   Adding more interactive elements (e.g., image carousels for cars).

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/YourCarFeature`).
3.  Make your changes (HTML, CSS, JS).
4.  Commit your changes (`git commit -m 'Feature: Implement YourCarFeature'`).
5.  Push to the branch (`git push origin feature/YourCarFeature`).
6.  Open a Pull Request.

## 📃 License

This project is licensed under the **MIT License**.
(If you have a `LICENSE` file in your repository, refer to it: `See the LICENSE file for details.`)

## 📧 Contact

Project developed by **Adrian Lesniak**.
For questions or feedback, please open an issue on the GitHub repository or contact the repository owner/author.

---
✨ _Simulating your dream car configuration, right in your browser!_
