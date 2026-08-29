const fs = require('fs');
const os = require('os');

console.log("STEP 1");
// sample.txt
fs.writeFile('sample.txt', 'Hello, the weather is nice today', (err) => {
  if (err) {
    console.error('Error', err);
    return;
  }
  console.log('Done');

// read sample.txt
    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error', err);
        return;
        }
            console.log('File contents:', data);

        fs.writeFile('output.txt', 'This is some sample data.', (err) => {
      if (err) {
        console.error('Error', err);
        return;
      }
      console.log('Data written to output.txt');    
        
        console.log('\n STEP 2: INFORMATION ');
        console.log('Hostname:', os.hostname());
        console.log('Platform:', os.platform());
        console.log('CPU cores:', os.cpus().length);
     });
  });
});