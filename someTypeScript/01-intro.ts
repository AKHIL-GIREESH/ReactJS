type Password = {
  password: string;
};

type User =
  | {
      name: string;
    }
  | Password;

const user: User = {
  name: "A",
  password: "gy",
};

console.log(user);
