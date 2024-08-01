document.addEventListener("DOMContentLoaded", () => {
    const imgBox = document.querySelector("#imgBox");
    const qrImg = document.querySelector("#qrImg");
    const qrText = document.querySelector(".qrText");
    const btn = document.querySelector(".btn");
    const btn2 = document.querySelector(".btn-1");
  
    // Load the saved QR code and text if they exist
    if (localStorage.getItem("qrCodeURL")) {
      qrImg.src = localStorage.getItem("qrCodeURL");
      imgBox.classList.add("show-img");
    }
    if (localStorage.getItem("qrTextValue")) {
      qrText.value = localStorage.getItem("qrTextValue");
    }
  
    btn.addEventListener("click", () => {
      function generateQr() {
        if (qrText.value.trim() !== "") {
          const qrCodeURL = 
            "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
            encodeURIComponent(qrText.value); // Use encodeURIComponent for safety
          qrImg.src = qrCodeURL;
          imgBox.classList.add("show-img");
  
          // Save the QR code URL and text to local storage
          localStorage.setItem("qrCodeURL", qrCodeURL);
          localStorage.setItem("qrTextValue", qrText.value);
        } else {
          alert("Please enter some text or URL");
        }
      }
      generateQr();
    });
  
    btn2.addEventListener("click", () => {
      function removeQr() {
        qrText.value = "";
        qrImg.src = "";
        imgBox.classList.remove("show-img");
  
        // Remove the QR code URL and text from local storage
        localStorage.removeItem("qrCodeURL");
        localStorage.removeItem("qrTextValue");
      }
      removeQr();
    });
  });
  