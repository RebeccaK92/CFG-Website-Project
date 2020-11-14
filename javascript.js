
function sendEmail() {
        var email = $('#contact #email').val();
    var message = $('#contact textarea').val();
    window.location.href = 'mailto:snoopyrox@btconnect.com?subject=Comments ' + name + ' (' + email + ')' + '&body=' + message;
};
