// index.js

const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hola, estamos en época de tregua  [ '+process.env.SERVER_NAME+' ]')
})

//init war
app.get('/'+process.env.SERVER_NAME, (req, res) => {
    let n = Math.floor(Math.random() * (11 - 3) + 3);
    console.log(`Número de rondas de ataque [ ${n} ]`);
    for(i=1;i<=n;i++){
        console.log(`Ronda [ ${i} de ${n}  ]`);
        const url = 'http://'+process.env.TARGET_HOST+'/'+process.env.TARGET_URI+`/atacked/${n}/${i}`;
        const status = http.get(url,(res, error)=>{
            console.log(`${process.env.SERVER_NAME} atacando server ${process.env.TARGET_HOST}`);
        }).on('error', ((e)=>{ res.send(e.message) }));
    }
    res.send('Enviando [ '+n+' ] peticiones al server >>------> '+process.env.TARGET_URI)
})

app.get('/'+process.env.SERVER_NAME+'/atacked/:mq/:nq', (req, res) => {
    const n = req.params.nq;
    const m = req.params.mq;
    console.log(`Recibiendo peticion [ ${m} de ${n}]`);
    res.sendStatus(200);
})

app.listen(process.env.PORT, () => console.log(process.env.SERVER_NAME+' is up and running'));