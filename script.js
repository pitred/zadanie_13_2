(function () {

    var showModal = function (event) {
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
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

    for (var j = 0; j < closeButtons.length; j++) {
        closeButtons[j].addEventListener('click', hideModal);
    }

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    var modals = document.querySelectorAll('.modal');

    for (var k = 0; k < modals.length; k++) {
        modals[k].addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

})();