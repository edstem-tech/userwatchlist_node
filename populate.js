const connectDB=require('./src/db/connect');
const Movie = require ('./src/models/movie')
const jsonMovies=require('./movie.json')

const start=async()=>{
    try {
        await connectDB();
        await Movie.deleteMany();
        await Movie.create(jsonMovies);
       
    } catch (error) {
       console.log(error) 
    }
}
start()