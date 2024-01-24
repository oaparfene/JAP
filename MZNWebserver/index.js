import express from 'express';
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import fs from 'fs';

const app = express();
const PORT = 5000;

app.use(bodyParser.text());

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));

app.get('/', (req, res) => {
    console.log('[TEST]');

    res.send('Minizinc Webserver up and running.');
});

app.post('/chuffed', (req, res) => {

    fs.writeFile('mzn/data.dzn', req.body, function (err) {
        console.log("received: ", req.body)
        if (err) throw err;
        console.log('Saved!');
    });

    try {
        exec("minizinc --json-stream --solver Chuffed mzn/model.mzn mzn/data.dzn", {'shell':'powershell.exe'}, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                res.send(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                res.send(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            res.send(`${stdout}`);
            return
        });
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.send(`error: ${error.message}`);
        //return;
    }

});

app.post('/gecode', (req, res) => {

    fs.writeFile('mzn/data.dzn', req.body, function (err) {
        console.log("received: ", req.body)
        if (err) throw err;
        console.log('Saved!');
    });

    try {
        exec("minizinc --json-stream --solver Gecode mzn/model.mzn mzn/data.dzn", {'shell':'powershell.exe'}, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                res.send(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                res.send(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            res.send(`${stdout}`);
            return
        });
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.send(`error: ${error.message}`);
        //return;
    }

});

app.post('/Globalizer', (req, res) => {

    fs.writeFile('mzn/data.dzn', req.body, function (err) {
        console.log("received: ", req.body)
        if (err) throw err;
        console.log('Saved!');
    });

    try {
        exec("minizinc --json-stream --solver Globalizer mzn/model.mzn mzn/data.dzn", {'shell':'powershell.exe'}, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                res.send(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                res.send(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            res.send(`${stdout}`);
            return
        });
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.send(`error: ${error.message}`);
        //return;
    }

});

// todo: collectionInterval is hard constraint and AnticipatedTimeIntervalForActivity is soft constraint