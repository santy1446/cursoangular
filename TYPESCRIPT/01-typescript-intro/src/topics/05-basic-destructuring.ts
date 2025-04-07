interface AudioPlayer {
    audioVolumnme: number;
    songDuration: number;
    songName: string;
    details: Details
}

interface Details {
    artist: string;
    year: string;
}

const audioPlayer: AudioPlayer = {
    audioVolumnme: 90,
    songDuration: 120,
    songName: 'Song',
    details: {
        artist: 'Artist',
        year: '2023'
    }
}

const songDuration = 'song'

const { audioVolumnme, songDuration: song, songName, details } = audioPlayer;
const { artist } = details;
console.log(audioVolumnme, song, songName, artist);


//Arrays

const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error(trunks);



export {}