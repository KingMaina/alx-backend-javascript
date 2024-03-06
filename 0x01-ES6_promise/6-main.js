import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

const runAsync = async() => {
  console.log(await handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
}
runAsync();
