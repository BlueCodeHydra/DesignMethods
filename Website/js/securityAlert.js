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
