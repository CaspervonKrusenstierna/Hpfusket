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
        body: JSON.stringify({"name": loginInfo.current.Username, "password": loginInfo.current.Password, "remember": loginInfo.current.RememberMe})
      }).then((res) => res.json());
}