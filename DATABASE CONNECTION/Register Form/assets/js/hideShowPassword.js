$(document).ready(function() {
    $('.toggle-password').click(function() {
        const targetInput = $($(this).data('target'));
        const type = targetInput.attr('type') === 'password' ? 'text' : 'password';
        targetInput.attr('type', type);

        $(this).text(type === 'password' ? '👁️' : '🙈');
    });
});