const jsonData = {
  id: "07",
  title: "Blogs",
  url: "#",
  children: [
    {
      id: "0701",
      title: "Bones Joints & Muscles",
      url: "https://ujalacygnus.com/post_tax/bones-joints-muscles/",
    },
    {
      id: "0702",
      title: "COVID care",
      url: "https://ujalacygnus.com/post_tax/covid-care/",
    },
    {
      id: "0703",
      title: "Cancer",
      url: "https://ujalacygnus.com/post_tax/cancer/",
    },
    {
      id: "0704",
      title: "Child Care",
      url: "https://ujalacygnus.com/post_tax/child-care/",
    },
    {
      id: "0705",
      title: "Diabetes",
      url: "https://ujalacygnus.com/post_tax/diabetes/",
    },
    {
      id: "0706",
      title: "Diseases",
      url: "https://ujalacygnus.com/post_tax/diseases/",
    },
    {
      id: "0707",
      title: "General Health",
      url: "https://ujalacygnus.com/post_tax/general-health/",
    },
    {
      id: "0708",
      title: "Heart Health",
      url: "https://ujalacygnus.com/post_tax/heart-health/",
    },
    {
      id: "0709",
      title: "Kidney Health",
      url: "https://ujalacygnus.com/post_tax/kidney-health/",
    },
    {
      id: "0710",
      title: "Men\u2019s Health",
      url: "https://ujalacygnus.com/post_tax/mens-health/",
    },
    {
      id: "0711",
      title: "Mental Health",
      url: "https://ujalacygnus.com/post_tax/mental-health/",
    },
    {
      id: "0712",
      title: "Sexual health",
      url: "https://ujalacygnus.com/post_tax/sexual-health/",
    },
    {
      id: "0713",
      title: "Stomach care",
      url: "https://ujalacygnus.com/post_tax/stomach-care/",
    },
    {
      id: "0714",
      title: "Women Health",
      url: "https://ujalacygnus.com/post_tax/women-health/",
    },
    {
      id: "0715",
      title: "Technology",
      url: "https://ujalacygnus.com/post_tax/technology/",
    },
  ],
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
