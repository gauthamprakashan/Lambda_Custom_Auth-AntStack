

export const hello = async (event, context) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(hello)
    };

    return response;
  };
  