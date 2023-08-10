import API_SERVER from "./api.server.js";

const END_POINTS = {
  GET_ALL: "/tramites",
  CREATE: "/tramites/create",
  GET_BY_CODE: "/tramites/",
  GET_BY_USER_ADOPTER_CODE: "/tramites/adopter/",
  GET_BY_USER_OWNER_CODE: "/tramites/dueno/",
  UPDATE: "/tramites/update",
};

export const getAllTramites = async () => {
  const path = `${API_SERVER}${END_POINTS.GET_ALL}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return { error };
  }
};

export const createTramite = async (tramite) => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(tramite),
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
    return { error };
  }
};

export const updateTramite = async (tramite) => {
  const path = `${API_SERVER}${END_POINTS.UPDATE}`;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(tramite),
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
    return { error };
  }
};

export const getTramiteByCode = async (code) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_CODE}${code}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return { error };
  }
};

export const getTramitesByUserAdopterCode = async (code) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_USER_ADOPTER_CODE}${code}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return { error };
  }
};

export const getTramitesByUserOwnerCode = async (code) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_USER_OWNER_CODE}${code}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return { error };
  }
};
