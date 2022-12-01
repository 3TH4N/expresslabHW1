const express = require('express');

const app = express();
const fs = require('fs')
app.engine('hypatia', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)

        const rendered = content.toString()
            .replace('#title#', '<title >' + options.title + '</title>')
            .replace('#img#', `<img src="applemusic.png" + 'width="300" height="400">"`)
            .replace('#message#', '<h1 style="color: blue">' + options.message + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered)
    })
})
app.set('views', './views')
app.set('view engine', 'hypatia')
app.listen(3000, function () {
    console.log('Listening on port 3000');
});

app.get('/Drake', (req, res) => {
    res.render('1', {
        title: 'Artist', message: 'Drake', img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.OGn3HPtSvMg1GopjoCuJcAHaEk%26pid%3DApi&f=1&ipt=f224c16b42274d1c4ba1ef4fbc7372449fdf23eecd9642d90adea0c9cbd381aa&ipo=images', content: 'All-time fav artist'
    })
})

app.get('/Yeat', (req, res) => {
    res.render('2', {
        title: 'Artist', message: 'Yeat', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JEqePWlSOCLHWYbsSeJwLAHaHa%26pid%3DApi&f=1&ipt=661ad276b9a31bd40a535bb72c7d9fcbf3ce87f2dc493e8f3cd1ae66b38f3706&ipo=images', content: 'Fav new gen artist'



    })
})

app.get('/Tory Lanez', (req, res) => {
    res.render('3', {
        title: 'Artist', message: 'Tory Lanez', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tehJBahO3Smp5_flzVkQYQHaE8%26pid%3DApi&f=1&ipt=c5284b2cb997b637b82963a6b11ca327f07f33d3050dcd2695d20fe84556bd06&ipo=images', content: 'Fav r&b artist'
    })
})

app.get('/Chris Brown', (req, res) => {
    res.render('4', {
        title: 'Artist', message: 'Chris Brown', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.AaUvUCtAsg3VNpNdh9lrOAHaEK%26pid%3DApi&f=1&ipt=1880c9cb806370df911e8118a95260aae9578fe7fe95921b12b91c591802716a&ipo=images', content: 'All time r&b artist'


    })
})

app.get('/Lil Uzi Vert', (req, res) => {
    res.render('5', {
        title: 'Artist', message: 'Lil Uzi Vert', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7rcINmVchcrXjC0mROxQ0AHaE7%26pid%3DApi&f=1&ipt=4ba339c37094a58c1b028c6d251ce764421e9bb3f2ca7785708819387b0bdbac&ipo=images', content: `Fav rapper as well`
    })
})

