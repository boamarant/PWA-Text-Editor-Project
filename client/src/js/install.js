const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
  });

butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('User choice:', outcome);
      deferredPrompt = null;
      butInstall.style.display = 'none';
    }
  });

window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully!', event);
  });
