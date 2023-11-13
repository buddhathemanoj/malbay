// serviceWorkerRegistration.js

 function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = '/service-worker.js'; // Use the root directory assuming your service-worker.js is there.
  
        navigator.serviceWorker
          .register(swUrl)
          .then(registration => {
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker == null) {
                return;
              }
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    // New content is available; please refresh.
                    console.log('New content is available; please refresh.');
                  } else {
                    // Content is cached for offline use.
                    console.log('Content is cached for offline use.');
                  }
                }
              };
            };
          })
          .catch(error => {
            console.error('Error during service worker registration:', error);
          });
      });
    }
  }
  
   function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }
  export default {
    register ,
    unregister
  }