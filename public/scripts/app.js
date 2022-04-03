const movieTitle = document.querySelector(".movie-title");
const movieGenres = document.querySelector(".genres");
const releaseDate = document.querySelector(".relese-date");
const movieDuration = document.querySelector(".movie-duration");
const movieQuote = document.querySelector(".movie-info-quote");
const moviePoster = document.querySelector(".movie-poster-container img");
const movieOverview = document.querySelector(".movie-info-overview");
const footerYear = document.querySelector(".year");

window.onload = () => {
    let url = "https://api.themoviedb.org/3/movie/646380?api_key=c08056179ab0b433543cf2d5a8226f39";

    fetch(url) 
    .then(Response => {
        return Response.json();
    })
    .then(data => {
        console.log(data);
        movieTitle.textContent = data.title;

        let date = new Date(data.release_date);
        releaseDate.textContent = `${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
        movieDuration.textContent = `${data.runtime} minutes`;
        movieQuote.textContent = data.tagline;
        movieOverview.textContent = data.overview;

        let posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePoster.src = posterUrl;
        moviePoster.alt = `${data.title} Poster`;

        let genresToDisplay = "";
        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name}, `
        });
        
        let genresUpdated = genresToDisplay.slice(0, -2) + ".";
        
        movieGenres.textContent = genresUpdated;

        let currentYear = new Date().getFullYear();
        footerYear.textContent = currentYear;
    });
    

}