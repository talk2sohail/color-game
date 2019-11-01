var deferedPrompt;

window.addEventListener("load", handleRequest);

function handleRequest() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(registration => {
      console.log("[Service Worker] is registered.");
    });
  }
}

window.addEventListener("beforeinstallprompt", e => {
  deferedPrompt = e;
  showInstallPromotion();
});

function showInstallPromotion() {
  btnAdd.addEventListener("click", e => {
    // hide our user interface that shows our A2HS button
    btnAdd.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
}
