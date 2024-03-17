document.addEventListener('DOMContentLoaded', () => {
    const click = document.getElementById(
        'click-music',
    ) as HTMLAudioElement;
    const fly = document.getElementById(
        'fly-music',
    ) as HTMLAudioElement;
    document.
        addEventListener('keydown', (e) => {
            if (e.key === 'z' || e.key === 'x') {
                click.play()
                
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.key === 'z' || e.key === 'x') {
                click.pause()
                
            }
        });
});
