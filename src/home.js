// home.js

export const homepage = 'This is the home page'
import noodlesImg from './images/noodles-and-veggies.jpg';
import pisaImg from './images/tower-of-pisa.jpg';

    
    export function renderHomepage() {
        document.getElementById("content").replaceChildren();

        const content = document.getElementById('content');

        // Create heading div
        const heading = document.createElement('div');
        heading.className = 'heading';
        heading.textContent = "Vincini's";

        // Create sidebar container
        const sidebarContainer = document.createElement('div');
        sidebarContainer.className = 'sidebar-container';

        // Create img-sidebar div
        const imgSidebar = document.createElement('div');
        imgSidebar.className = 'img-sidebar';

        // Create first image
        const img1 = document.createElement('img');
        img1.src = noodlesImg;
        img1.alt = 'coiled noodles with some leafy greens and a tomato';

        // Create second image
        const img2 = document.createElement('img');
        img2.src = pisaImg;
        img2.alt = 'leaning tower of pisa';

        // Append images to img-sidebar
        imgSidebar.appendChild(img1);
        imgSidebar.appendChild(img2);

        // Create text-sidebar div
        const textSidebar = document.createElement('div');
        textSidebar.className = 'text-sidebar';
        textSidebar.innerHTML = `This is a short description for Vincini's Restaurant. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;

        // Append img-sidebar and text-sidebar to sidebar-container
        sidebarContainer.appendChild(imgSidebar);
        sidebarContainer.appendChild(textSidebar);

        // Append heading and sidebar-container to content
        content.appendChild(heading);
        content.appendChild(sidebarContainer);
    }

