const path=require('path');
const root_path=path.resolve(__dirname,'../../');
const src_path=path.resolve(root_path,'src');
const build_path=path.resolve(root_path,'public','build');

module.exports={
    dev:'development',
    prod:'production',
    test:'test',
    root_path:root_path,
    src_path:src_path,
    build_path:build_path,
};