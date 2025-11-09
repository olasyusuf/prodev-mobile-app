import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  // 🔍 Search Bar Section
  searchGroup: {
    marginBottom: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    elevation: 2, // shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  searchControl: {
    marginTop: 4,
    fontSize: 13,
    color: "#555",
  },
  searchButton: {
    backgroundColor: "#2E86DE",
    borderRadius: 10,
    padding: 10,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  // 🏷️ Filter Bar
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    width: 80,
  },

  // 🏠 Listings Section
  listingContainer: {
    flex: 1,
    marginTop: 10,
  },

  // 📄 Pagination Section
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  showMoreButton: {
    backgroundColor: "#2E86DE",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
