
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

    let html = '<ul>';
    
    items.forEach(item => {
        html += `<li><a href="${item.url}">${item.title}</a>`;
        // Check if the item has children and generate nested lists if present
        if (item.children && item.children.length > 0) {
            html += generateNestedList(item.children);
        }
        html += '</li>';
    });

    html += '</ul>';
    return html;
}



const jsonData = {
    "id": "05",
    "title": "Media",
    "url": "#",
    "children": [
      {
        "id": "0501",
        "title": "Media News",
        "url": "https://ujalacygnus.com/media-news/"
      },
      {
        "id": "0502",
        "title": "Case Studies",
        "url": "https://ujalacygnus.com/case-studies/"
      }
    ]
  };

  // Insert the nested list into the document
document.getElementById('nested-list-container').innerHTML = generateNestedList(jsonData);