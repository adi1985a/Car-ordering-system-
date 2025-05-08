# Car Ordering System

## Overview
Car Ordering System is an HTML-based web page for ordering cars. Features a form to input name, email, car model, brand, color, and extras, with client-side validation. Displays car images and a success modal on submission. Styled with `styles.css` and uses `script.js` for form handling and modal functionality.

## Features
- **Order Form**: Collects full name, email, car model, brand, color, and optional extras (e.g., GPS, sunroof).
- **Validation**: Enforces required fields, name pattern (letters/spaces), and email format via HTML5 and JavaScript.
- **Car Showcase**: Displays four car images (`car1.jpg` to `car4.jpg`).
- **Success Modal**: Shows confirmation with a dealer message after form submission.
- **Notification**: Placeholder for form feedback (e.g., errors).
- **Responsive Design**: Uses `styles.css` and viewport meta tag for mobile compatibility.
- **Interactivity**: `script.js` handles form submission, validation, and modal display.

## Requirements
- Web browser (e.g., Chrome, Firefox, Safari)
- Local assets:
  - `styles.css`: Stylesheet for layout and design
  - `script.js`: JavaScript for form validation and modal
  - `images/car-logo.png`: Logo for header
  - `images/car1.jpg`, `car2.jpg`, `car3.jpg`, `car4.jpg`: Car images

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Ensure the required assets are in place:
   - `styles.css`: In the root directory.
   - `script.js`: In the root directory.
   - `images/`: Directory containing `car-logo.png`, `car1.jpg`, `car2.jpg`, `car3.jpg`, `car4.jpg`.
3. Host the site on a web server (e.g., Apache, Nginx) or open `index.html` directly:
   ```bash
   python -m http.server 8000
   ```
4. Access the site at `http://localhost:8000`.

## Usage
1. Open the website in a browser to view the form and car images.
2. **Interface**:
   - **Header**: Shows logo and "Car Ordering System" title.
   - **Car Showcase**: Displays four car images.
   - **Form**: Enter name, email, select car model/brand, choose color, and check extras.
   - **Modal**: Appears on successful submission with a confirmation message.
   - **Notification**: Shows validation errors (if any).
3. **Actions**:
   - Fill and submit the form; valid inputs trigger the success modal.
   - Invalid inputs show error messages via `script.js`.
   - Click "Close" to dismiss the modal.

## File Structure
- `index.html`: Main page with form, images, and modal.
- `styles.css`: Custom styles for layout and design.
- `script.js`: JavaScript for form validation and modal handling.
- `images/`: Directory with `car-logo.png`, `car1.jpg`, `car2.jpg`, `car3.jpg`, `car4.jpg`.
- `README.md`: This file, providing project documentation.

## Notes
- The page uses English (`lang="en"`) for accessibility.
- Form is client-side only; `script.js` handles validation but no backend submission.
- Images (`car-logo.png`, `car1.jpg`, etc.) must exist to avoid broken links.
- The `novalidate` attribute disables default HTML5 validation; `script.js` handles custom validation.
- Assumes `styles.css` and `script.js` exist (not provided); ensure they are implemented.
- Modal and notification rely on JavaScript; test functionality thoroughly.
- Add a backend (e.g., PHP) for actual order processing.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, open an issue on GitHub or contact the repository owner.