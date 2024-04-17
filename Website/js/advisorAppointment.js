function submitAdvisorForm() {
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

    localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
    alert('Appointment details saved!');
}

window.onload = function() {
    const storedData = localStorage.getItem('appointmentData');
    if (storedData) {
        const appointmentData = JSON.parse(storedData);
        const detailsElement = document.getElementById('appointmentDetails');
        detailsElement.innerHTML = `
            <p>Advisor Name: ${appointmentData.advisorName}</p>
            <p>Date: ${appointmentData.meetingDate}</p>
            <p>Time: ${appointmentData.meetingTime}</p>
            <p>Reason for Meeting: ${appointmentData.meetingReason}</p>
        `;
    }
};
