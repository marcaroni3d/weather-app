const dom = (() => {
    function logData(data) {
        console.log('Processed Data to DOM:', data)
    }

    return {
        logData
    }
})();

export default dom;