const { performance, PerformanceObserver } = require('perf_hooks')

const array = []
const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
        console.log(entry);
    });
});
observer.observe({ entryTypes: ["measure"], buffer: true })


const time = () => {
   const obj = {
    id: 1
   }
   array.push(obj)
}

function perf_promise() {
    new Promise((res, _) => {
        time()
        res()
    })
}

function obs(loop) {
    console.log('Running promise test')
    performance.mark('start');
    for (let i = 0; i < loop; i++){
        perf_promise()
    }
    performance.mark('end');
    performance.measure('perf_promise', 'start', 'end');
    console.log('Size', array.length)
}

module.exports = obs
