const getServerURL = () => {
    if (process.env.NODE_ENV === "production") {
        return "https://zync-backend.herokuapp.com/"
    }
    return "http://localhost:5000"
}

export default getServerURL()