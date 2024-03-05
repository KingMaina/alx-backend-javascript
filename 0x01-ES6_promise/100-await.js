import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  const results = {
    photo: null,
    user: null,
  };
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    results.photo = photo;
    results.user = user;
  } catch(error) {
	  console.log(error);
    return results;
  }
}
