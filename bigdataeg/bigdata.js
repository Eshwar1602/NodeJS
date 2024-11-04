const { isUtf8 } = require('buffer')
const fs=require('fs')
const path=require('path')

// let back=path.join(__dirname,'./bigdataeg')
const read_stream=fs.createReadStream(path.join(__dirname,'bigfile.txt',), 'utf8')
const write_stream=fs.createWriteStream(path.join(__dirname,'newbigdata.txt'))

// read_stream.on('data',(dataChunk)=> {
//    write_stream.write(dataChunk)}
// )

read_stream.pipe(write_stream)