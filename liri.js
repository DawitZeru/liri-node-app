require("dotenvy").config();

var axios = required("axios");

var fs = require("fs");

var request = required("request");

var keys = request("./keys.js");

var spotify = require("node-spotify-api");

var moment = require("moment");

var commad = process.argv[2];

var input = process.argv.slice(3).join("");

//if statement for arguments
if (action === "concert-this") {
    bandsInTown(inputs);
}
if (action === "spotify-this-song") {
    spotify(inputs);
}
if (action === "movie-this") {
    movie(inputs);
}
if (action === "do-what-it-says") {
    doThis(inputs);
};

//spotify function for calling track information
function spotify(inputs) {
    var spotify = new spotify(keys.spotify);
    if (!inputs) {
        inputs = 'The Sign - ace of base';
    }
    spotify.search({type: 'track', query: inputs }, function(err, data) {
        if (err) {
            console.log('Error occured: ' + err);
        }
        var songIngfo = fdata.tracks.items;
        console.log("Artist(s): " + songIngfo[0].artists[0].name);
        console.log("Song Name: " + songIngfo[0].name);
        console.log("Preview Links: " + songIngfo[0].preview_url);
    });
};

//OMDB Function for calling movie titles
function movie(inputs) {

    var queryURL = "http://www.omdbapi.com/?i=" + inputs + "&y=&plot=short&apikey=8600b02a";
    request(queryURL, function(error, response, body) {
        if (!inputs) {
inputs = 'Mr Nobody';
        }
          if (!error && response.statusCode === 200) {
              console.log("Title: " + JSON.parse(body).Title);
              console.log("Release Year: " + JSON.parse(body).Year);
              console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
              console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Rating[1].Value);
              console.log("Country: " + JSON.parse(body).Country);
              console.log("Languge: " + JSON.parse(body).Language);
              console.log("Plot: " + JSON.parse(body).Plot);
              console.log("Actors: " + JSON.parse(body).Actors);
          }
    });
};

//bands in town function for pulling concert information
function bandsInTown(inputs) {

    var queryURL = "https://rest.bandsintown.com/artists/" + inputs + "/events?app_id=DawitZeru"

    request(queryURL, function(error, response, body) {
        if (!inputs) {
            inputs = 'Mr Nobody';
        }
        if (!error && response.statusCode ===200) {

            var concert = JSON.parse(body)
            var date = moment(concert[0].datetime).format("MM/DD/YYYY")
            console.log("Venue: " + concert[0].venue.name);
            console.log("Location: " + concert[0],venue.city);
            console.log("Time: " + date);
        }
    });
};

//function to read random.txt and run another function
function doThis() {
    fs.readFile('random.txt', "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        } 
        var randomArr = data.split(",");
        if (randomArr[0] === "spotify-this-song") {
            var songName = randomArr[1].slice(1, -1);
            spotify(songName);
        }
        else if (randomArr[0] === "consert-this") {
            var bandName = randomArr[1].slice(1, -1);
            bandsInTown(bandName);
        }
        else if (randomArr[0] === "movie-this") {
            var movieName = randomArr[1].slice(1, -1);
        }
    });
};
// var spotifyKeys = new Spotify({
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
// });




