const app = require('./src/config/server')();
const Successlog = require('./src/main/util/logger').successlog;
const port = 3000;

app.listen(port, ()=>{
  Successlog.info(`Server ON. Listening on port ${port}`);
  console.log('This process is your pid ' + process.pid);
});
