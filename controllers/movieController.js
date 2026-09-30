import Movie from "../models/Movie.js";

// CREATE MOVIE
export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);

        res.status(201).json({
            message: "Movie created successfully",
            movie
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating movie",
            error: error.message
        });
    }
};

// GET ALL MOVIES
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();

        res.status(200).json({
            message: "Movies fetched successfully",
            movies
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching movies",
            error: error.message
        });
    }
};

// GET SINGLE MOVIE
export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            message: "Movie fetched successfully",
            movie
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching movie",
            error: error.message
        });
    }
};

// UPDATE MOVIE
export const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            message: "Movie updated successfully",
            movie
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating movie",
            error: error.message
        });
    }
};

// DELETE MOVIE
export const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            message: "Movie deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting movie",
            error: error.message
        });
    }
};