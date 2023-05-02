jQuery.fn.warning = function () {
    return this.each(function () {
        alert('Tag Name:"' + $(this).text("tagName") + '".');
    });
};