import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Login Process
        System.out.print("Enter First Name: ");
        String firstName = scanner.nextLine();
        System.out.print("Enter Last Name: ");
        String lastName = scanner.nextLine();
        System.out.print("Enter Student ID: ");
        String studentId = scanner.nextLine();
        System.out.print("Enter Email: ");
        String email = scanner.nextLine();

        Login login = new Login(firstName, lastName, studentId, email);
        System.out.println(login.getDetails());

        // Display options
        System.out.println("\nChoose an option:");
        System.out.println("1. Advisor");
        System.out.println("2. Course Management");
        System.out.println("3. Appointment Scheduler");
        System.out.println("4. Security Management");
        System.out.print("Enter option number: ");
        int option = scanner.nextInt();

        switch(option) {
            case 1:
                new Advisor().displayAdvisorPage();
                break;
            case 2:
                new CourseManagement().displayCoursePage();
                break;
            case 3:
                new AppointmentScheduler().displayAppointmentPage();
                break;
            case 4:
                new SecurityManager().displaySecurityPage();
                break;
            default:
                System.out.println("Invalid option selected.");
        }

        scanner.close();
    }
}
