const getTimeoutPromise = () => new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new Error('timeout'));
    }, 2000);
});

export function getDelayedPromise(promise) {
    return Promise.race([
        getTimeoutPromise(),
        promise
    ]);
}