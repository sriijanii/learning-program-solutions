import java.util.Arrays;
import java.util.Comparator;

class Product{
    String productId;
    String productName;
    String category;

    Product(String prodId, String pName, String cat){

        this.productId = prodId;
        this.productName = pName;
        this.category = cat;
    }

    @Override
    public String toString(){ 
        return productName + "(ID: " +productId + ") - " + category;
    }
}

public class ProductSearch {
    public static Product LinearSearch(Product[] prods, String targetId){
        for(Product p : prods){
            if (p.productId.equals(targetId)){
                return p;
            }
        }
        return null;
    }

    public static Product BinarySearch(Product[] prods, String targetId){
        int low = 0;
        int high = prods.length - 1;
        while(low <= high){
            int mid = (low + high)/2;
            int comparison = prods[mid].productId.compareTo(targetId);
            if (prods[mid].productId.equals(targetId)){
                return prods[mid];
            }
            else if (comparison < 0){
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return null;
    }

public static void main(String[] args){
    Product[] prods = new Product[5];
    prods[0] = new Product("Prod1", "Mobile", "Electrical Appliances");
    prods[1] = new Product("Prod2", "Laptop", "Electrical Appliances");
    prods[2] = new Product("Prod3", "Furniture", "Home Appliances");
    prods[3] = new Product("Prod4", "Table", "Home Appliances");
    prods[4] = new Product("Prod5", "Macbook", "Electrical Appliances");

    Arrays.sort(prods, Comparator.comparing(p -> p.productId));

    System.out.println("product found using Linear search : "+LinearSearch(prods, "Prod1"));
    System.out.println("Product found using binary Search: " +BinarySearch(prods, "Prod4"));

    }
}