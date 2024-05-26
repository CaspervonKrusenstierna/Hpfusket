export default async function ForgotPassword(email){
    return await fetch("http://127.0.0.1:3000/forgotpassword", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({"email": email})
      }).then((res) => res.json());
}