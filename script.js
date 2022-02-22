$(document).ready(function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("/sw.js");
    }
    /* PWA Install Prompt */
    let deferredPrompt;
    const acceptBtn = document.querySelector('.acceptBtn');
    var checkUserInput = 0;
    window.addEventListener('beforeinstallprompt', (e) => {
        console.log("MOBILE");
        e.preventDefault();
        if (checkUserInput == 0)
            $('.a2hs_modal').addClass('slideUp');
        deferredPrompt = e;
        acceptBtn.addEventListener('click', (e) => {
            $('.a2hs_modal').removeClass('slideUp');
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
                checkUserInput = 1;
            });
            hideModal();
        });
    });
});
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function hideModal() {
    $('.a2hs_modal').removeClass('slideUp');
}
