public class Main {
    public static void main(String[] args) {
        double principal = 5000.0;
        double interestRate = 0.05; 
        int duration = 4;

        double finalAmount = Forecast.calculateGrowth(principal, interestRate, duration);
         Forecast.printGrowth(principal, interestRate, duration);

        System.out.println("Starting Amount: $" + principal);
        System.out.println("Annual Interest Rate: " + (interestRate * 100) + "%");
        System.out.println("Duration: " + duration + " years");
        System.out.printf("Final Amount: $%.2f%n", finalAmount);
       
    }
}
