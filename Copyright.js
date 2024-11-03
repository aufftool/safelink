function showCopyrightModal() {
    // Create the modal container
    const modal = document.createElement("div");
    modal.id = "copyrightModal";
    modal.style.cssText = `
        display: flex;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
    `;
    // Create the modal content box
    const modalContent = document.createElement("div");
    modalContent.style.cssText = `
        background-color: white;
        padding: 10px;
        border-radius: 8px;
        width: 80%;
        max-width: 400px;
        text-align: center;
        position: relative;
        display: block;
        align-text: block;
    `;

    // Add copyright text
    const modalText = document.createElement("p");
    modalText.innerHTML = `© safelink <a href='https://white-action.blogspot.com/tme?text='> @whiteactionyt</a> - <a href='https://www.aufftool.in/youtube'>YouTube</a>`;

    // Create the close button
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
    `;

    // Append elements to the modal content
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalText);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Show the modal
    modal.style.display = "flex";

    // Close modal when clicking the close button
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Close modal when clicking outside the content box
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
