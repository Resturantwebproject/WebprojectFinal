function showCategory(categoryId) {
    var category = document.getElementById(categoryId);
    if (category.style.display === "none") {
      category.style.display = "block";
    } else {
      category.style.display = "none";
    }
  }
  