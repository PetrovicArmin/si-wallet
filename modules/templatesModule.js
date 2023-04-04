import { AppState } from "react-native";

var link = 'https://3741-188-127-122-32.eu.ngrok.io';
export const getTemplates = () => {
    const fetchedData = fetch(link + '/api/Template')
    .then(result => result.json())
    .then(data => {
        return data;
    })
    
    return fetchedData;
}

export async function getTemplate(id) {
 // console.log("Evo mene id",id)
  const fetchedData = fetch(link + '/api/Template/' + id)
  .then(result => result.json())
  .then(data => {//console.log("Evo mene evo mene ovdje saaaam",data)
          return data;
  })

  return fetchedData;
  }

  export async function update(id,userId,title, recipientName, recipientAccountNumber, description, currency) {
  fetch(link+id, {
  method: 'PUT',
  body: JSON.stringify({
    userId: userId,
    title: title,
    description: description,
    currency: currency,
    recipientName: recipientName,
    recipientAccountNumber: recipientAccountNumber
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export async function deleteTemplate(id) {
  try {
    let response = await fetch(link  + '/api/Template/' +id, {
      method: 'DELETE',
    });
    let json = await response.text();
    console.log("Heeej: ", json);
    return json;
  } catch (error) {
    console.error(error);
  }
}

export async function createTemplate(userId, title, recipientName, recipientAccountNumber, description, currency) {
  fetch(link + '/api/Template', {
  method: 'POST',
  body: JSON.stringify({
    userId: userId,
    title: title,
    description: description,
    currency: currency,
    recipientName: recipientName,
    recipientAccountNumber: recipientAccountNumber
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
