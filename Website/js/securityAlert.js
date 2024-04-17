function reportCrime() {
    // Retrieve crime report details
    const crimeType = document.getElementById('crimeType').value;
    const location = document.getElementById('location').value;
    const time = document.getElementById('time').value;

    // Construct crime report object
    const crimeReport = { crimeType, location, time };
    
    // Get existing crime reports or initialize empty array
    const crimeReports = JSON.parse(localStorage.getItem('crimeReports')) || [];

    // Add new report to the list of existing reports
    crimeReports.push(crimeReport);

    // Save updated reports back to localStorage
    localStorage.setItem('crimeReports', JSON.stringify(crimeReports));

    // Navigate to alert page
    window.location.href = 'alert.html';
}

window.onload = function() {
    // Retrieve crime reports from localStorage
    const crimeReports = JSON.parse(localStorage.getItem('crimeReports')) || [];

    // Select the list element for security alerts
    const list = document.getElementById('crimeReportsList');

    // Populate the list with crime reports
    crimeReports.forEach(report => {
        const listItem = document.createElement('li');
        listItem.textContent = `Type: ${report.crimeType}, Location: ${report.location}, Time: ${report.time}`;
        list.appendChild(listItem);
    });
};


