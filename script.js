// Selecting the form
const form = document.getElementById("studentForm");

// Selecting table body
const tbody = document.querySelector("#studentTable tbody");

// Submit Event Listener
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Getting input values

  const fname = document.getElementById("fname").value;

  const lname = document.getElementById("lname").value;

  const email = document.getElementById("email").value;

  const address = document.getElementById("address").value;

  const pincode = document.getElementById("pincode").value;

  const state = document.getElementById("state").value;

  const country = document.getElementById("country").value;

  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Creating new table row

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${fname} </td>
    <td>${lname}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${state}</td>
    <td>${country}</td>
    <td>${gender}</td>
 `;

  tbody.appendChild(row);

  form.reset();
});
