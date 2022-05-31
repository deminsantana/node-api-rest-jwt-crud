const app = require('./app')
const { dbConnect } = require('./database')

app.listen(4000);

console.log('Server listen on port', 4000)