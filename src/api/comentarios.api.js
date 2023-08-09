import API_SERVER from "./api.server.js";

const END_POINTS = {
  GET_ALL: "/comentarios/",
  CREATE: "/comentarios/create",
  GET_BY_WALKER_CODE: "/comentarios/walker/",
};

export const getAllComentarios = async () => {
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

export const createComentario = async (comentario) => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(comentario),
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

export const getComentariosByWalkerCode = async (walkerCode) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_WALKER_CODE}${walkerCode}`;
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
