const fs=require('fs')
if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err)
            throw err
        console.log(" new file created")
    }
    )
}
else{
    fs.rmdir('./new',(err)=>{
        if(err)
            throw err
        console.log("created file deleted")
    }
    )
}


process.on('uncaughtException',(err)=>{
    console.log('uncauht exception: $(err)')
    process.exit(1)
})

