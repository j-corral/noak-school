export async function getConf(name: string = '') {
  const endpoint = process.env.CONF_API + `parse/config`;

  const headers = {
    'X-Parse-Application-Id': `${process.env.CONF_APP_ID}`,
    'X-Parse-REST-API-Key': `${process.env.CONF_API_KEY}`,
  };

  return fetch(endpoint, { headers })
    .then((response) => response.json())
    .then((confData) => {
      if (name.length > 0) {
        return filterObjectByName(confData, name);
      }
      return confData;
    })
    .catch((error) => console.warn(error));
}

export function filterObjectByName(object: any, name: string) {
  const filtered = Object.entries(object.params).filter(([key]) => key.includes(name));
  return filtered.length > 0 ? Object.fromEntries(filtered)[name] : Object.fromEntries(filtered);
}
