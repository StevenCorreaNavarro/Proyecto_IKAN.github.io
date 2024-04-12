function App() { }

window.onload = function (event) {
    var app = new app();
    window.app = app;
}

app.prototype.processingButton = function (event, direction) {
    const carruselList = event.currentTarget.parentNode;
    const track = carruselList.querySelector('.carrusel-track');
    const carrusel = track.querySelectorAll('.carrusel');
    const carruselWidth = carrusel[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;
    let leftPosition = track.style.left ? parseFloat(track.style.left.slice(0, -2)) * -1 : 0;

    if (direction === 'prev') {
        prevAction(leftPosition, carruselWidth, track);
    } else {
        nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }
}

let prevAction = (leftPosition, carruselWidth, track) => {
    if (leftPosition < 0) {
        track.style.left = `${leftPosition + carruselWidth}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
    const remainingSpace = trackWidth - listWidth;
    if (-leftPosition < remainingSpace) {
        track.style.left = `${leftPosition - carruselWidth}px`;
    }
}
// function App() { }
// window.onload = function (event) {
//     var app = new App();
//     // window.app=app;
// }
// App.prototype.processingButton = function (event) {
//     const btn = event.currentTarget;
//     const carruselList = event.currentTarget.parentNode;
//     const track = event.currentTarget.parentNode.querySelector('#track');
//     const carrusel = track.querySelectorAll('.carrusel');

//     const carruselWidth = carrusel[0].offsetWidth;

//     const trackWidth = track.offsetWidth;
//     const listWidth = carruselList.offsetWidth

//     // track.style.left = "" ? leftPosition = track.style.left = 0 : leftPosition=parseFloat(track.style.left.slice(0,-2) * -1);
//     if (track.style.left === "") {
//         leftPosition = 0;
//     } else {
//         leftPosition = parseFloat(track.style.left.slice(0, -2)) * -1;
//     }
//     btn.dataset.button == "button-prev" ? prevAction(leftPosition, carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);

// }


// let prevAction = (leftPosition, carruselWidth, track) => {
//     if (leftPosition > 0) {
//         track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
//     }
// }
// let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
//     if (leftPosition < (trackWidth - listWidth)) {
//         track.style.left = `${-1 * (leftPosition + carruselWidth)}px`
//     }
// }