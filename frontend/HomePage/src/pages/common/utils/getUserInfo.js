const getUserInfo = async () => {
    const response = await fetch("http://localhost:3000/getSessionData", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",}).then((res) => res.json());
        return {"isLoggedIn": response.privilege != -1, "privilege": response.privilege};
}

export default getUserInfo;