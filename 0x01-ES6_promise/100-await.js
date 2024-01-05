import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let obj;
  try {
    const results = await Promise.all([uploadPhoto(), createUser()]);
    const [photoRes, userRes] = [...results];
    obj = { photo: photoRes, user: userRes };
  } catch (err) {
    obj = { photo: null, user: null };
  }
  return obj;
}

// import { uploadPhoto, createUser } from './utils.js';

// export default async function asyncUploadUser() {
//   let obj;
//   const pro = await Promise.all([uploadPhoto(), createUser()])
//     .then((results) => {
//       const [photoRes, userRes] = [...results];
//       obj = { photo: photoRes, user: userRes };
//     })
//     .catch(() => {
//       obj = { photo: null, user: null };
//     });
//   return obj;
// }
