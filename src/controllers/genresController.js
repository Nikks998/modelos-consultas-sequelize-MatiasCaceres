const { Genre } = require("../database/models");

module.exports = {
    
    list: (req, res) => {
        Genre.findAll().then((genres) => {
            return res.render("genresList", {
                genres,
            });
        });
    },

    detail: (req, res) => {
        const { id } = req.params;

        Genre.findByPk(id)
            .then((genre) => {
                return res.render("genresDetail", {
                    genre,
                });
            })
            .catch((error) => console.log(error));
    },
};
