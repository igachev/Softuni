function createAssemblyLine() {
    return {
  hasClima(device) {
    device.temp = 21
    device.tempSettings = 21
    device.adjustTemp = () => {
        if(device.temp < device.tempSettings) {
            device.temp = device.temp + 1
        }
        else {
            device.temp = device.temp - 1
        }
    }  
 },

  hasAudio(device) {
    device.currentTrack = {name:'',artist:''} || null;
    device.nowPlaying = () => {
       if(device.currentTrack !== null) {
        console.log(`Now playing '${device.currentTrack.name}' by ${device.currentTrack.artist}`);
       }
    }
  },


  hasParktronic(device) {
    device.checkDistance = (distance) => {
        if(distance < 0.1) {
            console.log("Beep! Beep! Beep!")
        }
        else if(distance >= 0.1 && distance < 0.25) {
            console.log("Beep! Beep!");
        }
        else if(distance >= 0.25 && distance < 0.5) {
            console.log("Beep!");
        }
        else {
            console.log('');
        }
    }
  }
}
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();


assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);