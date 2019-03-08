'use strict';

const {Worker, isMainThread} = require('worker_threads');

if(isMainThread)
    console.log("I'm ok, because I'm alpha main");
else
    console.log("I'm sad, because I can't load bcrypt");

const bcrypt = require('bcrypt');

function runTestWorker(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./index.js', workerData);

        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}

async function run() {
    const result = await runTestWorker('I will crash your app  (｡•́︿•̀｡)');
    console.log(result);
}

if(isMainThread)
    run().catch(err => console.error(err));