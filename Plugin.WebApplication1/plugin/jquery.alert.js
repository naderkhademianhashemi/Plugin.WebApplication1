jQuery.fn.warning = function () {
    return this.each(function () {
        alert($(this).text());
    });
};