import { nanoid } from "nanoid";

export const collectUsers = (data) => {
  return {
    id: nanoid(6),
    name: data.name.value,
    surname: data.sName.value,
    age: data.age.value,
    file: data.file.files[0]
      ? URL.createObjectURL(data.file.files[0])
      : "https://scott88lee.github.io/FMX/img/avatar.jpg",
  };
};
