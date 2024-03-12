import { gameSetup } from './main';

document.addEventListener('DOMContentLoaded', function () {
    const backgroundMusic = document.getElementById(
        'background-music',
    ) as HTMLAudioElement;

    backgroundMusic.play();
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach((canvas: HTMLCanvasElement) => {
        canvas.style.display = 'none';
    });
    const instruct = document.getElementById('instruct') as HTMLInputElement;
    instruct.style.display = 'none';
    const close = document.querySelector('.btn-close') as HTMLInputElement;
    close.onclick = () => {
        instruct.style.display = 'none';
    };
    const form = document.getElementById('form-user') as HTMLFormElement;
    const errMessage = document.getElementById('error') as HTMLFormElement;
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name') as HTMLInputElement;

        const name = nameInput.value.trim();

        let isValid = true;
        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
        if (name.length === 0) {
            errMessage.textContent = 'Tên không được trống';
            isValid = false;
        }
        if (name.length === 1) {
            errMessage.textContent = 'Tên phải nhiều hơn 1 kí tự';
            isValid = false;
        }
        if (specialChars.test(name)) {
            errMessage.textContent = 'Tên không được dùng các kí tự đặc biệt';
            isValid = false;
        }

        if (isValid) {
            backgroundMusic.pause();
            instruct.style.display = 'block';
            localStorage.setItem('playerName', name);
            const canvases = document.querySelectorAll('canvas');
            canvases.forEach((canvas: HTMLCanvasElement) => {
                canvas.style.display = 'block';
            });
            form.style.display = 'none';

            gameSetup();
        }
    });
});
