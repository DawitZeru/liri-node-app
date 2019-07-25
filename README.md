# liri-node-app

Overview

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Guide

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

Make a new GitHub repository called liri-node-app and clone it to your computer.

To retrieve the data that will power this app, you'll need to send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. 

You'll find these Node packages crucial for your assignment.


** Problem with my App

// I keep getting this error
// I have tried to get help through google, github, stackoverflow, and i slacked it out to my classmates.
// I don't seem to get it working.

// dawit@DawitZeru MINGW64 ~/Desktop/BCHomeworks/liri-node-app (master)
// $ node liri.js do-what-it-says
// internal/modules/cjs/loader.js:583
//     throw err;
//     ^

// Error: Cannot find module 'dotenvy'
//     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
//     at Function.Module._load (internal/modules/cjs/loader.js:507:25)
//     at Module.require (internal/modules/cjs/loader.js:637:17)
//     at require (internal/modules/cjs/helpers.js:22:18)
//     at Object.<anonymous> (c:\Users\dawit\Desktop\BCHomeworks\liri-node-app\liri.js:1:63)
//     at Module._compile (internal/modules/cjs/loader.js:689:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
//     at Module.load (internal/modules/cjs/loader.js:599:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:530:3)

// dawit@DawitZeru MINGW64 ~/Desktop/BCHomeworks/liri-node-app (master)
