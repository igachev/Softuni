function gramophone(band,album,song) {
let songDuration = (album.length * band.length) * song.length / 2
let rotateTimes = songDuration / 2.5
let output = `The plate was rotated ${Math.ceil(rotateTimes)} times.`
console.log(output);
}

gramophone('Black Sabbath','Paranoid','War Pigs')
gramophone('Rammstein','Sehnsucht','Engel')