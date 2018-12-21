const getSignature = async (callbackFunction: any, params: any) => {
  return (
    fetch('http://localhost:4000/generate-signature', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        params,
      }),
      method: 'POST',
    })
      .then((res) => {
        res.json().then((data) => {
          // console.log(data);
          callbackFunction(data);
        });
      })
      // tslint:disable-next-line:no-console
      .catch((error) => console.error('Error:', error))
  );
};

export default getSignature;
