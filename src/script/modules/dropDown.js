'use strict';

(function () {
    var arrowsTop = document.querySelectorAll('.slider_up-arrow');
    var arrowsDown = document.querySelectorAll('.slider_down-arrow');
    var dropDownDisplay = document.querySelectorAll('.drop-down__service__display');
    var dropDown_1 = document.querySelector('.drop-down__service_1');
    var dropDown_2 = document.querySelector('.drop-down__service_2');
    var dropDown_3 = document.querySelector('.drop-down__service_3');
    var dropDown_4 = document.querySelector('.drop-down__service_4');
    var dropDown_5 = document.querySelector('.drop-down__service_5');
    var dropDown_6 = document.querySelector('.drop-down__service_6');

    if(dropDown_1 !== undefined) {
        dropDown_1.addEventListener('click', function () {
            var i=0;
            if (dropDown_1.className === 'drop-down__service drop-down__service_1 drop-down__active') {
                arrowsTop[i].style.display = "none";
                arrowsDown[i].style.display = "";
                dropDownDisplay[i].style.display = "none";
                dropDown_1.classList = 'drop-down__service drop-down__service_1';
            } else {
                arrowsTop[i].style.display = "";
                arrowsDown[i].style.display = "none";
                dropDownDisplay[i].style.display = "";
                dropDown_1.classList = 'drop-down__service drop-down__service_1 drop-down__active';
            }
        })
    }


    if(dropDown_2 !== undefined) {
        dropDown_2.addEventListener('click', function () {
            var i = 1;
            if (dropDown_2.className === 'drop-down__service drop-down__service_2 drop-down__active') {
                arrowsTop[i].style.display = "none";
                arrowsDown[i].style.display = "";
                dropDownDisplay[i].style.display = "none";
                dropDown_2.classList = 'drop-down__service drop-down__service_2';
            } else {
                arrowsTop[i].style.display = "";
                arrowsDown[i].style.display = "none";
                dropDownDisplay[i].style.display = "";
                dropDown_2.classList = 'drop-down__service drop-down__service_2 drop-down__active';
            }
        })
    }

    if(dropDown_3 !== undefined) {
        dropDown_3.addEventListener('click', function () {
            var i = 2;
            if (dropDown_3.className === 'drop-down__service drop-down__service_3 drop-down__active') {
                arrowsTop[i].style.display = "none";
                arrowsDown[i].style.display = "";
                dropDownDisplay[i].style.display = "none";
                dropDown_3.classList = 'drop-down__service drop-down__service_3';
            } else {
                arrowsTop[i].style.display = "";
                arrowsDown[i].style.display = "none";
                dropDownDisplay[i].style.display = "";
                dropDown_3.classList = 'drop-down__service drop-down__service_3 drop-down__active';
            }
        })
    }

    if(dropDown_4 !== undefined) {
        dropDown_4.addEventListener('click', function () {
            var i = 3;
            if (dropDown_4.className === 'drop-down__service drop-down__service_4 drop-down__active') {
                arrowsTop[i].style.display = "none";
                arrowsDown[i].style.display = "";
                dropDownDisplay[i].style.display = "none";
                dropDown_4.classList = 'drop-down__service drop-down__service_4';
            } else {
                arrowsTop[i].style.display = "";
                arrowsDown[i].style.display = "none";
                dropDownDisplay[i].style.display = "";
                dropDown_4.classList = 'drop-down__service drop-down__service_4 drop-down__active';
            }
        })
    }

    if(dropDown_5 !== undefined) {
        dropDown_5.addEventListener('click', function () {
            var i = 4;
            if (dropDown_5.className === 'drop-down__service drop-down__service_5 drop-down__active') {
                arrowsTop[i].style.display = "none";
                arrowsDown[i].style.display = "";
                dropDownDisplay[i].style.display = "none";
                dropDown_5.classList = 'drop-down__service drop-down__service_5';
            } else {
                arrowsTop[i].style.display = "";
                arrowsDown[i].style.display = "none";
                dropDownDisplay[i].style.display = "";
                dropDown_5.classList = 'drop-down__service drop-down__service_5 drop-down__active';
            }
        })
    }

    if(dropDown_6 !== undefined) {
        dropDown_6.addEventListener('click', function () {
            var i = 5;
            if (dropDown_6.className === 'drop-down__service drop-down__service_6 drop-down__active') {
                arrowsTop[i].style.display = "none";
                arrowsDown[i].style.display = "";
                dropDownDisplay[i].style.display = "none";
                dropDown_6.classList = 'drop-down__service drop-down__service_6';
            } else {
                arrowsTop[i].style.display = "";
                arrowsDown[i].style.display = "none";
                dropDownDisplay[i].style.display = "";
                dropDown_6.classList = 'drop-down__service drop-down__service_6 drop-down__active';
            }
        })
    }


})();