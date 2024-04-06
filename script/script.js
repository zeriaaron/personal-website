
let h1 = document.getElementById('changeH1');

h1.addEventListener('click', () => {
    switch(h1.innerText) {
        case 'My Picture':
            h1.innerText = 'Zeri Picture';
            break;
        case 'Zeri Picture':
            h1.innerText = 'Still Picture';
            break;
        case 'Still Picture':
            h1.innerText = 'My Picture';
            break;
        default:
            h1.innerText = 'My Picture';
            break;
    }
});

