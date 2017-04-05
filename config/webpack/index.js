const merge=require('webpack-merge');

const base=require('./base.js');
const DEV=require('./dev.js');
const PROD=require('./prod.js');
const TEST=require('./test.js');
const env=require('../constants/env.js');

const dev=merge(base,DEV);
const prod=merge(base,PROD);
const test=merge(base,TEST);

module.exports={
    [env.dev]:dev,
    [env.prod]:prod,
    [env.test]:test,
}


