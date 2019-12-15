const f = require('node-fetch');
const t = new Date();

    module.exports = async (input, options = {}) => {
        if(!input) throw new Error(`[${t.toLocaleString()}] - Hastebin Error: Input expected`);
        if(typeof options === 'string') options = { url: 'https://hasteb.in', extension: options };
            const url = "url" in options ? options.url : 'https://hasteb.in';
            const extension = "extension" in options ? options.extension : 'js';

            const res = await f(`${url}/documents`, {
                method: 'POST',
                body: input,
                headers: { 'Content-Type' : 'text/plain' }
            });

        if(!res.ok) throw new Error(`[${t.toLocaleString()}] - Hastebin Error: ${res.statusText}`);
            const { key } = await res.json();
        
        return `${url}/${key}.${extension}`;
    }