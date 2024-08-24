function initializeChatbot() {
    // Preload default icon images
    const preloadCloseIcon = document.createElement("link");
    preloadCloseIcon.rel = "preload";
    preloadCloseIcon.href =
      "close.png";
    preloadCloseIcon.as = "image";
    document.head.appendChild(preloadCloseIcon);
  
    const preloadPickaxeIcon = document.createElement("link");
    preloadPickaxeIcon.rel = "preload";
    preloadPickaxeIcon.href =
      "caspfp.png";
    preloadPickaxeIcon.as = "image";
    document.head.appendChild(preloadPickaxeIcon);

    var inlineActionBtn = document.getElementById("rendering-information");
    const frameSource = inlineActionBtn.getAttribute("data-frame-source");
    const formid = inlineActionBtn.getAttribute("data-formid");
    const height = inlineActionBtn.getAttribute("data-height") || false;
    const width = inlineActionBtn.getAttribute("data-width") || false;
  
    // Chatbot container
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "pickaxe-chatbotContainer";
    chatbotContainer.className = "pickaxe-hidden";
    if (height) chatbotContainer.style = `height: ${height};`;
    if (width) chatbotContainer.style = `width: ${width};`;
    chatbotContainer.innerHTML = `
      <iframe id="chatbotIframe" src="" width="100%" height="100%" frameborder="0"></iframe>
    `;
    document.body.appendChild(chatbotContainer);
  
    // Floating action button (FAB)
    const fabButton = document.createElement("div");
    fabButton.className = "pickaxe-fixed-action-btn";
    fabButton.innerHTML = `
      <a class="pickaxe-link pickaxe-btn-floating pickaxe-btn-large pickaxe-waves-effect pickaxe-waves-light pickaxe-white" id="pickaxe-fabButton">
        <img class="pickaxe-img" id="pickaxe-fabIcon" width="32px" height="32px">
      </a>
    `;
    document.body.appendChild(fabButton);
    
    
    
  
    // Set default icon on page load
    const fabIcon = document.getElementById("pickaxe-fabIcon");
    fabIcon.src =
      `caspfp.png`;
    fabIcon.onerror = function () {
      this.onerror = null;
      this.src = "caspfp.png";
    };
  
    // Button click event listener
    const fabButtonElement = document.getElementById("pickaxe-fabButton");
    fabButtonElement.addEventListener("click", function () {
      const container = document.getElementById("pickaxe-chatbotContainer");
      const iframe = document.getElementById("chatbotIframe");
  
      if (container.classList.contains("pickaxe-hidden")) {
        iframe.src = frameSource;
        container.classList.remove("pickaxe-hidden");
        container.classList.add("pickaxe-visible");
        fabIcon.src =
          "caspfp.png";
        fabButtonElement.classList.add("pickaxe-active");
      } else {
        container.classList.remove("pickaxe-visible");
        container.classList.add("pickaxe-hidden");

        fabIcon.style.color = "black";
        fabIcon.onerror = function () {
          this.onerror = null;
          this.src = "caspfp.png";
        };
        fabButtonElement.classList.remove("pickaxe-active");
      }
    });
  
    // Append preload elements and chatbot container to the document body
    
    
  }
  document.addEventListener("DOMContentLoaded", function () {
  // Call the initializeChatbot function to set up the chatbot
  initializeChatbot();
  });