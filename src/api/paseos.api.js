import API_SERVER from "./api.server.js";

const END_POINTS = {
  GET_ALL: "/paseos",
  CREATE: "/paseos/create",
  UPDATE: "/paseos/update",
  DELETE: "/paseos/delete/",
  GET_BY_USER_CODE: "/paseos/user/",
  GET_BY_WALKER_CODE: "/paseos/walker/",
  GET_BY_NUM: "/paseos/",
};

export const getAllPaseos = async () => {
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

export const createPaseo = async (paseo) => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(paseo),
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

export const updatePaseo = async (paseo) => {
  const path = `${API_SERVER}${END_POINTS.UPDATE}`;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(paseo),
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

export const deletePaseo = async (paseoCode) => {
  const path = `${API_SERVER}${END_POINTS.DELETE}${paseoCode}`;
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

export const getPaseosByUserCode = async (userCode) => {
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

export const getPaseosByWalkerCode = async (walkerCode) => {
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

export const getPaseoByNum = async (paseoNum) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_NUM}${paseoNum}`;
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
