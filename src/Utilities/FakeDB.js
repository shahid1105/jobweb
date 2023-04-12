// use local storage to manage cart data
const addToDb = id => {
    let appliedJob = {}

    //get the shopping cart from local storage
    const storedData = localStorage.getItem('applied-job')
    if (storedData) {
        appliedJob = JSON.parse(storedData)
    }

    // add quantity
    const quantity = appliedJob[id]
    if (quantity) {
        const newQuantity = quantity + 1
        appliedJob[id] = newQuantity
    } else {
        appliedJob[id] = 1
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob))
}

const getStoredData = () => {
    let appliedJob = {}

    //get the shopping cart from local storage
    const storedData = localStorage.getItem('applied-job')
    if (storedData) {
        appliedJob = JSON.parse(storedData)
    }
    return appliedJob
}

const removeFromDb = id => {
    const storedData = localStorage.getItem('applied-job')
    if (storedData) {
        const appliedJob = JSON.parse(storedData)
        if (id in appliedJob) {
            delete appliedJob[id]
            localStorage.setItem('applied-job', JSON.stringify(appliedJob))
        }
    }
}

const deleteAppliedJob = () => {
    localStorage.removeItem('applied-job')
}

export { addToDb, getStoredData, removeFromDb, deleteAppliedJob }