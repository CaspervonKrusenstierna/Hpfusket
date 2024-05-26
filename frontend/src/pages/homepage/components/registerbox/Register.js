export default async function Register(name, email, password){
    return await fetch("http://127.0.0.1:3000/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({"name": name, "email": email, "password": password})
      }).then((res) => res.json());
}