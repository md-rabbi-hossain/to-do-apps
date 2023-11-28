const Getdata = () => {
    const data = localStorage.getItem('key')
    if (data) {
        return JSON.parse(data)
    }
    return []
}

export default Getdata

///onClick={() => getodo(index)}