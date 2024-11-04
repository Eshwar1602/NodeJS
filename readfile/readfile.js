/*import { readFile } from 'node:fs';

readFile('./textfile/sample.txt', (err, data) => {  //readFile('./textfile/sampl.txt', 'utf8', (err, data) => { if utf included no need to enter .toString
  if (err) throw err;
  console.log(data.toString());
}); 

console.log("jjj")
process.on('uncaughtException' , err => {
    console.error('Uncaught Exception: ${err}')
    process.exit(100);
})

//console.log("hii") // For this code the file name should be readfile.mjs*/

/*
// Instead of import 

const fs=require('fs');
const path=require('path')
// Reading a file
fs.readFile(path.join(__dirname,'textfile','sample.txt'), 'utf8', (err,data)=>{
     if(err) throw err;
     console.log(data)
}
)
process.on('uncaughtException' , err => {
  console.error('Uncaught Exception: ${err}')
  process.exit(1);
})

// Writing a file
fs.writeFile(path.join(__dirname,'textfile','newfile.txt'),'This is new file', (err)=>{
  if(err) throw err
  console.log(" write completed")

  fs.appendFile(path.join(__dirname,'textfile','newfile.txt'),'\n\n1new file', (err)=>{
    if(err) throw err
    console.log("append completed")
  })

  fs.rename(path.join(__dirname,'textfile','newfile.txt'),path.join(__dirname,'textfile','newfile2.txt') , (err)=>{
    if(err) throw err
    console.log("renamecompleted")
  })
})
// if file not exist. this will create new file
fs.appendFile(path.join(__dirname,'textfile','newfile1.txt'),'new file creation done', (err)=>{
if(err)  throw err
console.log("new file creation completed")
})

*/

const fsPromises= require('fs').promises;
const path=require('path')
const fileoperation= async() =>{
  try{
    const data= await fsPromises.readFile(path.join(__dirname,'textfile','newfile1.txt') , 'utf8')
    console.log(data);

     await fsPromises.writeFile(path.join(__dirname,'textfile','promisefile.txt'),'new code with promises')
    console.log("write completed")

    await fsPromises.appendFile(path.join(__dirname,'textfile','promisefile.txt'), '\n\n append complete')
    console.log("append completed")

    await fsPromises.appendFile(path.join(__dirname,'textfile','newpromisefile2.txt'), 'New file creation using append done')
    console.log("new using append done")

    await fsPromises.rename(path.join(__dirname,'textFile','newpromisefile2.txt'),(path.join(__dirname,'textFile', 'File_renamed_Promise2.txt')))
    console.log("Rename completed")

    await fsPromises.appendFile(path.join(__dirname,'textfile','File_renamed_Promise2.txt'), '\n\n File renamed from newpromisefile2.txt---> File_renamed_Promise2.txt')
    console.log("append done")

    // To delete a file
    await fsPromises.writeFile(path.join(__dirname,'textfile','toDelete.txt'),'Deletefile')
    console.log("write completed")

    await fsPromises .unlink(path.join(__dirname,'textFile','toDelete.txt'))
    console.log("Deletion completed")


   /* // To rename folder in the main path or if not exist it will create in the main path
    await fsPromises.rename(path.join(__dirname,'textFile','newpromisefile2.txt'), 'File_renamed_Promise2.txt') // without path it will create the main folder
    console.log("Rename completed") */
  }
  catch(err){
      console.error(err);
  }
  finally{
    console.log("finsihed")
  }
}
fileoperation();



