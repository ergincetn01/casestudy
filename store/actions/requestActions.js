export const getRequests = async () => {
  try {
    const response = await fetch(
      "https://case.edulog.com.tr/api/auth/requests",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      }
    );
    const message = response.status === "200" ? "Authenticted" : "Unauthenticated";
    const json = await response.json();
    setData(json.movies);
  } 
  catch (error) {
    console.error(error);
  }
};

export const deleteRequest = async (id) => {
  try {
    await fetch(`https://case.edulog.com.tr/api/auth/requests${id}`, 
    {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};
