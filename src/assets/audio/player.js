let audio = new Audio('');

export function playAudio(src) {
    audio.pause();
    audio = new Audio(src);
    audio.play();
}

export function pauseAudio() {
    audio.pause();
}

export function getLettersAudioUri(letter, audioName) {
    const letterSm = letter.toLowerCase();
    const audioNameSm = audioName.toLowerCase();
    return `src/res/audio/letters/${letterSm}/${audioNameSm}.mp3`
}