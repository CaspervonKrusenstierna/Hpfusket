export default async function Login(username, password, rememberMe){
    return await fetch("http://127.0.0.1:3000/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({"name": username, "password": password, "remember": rememberMe})
      }).then((res) => res.json());
}