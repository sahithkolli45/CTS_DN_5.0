public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Education")
        };

        // --- Linear Search Tests ---
        System.out.println("=== Linear Search ===");
        Product linearResultFound = SearchOperations.linearSearch(products, 103);
        if (linearResultFound != null) {
            System.out.println("Found ID 103: " + linearResultFound.productName);
        } else {
            System.out.println("ID 103 not found.");
        }

        Product linearResultNotFound = SearchOperations.linearSearch(products, 999);
        if (linearResultNotFound != null) {
            System.out.println("Found ID 999: " + linearResultNotFound.productName);
        } else {
            System.out.println("ID 999 not found.");
        }

        // --- Binary Search Tests ---
        System.out.println("\n=== Binary Search ===");
        Product binaryResultFound = SearchOperations.binarySearch(products, 104);
        if (binaryResultFound != null) {
            System.out.println("Found ID 104: " + binaryResultFound.productName);
        } else {
            System.out.println("ID 104 not found.");
        }

        Product binaryResultNotFound = SearchOperations.binarySearch(products, 999);
        if (binaryResultNotFound != null) {
            System.out.println("Found ID 999: " + binaryResultNotFound.productName);
        } else {
            System.out.println("ID 999 not found.");
        }
    }
}