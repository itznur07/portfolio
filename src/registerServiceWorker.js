export default function register() {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
        navigator.serviceWorker
          .register(swUrl)
          .then(registration => {
            console.log("Service worker registered: ", registration);
          })
          .catch(error => {
            console.error("Service worker registration failed: ", error);
          });
      });
    }
  }
  