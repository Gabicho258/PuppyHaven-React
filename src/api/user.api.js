export const login1 = () => {
  const path = `https://puppy-haven.onrender.com/api/users/login`;
  const user = {
    usuCor: "correo@test.com",
    usuCon: "contrasena10",
  };
  return new Promise((resolve, reject) => {
    fetch(path, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
        // console.log(data);
      })
      .catch((err) => {
        reject({ error: err, alert: true });
      });
  });
};
export const login2 = async () => {
  const path = `https://puppy-haven.onrender.com/api/users/login`;
  const user = {
    usuCor: "correo@test.com1",
    usuCon: "contrasena10",
  };
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return { error: error.message, alert: true };
  }
};
