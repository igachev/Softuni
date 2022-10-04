function movies(arrayOfMovies) {


    let moviesInformation = []
for(let i = 0; i < arrayOfMovies.length; i++) {
    
   if(arrayOfMovies[i].includes('addMovie')) {
   let movieInfo = arrayOfMovies[i].split('addMovie ')
   let movieName = movieInfo[1]
        moviesInformation.push({name : movieName})
   }
  
    if(arrayOfMovies[i].includes('onDate')) {
    let movieInfo = arrayOfMovies[i].split(' onDate ')
    let movieName = movieInfo[0]
    let date = movieInfo[1]
    for(let j = 0; j < moviesInformation.length; j++) {
        if(moviesInformation[j].name === movieName) {
            moviesInformation[j]['date'] = date;
        }
    }
   }

   if(arrayOfMovies[i].includes('directedBy')) {
    let movieInfo = arrayOfMovies[i].split(' directedBy ')
    let movieName = movieInfo[0]
    let director = movieInfo[1]
     for(let j = 0; j < moviesInformation.length; j++) {
        if(moviesInformation[j].name === movieName) {
            moviesInformation[j]['director'] = director
        }
     }
    }
 
}

moviesInformation.forEach((movie) => {
    if(movie.name && movie.date && movie.director) {
        let json = JSON.stringify(movie)
        console.log(json);
    }
})

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])