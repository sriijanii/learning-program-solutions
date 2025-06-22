public class Forecast {

    // future value of an investment using recursion
    public static double calculateGrowth(double currentAmount, double rate, int yearsLeft) {
        if (yearsLeft < 0) {
            throw new IllegalArgumentException("Oops! Number of years can't be negative.");
        }

        if (yearsLeft == 0) {  //no more years left
            return currentAmount;
        }
        double nextAmount = currentAmount * (1 + rate);
        return calculateGrowth(nextAmount, rate, yearsLeft - 1);
    }
    public static void printGrowth(double initial, double rate, int totalYears) {
        System.out.println("\nHere's how your investment grows each year:");
        for (int year = 0; year <= totalYears; year++) {
            System.out.printf("Year %d = $%.2f%n", year, initial);
            initial *= (1 + rate);
        }
    }
}
