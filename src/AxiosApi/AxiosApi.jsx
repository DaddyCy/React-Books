import axios from "axios";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhYTE5ZTBiM2IyNTAwMTUxYjU1YWMiLCJpYXQiOjE3MTgzMjA1NDksImV4cCI6MTcxOTUzMDE0OX0.TvGJ1Yt9t-BMhxBhSvaXkiU9p7n8OX9KDg5mCYuyGvg";

export default axios.create({
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    headers: {'Authorization': `Bearer ${token}`}
});