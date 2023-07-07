import API_SERVER from "./api.server.js";

const END_POINTS = {
  GET_ALL: "/users",
  CREATE: "/users/create",
  UPDATE: "/users/update",
  DELETE: "/users/delete/",
  GET_BY_CODE: "/users/",
  LOGIN: "/users/login",
};

export const loginUser = async (user) => {
  const path = `${API_SERVER}${END_POINTS.LOGIN}`;

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
    return new PromiseRejectionEvent(error.message);
    // return { error: error.message, alert: true };
  }
};

export const getAllUsers = async () => {
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

export const createUser = async (user) => {
  const path = `${API_SERVER}${END_POINTS.CREATE}`;
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
      throw new Error(data.error);
    }
    return data;
  } catch ({ message }) {
    return { error: message };
  }
};

export const updateUser = async (user) => {
  const path = `${API_SERVER}${END_POINTS.UPDATE}`;
  try {
    const response = await fetch(path, {
      method: "PUT",
      body: JSON.stringify(user),
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

export const deleteUser = async (userCode) => {
  const path = `${API_SERVER}${END_POINTS.DELETE}${userCode}`;
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

export const getUserByCode = async (userCode) => {
  const path = `${API_SERVER}${END_POINTS.GET_BY_CODE}${userCode}`;
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
