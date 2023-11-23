function SongsManager(){

    const _songs ={}

    function addSong(name , url){
        _songs[name] = url
    }

    function getSong(name){
       console.log( _songs[name])
    }

    return {
        addSong,
        getSong
    }
}


const songsManager = SongsManager()


songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ