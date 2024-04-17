function submitCourse() {
    const action = document.getElementById('action').value;
    const courseTitle = document.getElementById('courseTitle').value;
    const courseSchedule = document.getElementById('courseSchedule').value;

    const courseData = {
        action,
        courseTitle,
        courseSchedule
    };

    // Save the course entry to local storage
    const courseEntries = JSON.parse(localStorage.getItem('courseEntries')) || [];
    courseEntries.push(courseData);
    localStorage.setItem('courseEntries', JSON.stringify(courseEntries));

    // Display the course entry on the same page as feedback
    const entry = document.createElement('div');
    entry.classList.add('course-entry');
    entry.innerHTML = `
        <p>Action: ${action}</p>
        <p>Course Title: ${courseTitle}</p>
        <p>Course Schedule: ${courseSchedule}</p>
    `;
    document.getElementById('courseEntries').appendChild(entry);

    // Optionally clear the form fields
    document.getElementById('courseForm').reset();
}

const appointments = JSON.parse(localStorage.getItem('courseEntires')) || [];
appointments.push({
    Action,
    courseTitle,
    courseSchedule
});
localStorage.setItem('appointments', JSON.stringify(appointments));
