import API_SERVER from "./api.server.js";

const END_POINTS = {
  GET_ALL: "/mascotas",
  CREATE: "/mascotas/create",
  GET_BY_CODE: "/mascotas/",
  DELETE: "/mascotas/delete/",
  UPDATE: "/mascotas/update",
  GET_BY_USER_CODE: "/mascotas/user/",
};

export const getAllMascotas = async () => {
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

export const createMascota = async (mascota) => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(mascota),
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

export const getMascotaByCode = async (mascotaCode) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_CODE}${mascotaCode}`;
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

export const deleteMascota = async (mascotaCode) => {
  const path = `${API_SERVER}${END_POINTS.DELETE}${mascotaCode}`;
  try {
    const response = await fetch(path, {
      method: "DELETE",
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
export const updateMascota = async (mascota) => {
  const path = `${API_SERVER}${END_POINTS.UPDATE}`;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(mascota),
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

export const getMascotaByUserCode = async (userCode) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_USER_CODE}${userCode}`;
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
