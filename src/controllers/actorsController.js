const { Actor } = require("../database/models");

module.exports = {

    list: (req, res) => {
        Actor.findAll()
        .then((actors) => {
            return res.render("actorsList", {
                actors
            });
        })
        .catch((error) => console.log(error));
    },

    detail: (req, res) => {
        const { id } = req.params;

        Actor.findByPk(id)
            .then((actor) => {
                return res.render("actorsDetail", {
                    actor
                });
            })
            .catch((error) => console.log(error));
    },
};
