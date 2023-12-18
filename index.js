const callback = require('./callback')
const promise = require('./promise')


const type = process.argv[2]
const loop = process.argv[3]

if (type == 'c') {
    callback(loop)
} else {
    promise(loop)
}



