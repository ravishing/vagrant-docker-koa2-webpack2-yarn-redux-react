const config=require('./config/webpack/index.js');

module.exports = env=>{
    console.log(env);
    return config[env.ENV_MODE];
}