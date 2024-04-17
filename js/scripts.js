console.log("Script loaded successfully");


function login() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const studentId = document.getElementById('studentId').value;
    const email = document.getElementById('email').value;

    // Save user info to localStorage
    localStorage.setItem('userInfo', JSON.stringify({ firstName, lastName, studentId, email }));

    // Redirect to mainpage.html
    window.location.href = 'mainpage.html';
}

function navigate(page) {
    // Assuming the name of the page matches the html file names
    window.location.href = page + '.html';
}


window.onload = function() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
        const userInfoText = document.getElementById('userInfoText');
        userInfoText.value = `First Name: ${userInfo.firstName}\nLast Name: ${userInfo.lastName}\nStudent ID: ${userInfo.studentId}\nEmail: ${userInfo.email }\nStatus: ${userInfo.StudentStatus}`;
        document.getElementById('options').style.display = 'flex';
    }
};

