// https://nodejs.org/docs/latest/api/

const fs = require('node:fs');

// create 
fs.writeFileSync('write.txt','Welcome to Js Backend',function(err){
    if(err) console.err(err);
    else console.log("done");
})

// append
fs.appendFileSync('write.txt',' Appendfile added', function(err){
    if(err) console.err(err);
    else console.log("done");
})

// rename file
fs.rename('write.txt','output.txt', function(err){
    if(err) console.err(err);
    else console.log("done");
})


// copy file
fs.copyFile('output.txt','./copy/copy.txt',function(err){
     if(err) console.error(err);
     else console.log("done");
 })

 // remove file
//  fs.unlink('remove.txt',function(err){
//      if(err) console.error(err);
//      else console.log("removed");
//  })

//remove folder
// fs.rm('./remove',{recursive: true}, function(err){
//      if(err) console.error(err);
//      else console.log("removed");
//  })


//read file
fs.readFile('output.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 