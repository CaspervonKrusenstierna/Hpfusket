const refresh = async () => {
    const response = await fetch("http://localhost:3000/refresh", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",}).then((res) => res.json());
        return response.success;
}

export default refresh;