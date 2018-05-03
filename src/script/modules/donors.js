'use strict';

(function () {
    var btnBecome = document.querySelector('.donor-program-info__become');
    var btnTakeAdvantage = document.querySelector('.donor-program-info__take-advantage');

    var infoBecome = document.querySelector('.donor-program-info').querySelector('.become');
    var infoTakeAdvantage = document.querySelector('.donor-program-info').querySelector('.take-advantage');


    btnBecome.addEventListener('click', function() {
        infoBecome.style.display = "";
        infoTakeAdvantage.style.display = "none";
    })

    btnTakeAdvantage.addEventListener('click', function() {
        infoBecome.style.display = "none";
        infoTakeAdvantage.style.display = "";
    })



    var btnSperm = document.querySelector('.donor-program-info-slide__sperm');
    var btnEgg = document.querySelector('.donor-program-info-slide__egg');

    var infoSperm = document.querySelector('.donor-program-info-sliders').querySelector('.sperm');
    var infoEgg = document.querySelector('.donor-program-info-sliders').querySelector('.egg');

    btnSperm.addEventListener('click', function() {
        infoSperm.style.display = "";
        infoEgg.style.display = "none";
        btnSperm.classList = "donor-program-info-slide__sperm active";
        btnEgg.classList = "donor-program-info-slide__egg";
    })

    btnEgg.addEventListener('click', function() {
        infoSperm.style.display = "none";
        infoEgg.style.display = "";
        btnSperm.classList = "donor-program-info-slide__sperm";
        btnEgg.classList = "donor-program-info-slide__egg active";
    })


})();