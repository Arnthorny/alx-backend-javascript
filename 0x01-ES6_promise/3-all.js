import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(
    (results) => {
      const [bodyRes, user] = [...results];
      console.log(`${bodyRes.body} ${user.firstName} ${user.lastName}`);
    },
    () => {
      console.log('Signup system offline');
    },
  );
}
