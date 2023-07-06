import API_SERVER from "./api.server.js";

const END_POINTS = {
  CREATE: "/calificaciones/create",
  GET_ALL: "/calificaciones",
  UPDATE: "/calificaciones/update",
  GET_BY_CODE: "/calificaciones/",
};

export const createCalificacion = async () => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;
  const calificacionDefault = {
    calMeGus: 0,
    calNoGus: 0,
  };
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(calificacionDefault),
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

export const getAllCalificaciones = async () => {
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

export const updateCalificacion = async (calificacion) => {
  const path = `${API_SERVER}${END_POINTS.UPDATE}`;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(calificacion),
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

export const getCalificacionByCode = async (calCod) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_CODE}${calCod}`;
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
