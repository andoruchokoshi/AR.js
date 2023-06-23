function hideCookieNotice() {
    var cookieNotice = document.querySelector('.cookie_notice');
    cookieNotice.style.display = 'none';
}

function checkCookie() {
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)cookieAccepted\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return cookieValue === 'true';
}

if (!checkCookie()) {
    var cookieCloseButton = document.getElementById('cookie_close');
    cookieCloseButton.addEventListener('click', function(event) {
    event.preventDefault();
    hideCookieNotice();
    
    document.cookie = 'cookieAccepted=true; path=/';
    });
} else {
    hideCookieNotice();
}

var expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 1);
document.cookie = 'cookieAccepted=true; expires=' + expirationDate.toUTCString() + '; path=/';
