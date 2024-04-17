function submitAdvisorForm() {
    // Retrieve values from the form
    const advisorName = document.getElementById('advisorName').value;
    const meetingDate = document.getElementById('meetingDate').value;
    const meetingTime = document.getElementById('meetingTime').value;
    const meetingReason = document.getElementById('meetingReason').value;

    const appointmentData = {
        advisorName,
        meetingDate,
        meetingTime,
        meetingReason
    };

    // Retrieve existing appointments or initialize an empty array if none exist
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointmentData);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Alert for confirmation and redirect to the Appointment page
    alert('Appointment details saved and will be displayed on the Appointments and Alert pages.');
    window.location.href = 'Appointment.html'; // Redirects to the Appointment page
}

// This function will load the appointments into the table when the Appointment page is loaded
function loadAppointmentsIntoTable() {
    const storedData = JSON.parse(localStorage.getItem('appointments')) || [];
    const tableBody = document.getElementById('appointmentDetails');

    // Clear existing table rows except the header
    tableBody.innerHTML = '';

    // Add new rows for each stored appointment
    storedData.forEach(appointment => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = appointment.advisorName;
        row.insertCell().textContent = appointment.meetingDate;
        row.insertCell().textContent = appointment.meetingTime;
        row.insertCell().textContent = appointment.meetingReason;
    });
}

// This function will be called when the Appointment page is loaded
window.onload = function() {
    loadAppointmentsIntoTable();
};
