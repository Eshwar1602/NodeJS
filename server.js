//console.log("hello")
// console.log(global)

const os=require('os')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);
//console.log(os.tmpdir())

// We can find these methods in official node site


// const path=require('path')

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

const math=require('./math');
//console.log(math.add(3,6))

const {add,sub}=require('./math');
// console.log(add(3,6))
// console.log(sub(3,6))