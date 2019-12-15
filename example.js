// So, you would just require the module name.

var hastebin = require('./src/client');

// Then, we can make a varible saying what we want in the hasteb.in post.

var bar = 'hello'
    bar += ' world!';

// now, we can use the hastebin varible to post something..

    hastebin('hello').then(post => { // requiring the post so we can retrive a link
        console.log(post); // this will log the link
    });

// now if we run the code.. 
// we'll get our hasteb.in link. That will contain our code.

// Lets say we want a different extenstion...

    hastebin('hello', { extension: "txt" }).then(post => { // requiring post again to retrive a link. if there is no extension, its automatically JavaScript.
        console.log(post); // log it into the console so we can get the code.
    });

// or, you can use async await...

    async function() { // has to be aysnc to use 'await'
     const haste = await hastebin('hello', { extension: "js" }); // looks better
       console.log(haste); // log it into the console for grabs
    };
