(function () {

    var showModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var showClassRemove = document.querySelectorAll('.modal');
        for (var i = 0; i < showClassRemove.length; i++) {
            showClassRemove[i].classList.remove('show');
        }

    };
    var modalLinks = document.querySelectorAll('.show-modal');

    for (var i = 0; i < modalLinks.length; i++) {
        modalLinks[i].addEventListener('click', showModal);
    }

    var hideModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    var closeButtons = document.querySelectorAll('.modal .close');

    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', hideModal);
    }

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    var modals = document.querySelectorAll('.modal');

    for (var i = 0; i < modals.length; i++) {
        modals[i].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
})();