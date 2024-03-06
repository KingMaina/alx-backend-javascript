import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([
    uploadPhoto(), createUser(),
  ]).then((data) => {
    const [photo, user] = data;
    console.log(photo.body, user.firstName, user.lastName);
  }).catch(() => {
    console.error('Signup system offline');
  });
}
