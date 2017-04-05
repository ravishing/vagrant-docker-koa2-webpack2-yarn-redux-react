import _ from 'underscore'
require.ensure([],require=>{
    require('./module-test.js');
},'test');
console.dir(_);