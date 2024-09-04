const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Listen for the 'beforeinstallprompt' event, which is triggered when the app meets the criteria for installation.
// Prevent the default behavior to allow custom handling of the installation prompt.
// Store the event for later use and display the install button.
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = 'block';
  });

// Add a click event listener to the install button to trigger the installation prompt.
// If the deferred prompt exists, shows the installation prompt and handle the user's choice.
// Hides the install button after the prompt is handled.
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('User choice:', outcome);
      deferredPrompt = null;
      butInstall.style.display = 'none';
    }
  });

// Listen for the 'appinstalled' event, which is triggered when the app is successfully installed.
// Log a message indicating the app has been installed.
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully!', event);
  });
