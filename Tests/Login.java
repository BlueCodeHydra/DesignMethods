public class Login {
    String firstName;
    String lastName;
    String studentId;
    String email;

    public Login(String firstName, String lastName, String studentId, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentId = studentId;
        this.email = email;
    }

    public String getDetails() {
        return "Logged in User: " + firstName + " " + lastName + " | Student ID: " + studentId + " | Email: " + email;
    }
}
