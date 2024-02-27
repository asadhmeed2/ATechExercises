const Sequelize = require("sequelize");

const sequelize = new Sequelize("mysql://root:1234@localhost:3308/sql_intro"); //3308

//ex2
const getHeaviestPokemon = async () => {
  const query = `SELECT *
  FROM pokemon
  ORDER BY weight DESC
  LIMIT 1;`;
  const pokemonData = await sequelize.query(query);
  return pokemonData[0];
};

// ex3
const findByType = async (type) => {
  const query = `SELECT p.p_name FROM pokemon as p , pokemon_type as p_t 
    WHERE p.type = p_t.id AND p_t.type = '${type}'`;

  const pokemonData = await sequelize.query(query);
  return pokemonData[0];
};

//ex4
const findOwners = async (pokemonName) => {
  const query = `SELECT t.t_name FROM trainer as t, pokemon as p , pokemon_trainer as p_t
    WHERE  p_t.p_id = p.id AND p_t.t_id = t.id AND p.p_name = '${pokemonName}'`;

  const trainersData = await sequelize.query(query);
  return trainersData[0].map((t) => t.t_name);
};

// ex5
const findRoster = async (trainerName) => {
  const query = `SELECT p.p_name FROM  pokemon as p ,trainer as t, pokemon_trainer as p_t
    WHERE  p_t.p_id = p.id AND p_t.t_id = t.id AND t.t_name = '${trainerName}'`;

  const pokemonData = await sequelize.query(query);
  return pokemonData[0].map((p) => p.p_name);
};

//ex6
const mostOwnedPokemon = async () => {
  const query = `SELECT p.p_name  as name,COUNT(*) as count FROM  pokemon as p ,trainer as t, pokemon_trainer as p_t
    WHERE  p_t.p_id = p.id AND p_t.t_id = t.id 
    GROUP BY p.p_name 
    HAVING count = (
        SELECT MAX(count)
        FROM (
          SELECT p.p_name, COUNT(*) AS count FROM  pokemon as p ,trainer as t, pokemon_trainer as p_t
          WHERE  p_t.p_id = p.id AND p_t.t_id = t.id 
          GROUP BY p.p_name 
        ) AS subquery
    );`;

  const pokemonData = await sequelize.query(query);
  return pokemonData[0];
};

const test = async () => {
  //   console.log(await getHeaviestPokemon());
  //   console.log(await findByType("grass"));
  //   console.log(await findOwners("gengar"));
  //   console.log(await findRoster("Loga"));
  console.log(await mostOwnedPokemon());
};

test();
