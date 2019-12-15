// So, you would just require the module name.

var hastebin = require('./src/client');

// Then, we can make a varible saying what we want in the hasteb.in post.

var bar = 'hello'
    bar += ' world!';

// now, we can use the hastebin varible to post something..

    hastebin().then(post => { // requiring the post so we can retrive a link
        console.log(post); // this will log the link
    });

// now if we run the code.. 
// we'll get https://hasteb.in/nanidoze.js. That will contain our code.