var draggableElements = document.querySelectorAll('.draggable');
var offsetX = 0;
var offsetY = 0;
var activeElement = null;
var isDragging = false;
draggableElements.forEach(function (element) {
    element.addEventListener('mousedown', function (event) {
        activeElement = element;
        isDragging = true;
        var mouseEvent = event;
        offsetX = mouseEvent.clientX - activeElement.getBoundingClientRect().left;
        offsetY = mouseEvent.clientY - activeElement.getBoundingClientRect().top;
        activeElement.style.cursor = 'grabbing';
    });
});
document.addEventListener('mousemove', function (event) {
    if (!isDragging || !activeElement)
        return;
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;
    activeElement.style.left = "".concat(x, "px");
    activeElement.style.top = "".concat(y, "px");
});
document.addEventListener('mouseup', function () {
    if (activeElement) {
        activeElement.style.cursor = 'grab';
        activeElement = null;
    }
    isDragging = false;
});
