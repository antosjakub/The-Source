const draggableElements = document.querySelectorAll('.draggable');

let offsetX = 0;
let offsetY = 0;
let activeElement: HTMLElement | null = null;
let isDragging = false;

draggableElements.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
        activeElement = element as HTMLElement;
        isDragging = true;
        const mouseEvent = event as MouseEvent;
        offsetX = mouseEvent.clientX - activeElement.getBoundingClientRect().left;
        offsetY = mouseEvent.clientY - activeElement.getBoundingClientRect().top;
        activeElement.style.cursor = 'grabbing';
    });
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging || !activeElement) return;

    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    activeElement.style.left = `${x}px`;
    activeElement.style.top = `${y}px`;
});

document.addEventListener('mouseup', () => {
    if (activeElement) {
        activeElement.style.cursor = 'grab';
        activeElement = null;
    }
    isDragging = false;
});
