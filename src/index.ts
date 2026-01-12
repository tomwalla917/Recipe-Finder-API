import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/recipes/search/', async (req, res) => {
  const RecipeResult = req.params.RecipeSearch

  const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}`)

  const RecipeResultData = {
    success: true, 
    id: response.data.id || 'Not provided',
    title: response.data.title || 'Not provided',
    image: response.data.image

  };
  res.send(RecipeResultData)
  
  console.log(RecipeResultData);

});