function songs(input) {
    let numberOfSongs = input.shift()
    let typeList = input.pop()
    
    class Song {
    
    constructor(typeList,name,time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
    
    print() {
        if(typeList === 'all') {
            console.log(this.name);
        }
          else  if(this.typeList === typeList) {
        console.log(this.name);
    }
    }
    }
    
    for(let i = 0; i < input.length; i++) {
        let [ type,songName,time ] = input[i].split('_')
        let song = new Song(type,songName,time)
        song.print()
    }
    
    }

songs([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])

    songs([4,

        'favourite_DownTown_3:14',
        
        'listenLater_Andalouse_3:24',
        
        'favourite_In To The Night_3:58',
        
        'favourite_Live It Up_3:48',
        
        'listenLater'])

    songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])