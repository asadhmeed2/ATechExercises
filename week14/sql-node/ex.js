const Sequelize = require("sequelize");

const json = require("./poke_data.json");

const sequelize = new Sequelize("mysql://root:1234@localhost:3308/sql_intro"); //3308

const POKEMON_TABLE = "pokemon";
const POKEMON_TYPES_TABLE = "pokemon_type";
const TRAINER_TABLE = "trainer";
const TOWN_TABLE = "town";
const POKEMON_TRAINER_TABLE = "pokemon_trainer";

const add = async (table, data) => {
  const dataString = data.reduce((str, current, idx) => {
    if (typeof current === "string") {
      str += `'${current}'`;
    } else {
      str += `${current}`;
    }
    if (idx !== data.length - 1) {
      str += ",";
    }
    return str;
  }, "");

  const query = `INSERT INTO ${table} VALUES(${dataString})`;
  await sequelize.query(query);
};

const get = async (table, column, data) => {
  let query = `SELECT * FROM ${table} WHERE ${column} = '${data}'`;

  const res = await sequelize.query(query);
  return res[0];
};

const init = async () => {
  for (let pokemon of json) {
    const typeData = await get(POKEMON_TYPES_TABLE, "type", pokemon.type);

    const isTypeExists = !!typeData.length;

    if (!isTypeExists) {
      await add(POKEMON_TYPES_TABLE, [null, pokemon.type]);
    }

    const pokemonTypeData = await get(
      POKEMON_TYPES_TABLE,
      "type",
      pokemon.type
    );

    await add(POKEMON_TABLE, [
      null,
      pokemon.name,
      pokemonTypeData[0].id,
      pokemon.height,
      pokemon.weight,
    ]);

    const pokemonData = await get(POKEMON_TABLE, "p_name", pokemon.name);

    for (let trainer of pokemon.ownedBy) {
      const townData = await get(TOWN_TABLE, "tw_name", trainer.town);
      const isTownExists = !!townData.length;
      const trainerData = await get(TRAINER_TABLE, "t_name", trainer.name);
      const isTrainerExists = !!trainerData.length;

      if (!isTownExists) {
        await add(TOWN_TABLE, [null, trainer.town]);
      }

      const newTownData = await get(TOWN_TABLE, "tw_name", trainer.town);

      if (!isTrainerExists) {
        await add(TRAINER_TABLE, [null, trainer.name, newTownData[0].id]);
      }

      const newTrainerData = await get(TRAINER_TABLE, "t_name", trainer.name);

      await add(POKEMON_TRAINER_TABLE, [
        pokemonData[0].id,
        newTrainerData[0].id,
      ]);
    }
  }
};
