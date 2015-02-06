$(document).ready(function () {

    var $$ = function (arg) {
        var arg2 = document.querySelectorAll(arg);
        return new Select(arg2);

    };


    var Select = function (arg2) {
        for (var i = 0; i < arg2.length; i++) {
            this.push(arg2[i]);
        }

    };

    Select.prototype = Object.create(new Array());

    Select.prototype.width = function (arg1) {
        if (arg1) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.width = arg1 + 'px';
            }
            return this;
        }
        else {
            return this[0].style.width;
        }
    };

    Select.prototype.height = function (arg1) {
        if (arg1) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.height = arg1 + 'px';
            }
            return this;
        }
        else {
            return this[0].style.height;
        }
    };

    Select.prototype.hasClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {
                if (this[i].classList.contains(argum[j])) {
                    return true;
                }
            }
        }
        return false;
    };

    Select.prototype.addClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {
                console.log(arguments[i]);
                this[i].classList.add(argum[j]);
            }
        }
        return this;
    };
    if($$('.ok').addClass('okey').hasClass('okey')){
        alert('ok');
    }

});
