const jsonData = {
    "id": "08",
    "title": "Contact",
    "url": "https://ujalacygnus.com/contact/"
  };

/**
 * Recursively generates nested list HTML from JSON data.
 * @param {Array|Object} items - The JSON data to convert into a nested list.
 * @returns {string} - The generated HTML string for the nested list.
 */
function generateNestedList(items) {
  // Ensure items is an array
  if (!Array.isArray(items)) {
    items = [items];
  }

  let html = "<ul>";

  items.forEach((item) => {
    html += `<li><a href="${item.url}">${item.title}</a>`;
    // Check if the item has children and generate nested lists if present
    if (item.children && item.children.length > 0) {
      html += generateNestedList(item.children);
    }
    html += "</li>";
  });

  html += "</ul>";
  return html;
}
// Insert the nested list into the document
document.getElementById("nested-list-container").innerHTML =
  generateNestedList(jsonData);
