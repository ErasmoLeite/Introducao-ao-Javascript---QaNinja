// var album = {
//     title: 'Black Album',
//     released: 1991,
//     showInfo: function()    {
//         console.log(`Titulo do Album: ${this.title}, lançado em: ${this.released}`)
//     }

// }

var album = new Object();

album.title = 'Black Album'
album.released = 1991;
album.showInfo = function() {
    console.log(`Titulo do Album: ${this.title}, lançado em: ${this.released}`)

}
album.showInfo();
console.log(album.title);
console.log(album.released);

album.tracks =  ['Enter Sandman', 'The Unforgiven', 'Nothing Else Matters', 'The Struggle Within']

album.showTracks = function() {
    this.tracks.forEach(function(value, key){
      console.log(value)  


    })

}

album.showTracks();