$(document).ready(function() {
    $('#humberger').click(function() {
        $('#mySidebar').toggleClass('show');
    });
});

window.onload = function() {
    const iframe = document.querySelector('iframe');
    const savedURL = localStorage.getItem('iframeURL');

    if(savedURL) {
        iframe.src = savedURL;
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            localStorage.setItem('iframeURL', href);
        });
    });
}