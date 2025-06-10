export function renderAbout () {
    document.getElementById("content").replaceChildren();

    // Select the content div
    const content = document.getElementById('content');

    // Create aboutHeader div
    const aboutHeader = document.createElement('div');
    aboutHeader.className = 'aboutHeader';
    aboutHeader.textContent = "About Vincini's";

    // Create aboutBody div
    const aboutBody = document.createElement('div');
    aboutBody.className = 'aboutBody';
    aboutBody.textContent = "Vincini's is the best Italian food ever! Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut cursus arcu. Ut semper rhoncus ipsum, non consectetur turpis scelerisque at. Etiam feugiat urna ut eros convallis, in auctor diam bibendum. Morbi vestibulum erat a arcu euismod, quis laoreet metus interdum. Suspendisse aliquet elit id erat lobortis, ac varius elit rutrum. Proin pulvinar velit sed purus varius commodo ut laoreet arcu. Vivamus vitae massa tempor, interdum est vel, congue sapien. Vestibulum pretium molestie condimentum. Donec quis tempus nisi. Donec sed lacus laoreet, accumsan odio nec, aliquam erat. Fusce eu feugiat turpis. Aenean ut urna id massa interdum condimentum.";

    // Append aboutHeader and aboutBody to content
    content.appendChild(aboutHeader);
    content.appendChild(aboutBody);

}