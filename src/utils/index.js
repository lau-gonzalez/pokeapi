import trainersData from "../assets/trainers.json";

export const filterData = (data, value) =>
  data.filter((pokemon) => pokemon.name.includes(value));

const sortAscendant = (data, sortBy) => {
  const newData = data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }

    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  });

  return newData;
};

const sortDescendant = (data, sortBy) => {
  const newData = data.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return -1;
    }

    if (a[sortBy] < b[sortBy]) {
      return 1;
    }
    return 0;
  });

  return newData;
};

export const sortCards = (data, sortBy, order) =>
  order === "ascendant"
    ? sortAscendant(data, sortBy)
    : sortDescendant(data, sortBy);

export const getTrainers = (id) => {
  const names = trainersData.filter(
    (trainer) => trainer.team.includes(id) || trainer.box.includes(id)
  );

  return names;
};
