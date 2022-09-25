
function reSizeFont() {
    const rngElRef = document.querySelector('#font-size-control');
    const textElRef = document.querySelector('#text'); 

    rngElRef.addEventListener('input', (event) => {
        textElRef.style.fontSize = event.target.value + 'px';
    })
}


reSizeFont();


