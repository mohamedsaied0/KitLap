const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user && user.accessToken) {

        return console.log("userAccessToken", user.accessToken)
    }
    else { return {} };
}
export default authHeader