document.getElementById("slotForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const venue = document.getElementById("venue").value;
    const date = document.getElementById("date").value;

    const confirmationMessageElement = document.getElementById("confirmationMessage");

    // Validate the form inputs
    if (!name || !rollNo || !venue || !date) {
        confirmationMessageElement.innerText = "Error: Please fill out all fields!";
        confirmationMessageElement.className = "error";
        return;
    }

    const confirmationMessage = `
        ✅ Slot Booked Successfully!
        Name: ${name}
        Roll No: ${rollNo}
        Venue: ${venue}
        Date: ${date}
    `;

    // Update confirmation message and style
    confirmationMessageElement.innerText = confirmationMessage;
    confirmationMessageElement.className = ""; // Remove any previous classes
});
