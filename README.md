# 🎓 Course Registration Web App

A lightweight web application that allows users to register for courses, manage their information, and perform CRUD operations (Create, Read, Update, Delete). Built using pure HTML, Bootstrap for styling, and JavaScript for logic — with data stored in `localStorage` and authorization managed through `sessionStorage`.

> ✅ Live Demo: [🔗 Coming Soon](#)  
> 💼 Perfect for students, beginners, or portfolio enhancement.

---

## 🚀 Features

- 🧾 **User Registration Form** — Register with name, email, contact, city, and select multiple courses.
- 📋 **View Registered Users** — See all submitted entries in a responsive table.
- ✏️ **Update User Details** — Edit existing information through a dedicated edit form.
- ❌ **Delete User** — Remove unwanted records in one click.
- 🔐 **Login Authentication** — Simple session-based login using `sessionStorage`.
- 💾 **LocalStorage Integration** — All data is stored client-side (no backend required).
- 🧠 **Input Validations** — Basic field-level validation to prevent bad inputs.
- 🧭 **Responsive UI** — Powered by Bootstrap 5 with a mobile-first navbar and clean design.
- ⚙️ **CRUD Operations** — Fully functional client-side Create, Read, Update, Delete support.

---

## 🛠️ Technologies Used

| Tool / Tech | Purpose |
|-------------|---------|
| 🧱 HTML5     | Page structure |
| 🎨 Bootstrap 5 | UI styling, layout, responsiveness |
| ⚙️ JavaScript | Business logic, CRUD operations |
| 🗃️ localStorage | Storing user data |
| 📦 sessionStorage | Login session management |

---

## 📂 Project Structure

Course-Registration-WebApp/
 - ├── login.html        # User login page for authentication
 - ├── form.html         # Course registration page for creating new enrollments
 - ├── home.html         # Main page to view and manage users (Read, Update, Delete operations)
 - ├── edit.html         # Page for updating registered user details
 - ├── script.js         # JavaScript file containing all app logic, including validation, CRUD operations, and authentication
 - └── README.md         # Project overview and documentation

---

## 🧑‍💻 Pages Explained

### 🔐 `login.html`
- Username: `admin`
- Password: `1234`
- On success: Redirects to `home.html`  
- Uses `sessionStorage` to keep the session alive.

---

### 📝 `form.html`
- Allows new user registrations.
- Inputs: First Name, Last Name, Email, Mobile, Address, City, State, Zip, Course selection (multi-select).
- On submit: Saves the data to `localStorage`.

---

### 🏠 `home.html`
- Displays all registered users in a Bootstrap table.
- Features Edit (`✏️`) and Delete (`🗑️`) buttons for each row.
- On delete: Removes entry from `localStorage`.
- On edit: Redirects to `edit.html` with the data pre-filled.

---

### 🛠️ `edit.html`
- Loads the selected user data.
- Allows modifying and saving changes.
- Updates `localStorage` directly.

---

## 🖼️ UI Highlights

- Dark mode navbar with hamburger on mobile 🍔
- Action icons from **Bootstrap Icons**:
  - ✏️ Edit → `bi-pencil-square`
  - 🗑️ Delete → `bi-trash`
- Form validations for user-friendly experience ✅

---

## 📌 Installation / Usage

> This app is fully static — no server required!

1. 📁 Clone or download this repo
2. Open `login.html` in a browser
3. Use credentials:  
   **Username**: `admin`  
   **Password**: `1234`
4. Register new users via the Form
5. View, edit, delete entries on the Home page

---

## 💡 Why This Project?

- Demonstrates full CRUD using vanilla JS 🧠  
- Practice for DOM manipulation, events, and local/session storage  
- Boosts frontend & logic building confidence 🔧  
- Great beginner portfolio project 🌱  

---

## 🤝 Contributing

Have ideas to enhance the project? Feel free to fork and submit a PR. Suggestions, stars ⭐, and feedback are always welcome!

---

## 📣 Connect With Me

👋 I'm open to collaboration, internships, and feedback!

- 🌐 LinkedIn: https://www.linkedin.com/in/mahendranv2027/
- 📬 Email: mahendranvarudharajan@gmail.com

---

## 📜 License

This project is open-source and free to use for learning and development purposes.

---

> Built with ❤️ using HTML, Bootstrap & JavaScript
