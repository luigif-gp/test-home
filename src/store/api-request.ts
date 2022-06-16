export const ApiRequest = async (params: string[] | string) => {
  const url = process.env.REACT_APP_API;
  if (!url) {
    throw Error('credentials are missing');
  }
  const urlRequest = !Array.isArray(params) ? `${url}${params}` : `${url}${params[0]}/${params[1]}/${params[2]}`;

  const response = await fetch(urlRequest, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((data) => data.json());

  return response;
};
