/**
 * @param {int} time Hareketsiz kalma süresi
 */

function mouseMoveControl(time) {
    var moveControl;
    window.addEventListener('mousemove', function() {
        var afkTime = time;
        this.clearTimeout(moveControl);
        moveControl = setTimeout(function() {
            alert('Mouse Hareket Ettir!');
        }, afkTime);
    });
}

function windowControl() {
    window.addEventListener('blur', function() {
        /**
         * Aynı sayfada ise
         */
    });
    window.addEventListener('focus', function() {
        /**
         * Farklı bir sayfaya geçmediyse
         */
    });
}

//windowControl();
//mouseMoveControl(3000);