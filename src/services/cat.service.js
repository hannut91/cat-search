const URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

export const fetchCats = async () =>
  await new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.addEventListener('loadend', () => {
      try {
        const data = JSON.parse(req.responseText);
        resolve(data);
      } catch(err) {
        reject();
      }
    });

    req.addEventListener('error', reject)

    req.open('GET', URL);
    req.send();
  });
