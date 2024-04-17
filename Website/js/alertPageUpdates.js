window.onload = function() {
    loadSecurityAlerts();
    loadAppointmentAlerts();
    loadCourseUpdates();
};

function loadSecurityAlerts() {
    const crimeReports = JSON.parse(localStorage.getItem('crimeReports')) || [];
    const list = document.getElementById('crimeReportsList');
    crimeReports.forEach(report => {
        const listItem = document.createElement('li');
        listItem.textContent = `Type: ${report.crimeType}, Location: ${report.location}, Time: ${report.time}`;
        list.appendChild(listItem);
    });
}

function loadAppointmentAlerts() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const list = document.getElementById('appointmentDetails');
    appointments.forEach(appointment => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            Advisor Name: ${appointment.advisorName}<br>
            Date: ${appointment.meetingDate}<br>
            Time: ${appointment.meetingTime}<br>
            Reason: ${appointment.meetingReason}
        `;
        list.appendChild(listItem);
    });
}

function loadCourseUpdates() {
    const courseEntries = JSON.parse(localStorage.getItem('courseEntries')) || [];
    const list = document.getElementById('courseUpdatesList');
    courseEntries.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `Action: ${entry.action}, Course Title: ${entry.courseTitle}, Schedule: ${entry.courseSchedule}`;
        list.appendChild(listItem);
    });
}
