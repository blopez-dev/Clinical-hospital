import cors from "cors";
import express from "express";
export const setHeaders = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Controls-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.end();
    } else {
        next();
    }
}
const middlewares = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(express.json())
}
export default middlewares;