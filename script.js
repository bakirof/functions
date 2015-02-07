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

                this[i].classList.add(argum[j]);
            }
        }
        return this;
    };
    Select.prototype.toggleClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {

                this[i].classList.toggle(argum[j]);
            }
        }
        return this;
    };

    Select.prototype.removeClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {

                this[i].classList.remove(argum[j]);
            }
        }
        return this;
    };

    Select.prototype.wrap = function (arg) {
        var md;
        var parent;
        var tag;
        for (var i = 0; i < this.length; i++) {
            parent = this[i].parentNode;
            this[i] = findMd(arg, this[i]);
            parent.appendChild(this[i]);
        }

    };

    function findMd(arg, arg2) {
        var first;
        var second;
        var third = [];
        for (var i = 0; i < arg.length; i++) {
            if (arg[i] == '/') {
                first = arg.substr(0, i - 1);
                second = arg.substr(i - 1, arg.length);
                third = first + arg2 + second;
                return third;

            }
        }

    }

    Select.prototype.append = function (arg) {
        var html;
        var all;
        for (var i = 0; i < this.length; i++) {
            html = this[i].innerHTML;
            all = html + arg;
            console.log(all);
            this[i].innerHTML = all;
        }
        return this;
    };


    Select.prototype.prepend = function (arg) {
        var html;
        var all;
        for (var i = 0; i < this.length; i++) {
            html = this[i].innerHTML;
            all = arg+html;
            console.log(all);
            this[i].innerHTML = all;
        }
        return this;
    };
    $$('p').prepend('<div style="background-color: lightblue">ok</div>').append('<div style="background-color: lightblue">ok</div>');
});
