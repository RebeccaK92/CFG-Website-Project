
function sendEmail() {
    console.log("yee");
    var email = $('#contact #name').val();
    var message = $('#contact textarea').val();
    window.location.href = 'mailto:cfg.projectrl@gmail.com?subject=Comments ' + name + ' (' + email + ')' + '&body=' + message;
};
