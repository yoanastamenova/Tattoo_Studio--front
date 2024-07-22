export const registerUser = async () => {

    const request = await fetch('http://localhost:4000/register',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

    const result = await request.json();

    console.log(result)
   }

export const loginUser = async () => {
    
}