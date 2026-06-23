public class SearchOperations {

    // Suppress default constructor for non-instantiability
    private SearchOperations() {
        throw new AssertionError("Utility class should not be instantiated");
    }

    // Linear Search
    public static Product linearSearch(Product[] products, int productId) {
        if (products == null) {
            return null;
        }
        for (Product product : products) {
            if (product != null && product.productId == productId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int productId) {
        if (products == null) {
            return null;
        }
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            // Prevent potential integer overflow
            int mid = left + (right - left) / 2;

            if (products[mid] != null && products[mid].productId == productId) {
                return products[mid];
            }

            if (products[mid] != null && products[mid].productId < productId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}