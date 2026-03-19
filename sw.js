self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  console.log("Service Worker active");
});

/* Push notification (basic) */
self.addEventListener("message", event => {
  if (event.data === "notify") {
    self.registration.showNotification("Terno Streak", {
      body: "Don't break your streak today",
      icon: "icon-192.png"
    });
  }
});
