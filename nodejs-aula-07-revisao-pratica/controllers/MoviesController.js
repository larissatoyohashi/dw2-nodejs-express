import express from "express";
import Movies from "../models/Movies.js";

const router = express.Router();


router.get("/", (req,res) => {
    Movies.findAll().then((movies) => {
        res.render("movies", {
            movies : movies,
        });
    });
});

router.post("/movies/new", (req,res) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const duration = req.body.duration;

    Movies.create({

        title : title,
        genre : genre,
        duration : duration,

    }).then(() => {
        res.redirect("/");
    }).catch((error)=> {
        console.log(error);
    })
});

router.get("/movies/delete/:id", (req,res) => {
    const id = req.params.id
    Movies.destroy({
        where: {
            id : id
        }
    }).then(() => {
        res.redirect("/");
    }).catch((error) => {
        console.log(error);
    });
});

export default router;