const URL = 'http://localhost:4000'

export const registerUser = async (credentials) => {
  const request = await fetch(`${URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }
  );

  const result = await request.json();
  return result;
}

export const loginUser = async(credentials) => {
  const request = await fetch(`${URL}/api/auth/login`, 
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

const result = await request.json();

return result;
}

export const profile = async (token) => {
    const response = await fetch(`${URL}/api/users/profile`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    });

    return await response.json();
}

export const updateProfile = async (data, token) => {
  console.log(data);
  const response = await fetch(`${URL}/api/users/profile/update`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}

export const getAppointments = async (token) => {
  const response = await fetch(`${URL}/api/appointments/scheduled`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });

  return await response.json();
}

export const createAppointment = async (data, token) => {
  const response = await fetch(`${URL}/api/appointments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  return await response.json()
}

export const deleteAppointment = async (token, id) => {
  const response = await fetch(`${URL}/api/appointments/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return await response.json();
}

export const getUsers = async (token) => {
  const response = await fetch(`${URL}/api/users`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });
  return await response.json()
}

export const deleteUser = async (token, id) => {
  const response = await fetch(`${URL}/api/users/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  });
  return await response.json();
}