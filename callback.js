const { performance, PerformanceObserver } = require('perf_hooks')

const array = []
// Create a PerformanceObserver to collect performance entries
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

function perf_callback(performance, loop) {
    for (let i = 0; i < loop; i++) {
        time(() => {
        })
    }
    performance.mark('end');
    performance.measure('perf_callback', 'start', 'end');
}

function obs(loop) {
    console.log('Running callback test')
    performance.mark('start');
    perf_callback(performance, loop)
    console.log('Size', array.length)
}

module.exports = obs


