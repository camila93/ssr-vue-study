const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.html', 'utf-8')
})

server.get('*', (req, res) => {
    const context = {
        title: 'Titulo da página'
    }

    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>The visited URL is: {{ url }}</div>`
    })
    
    renderer.renderToString(app, context, (err, html) => {
        res.send(html);
    })
})

server.listen(8080)