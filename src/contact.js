export function displayContactPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    
    const contactInfo = document.createElement("div");
    contactInfo.innerHTML = `
      <p class="contact-text">Address: 123 Food Street</p>
      <p class="contact-text">Phone: 123456789</p>
      <p class="contact-text">Email: info@worldrecipes.com</p>
    `;
    
    contentDiv .appendChild(heading);
    contentDiv .appendChild(contactInfo); 
}