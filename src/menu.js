export function renderMenu() {
    document.getElementById("content").replaceChildren();
    // Select the content div
    const content = document.getElementById('content');

    // Create menuHeader div
    const menuHeader = document.createElement('div');
    menuHeader.className = 'menuHeader';
    menuHeader.textContent = "Vincini's Menu";

    // Create menuBody div
    const menuBody = document.createElement('div');
    menuBody.className = 'menuBody';

    // Array of menu items
    const items = ['Ravioli', 'Spaghetti', 'Chicken Alfredo', 'Lasagna'];

    // Create and append each menuItem div
    items.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menuItem';
      menuItem.textContent = item;
      menuBody.appendChild(menuItem);
    });

    // Append menuHeader and menuBody to content
    content.appendChild(menuHeader);
    content.appendChild(menuBody);

          
}