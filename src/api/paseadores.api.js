import API_SERVER from "./api.server.js";

const END_POINTS = {
  GET_ALL: "/walkers",
  CREATE: "/walkers/create",
  UPDATE: "/walkers/update",
  DELETE: "/walkers/delete/",
  GET_BY_CODE: "/walkers/",
  LOGIN: "/walkers/login",
};

export const loginWalker = async (walker) => {
  const path = `${API_SERVER}${END_POINTS.LOGIN}`;

  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(walker),
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
    return new PromiseRejectionEvent(error.message);
    // return { error: error.message, alert: true };
  }
};

export const getAllWalkers = async () => {
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

export const createWalker = async (walker) => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;
  try {
    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(walker),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  } catch ({ message }) {
    return { error: message };
  }
};

export const updateWalker = async (walker) => {
  const path = `${API_SERVER}${END_POINTS.UPDATE}`;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(walker),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error);
    }
    return data;
  } catch ({ message }) {
    return { error: message };
  }
};

export const deleteWalker = async (walkerCode) => {
  const path = `${API_SERVER}${END_POINTS.DELETE}${walkerCode}`;
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

export const getWalkerByCode = async (walkerCode) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_CODE}${walkerCode}`;
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
