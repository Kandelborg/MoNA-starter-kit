const getSignature = async (callbackFunction: any, params: any) => {
  return (
    fetch('http://localhost:4000/generate-signature', {
      body: JSON.stringify({
        params
      }),
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Content-Type': 'application/json; charset=utf-8'
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      method: 'POST'
    })
      .then((res) => {
        res.json().then((data) => {
          callbackFunction(data)
        })
      })
      // tslint:disable-next-line:no-console
      .catch((error) => console.error('Error:', error))
  )
}

export default getSignature
