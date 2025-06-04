import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Movies = connection.define("movies", {
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    genre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

Movies.sync({force : false});
export default Movies;