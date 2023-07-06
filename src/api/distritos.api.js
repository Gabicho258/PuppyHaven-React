import API_SERVER from "./api.server.js";

const END_POINTS = {
  GET_ALL: "/distritos",
  CREATE: "/distritos/create",
  UPDATE: "/distritos/update",
  GET_BY_CODE: "/distritos/",
};

export const getAllDistritos = async () => {
  const path = `${API_SERVER}${END_POINTS.GET_ALL}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }
    return data;
  } catch (error) {
    return { error };
  }
};
export const createDistrito = async (name) => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;

  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify({ disNom: name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }
    return data;
  } catch (error) {
    return { error };
  }
};

export const updateDistrito = async (distrito) => {
  const path = `${API_SERVER}${END_POINTS.UPDATE}`;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(distrito),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }
    return data;
  } catch (error) {
    return { error };
  }
};

export const getDistritoByCode = async (disCod) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_CODE}${disCod}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }
    return data;
  } catch (error) {
    return { error };
  }
};
