function login(event) {
  event.preventDefault();
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (u === "admin" && p === "1234") {
    sessionStorage.setItem("auth", "true");
    window.location.href = "Home.html";
  } else {
    alert("Invalid credentials");
  }
}

function checkAuth() {
  if (sessionStorage.getItem("auth") !== "true") {
    window.location.href = "Login.html";
  }
}

function logout() {
  sessionStorage.clear();
  window.location.href = "Login.html";
}

function redirectIfLoggedIn() {
  if (sessionStorage.getItem("auth") === "true") {
    window.location.href = "Home.html";
  }
}

function createUser(e) {
  e.preventDefault();
  const user = getUserFormData();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  user.id = Date.now();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registered!");
  window.location.href = "Home.html";
}

function showUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const tbody = document.getElementById("userTableBody");
  tbody.innerHTML = "";
  users.forEach((user, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.mobile}</td>
        <td>${user.city}</td>
        <td>${user.state}</td>
        <td>${user.courses.join(", ")}</td>
        <td class="action-btns">
          <button class="btn btn-sm btn-outline-secondary" onclick="editUser(${user.id})">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteUser(${user.id})">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    `;
  });
}

function editUser(id) {
  window.location.href = `Edit.html?id=${id}`;
}

function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (confirm("Are you sure you want to delete this user?")) {
    users = users.filter(user => user.id !== id);
    localStorage.setItem("users", JSON.stringify(users));
    showUsers();
  }
}

function loadUserForEdit() {
  const url = new URLSearchParams(window.location.search);
  const id = parseInt(url.get("id"));
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.id === id);
  if (!user) return alert("User not found!");

  document.getElementById("editId").value = user.id;
  document.getElementById("firstName").value = user.firstName;
  document.getElementById("lastName").value = user.lastName;
  document.getElementById("email").value = user.email;
  document.getElementById("mobile").value = user.mobile;
  document.getElementById("address").value = user.address;
  document.getElementById("city").value = user.city;
  document.getElementById("state").value = user.state;
  document.getElementById("zip").value = user.zip;
  const coursesSelect = document.getElementById("courses");
  Array.from(coursesSelect.options).forEach(option => {
    option.selected = user.courses.includes(option.value);
  });
}

function updateUser(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("editId").value);
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return alert("User not found!");

  const updatedUser = getUserFormData();
  updatedUser.id = id;
  users[index] = updatedUser;
  localStorage.setItem("users", JSON.stringify(users));
  alert("User updated!");
  window.location.href = "Home.html";
}

function getUserFormData() {
  return {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    mobile: document.getElementById("mobile").value.trim(),
    address: document.getElementById("address").value.trim(),
    city: document.getElementById("city").value.trim(),
    state: document.getElementById("state").value.trim(),
    zip: document.getElementById("zip").value.trim(),
    courses: Array.from(document.getElementById("courses").selectedOptions).map(opt => opt.value)
  };
}
