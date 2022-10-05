export type CatType = {
  id: string;

  name: string;

  age: number;

  species: string;

  isCute: boolean;

  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: "1",

    name: "blue",

    age: 8,

    species: "Russian Blue",

    isCute: true,

    friends: ["asdfhj29009", "WE09tju2j"],
  },
  {
    id: "2",

    name: "som",

    age: 4,

    species: "Sphynx cat",

    isCute: true,

    friends: ["weju0fj20qj", "asdfhj29009", "weju0fj20qj"],
  },
];
