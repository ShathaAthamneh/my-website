document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Create a new row
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert cells into the row
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);

    // Add text to the cells
    nameCell.textContent = name;
    emailCell.textContent = email;
    ageCell.textContent = age;

    // Clear the form fields
    document.getElementById('dataForm').reset();
});

