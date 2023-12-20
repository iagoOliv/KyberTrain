import express from 'express';
import fs from 'fs';
import cors from 'cors';
import { marked } from 'marked'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: "*",
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}))

// Get courses
app.get("/api/courses", (_req, res) => {
    let coursesFolderArray = fs.readdirSync(__dirname + "/data/courses");

    let merged = [];

    coursesFolderArray.forEach((folder) => {
        const courseFolder = __dirname + "/data/courses/" + folder

        if (fs.existsSync(courseFolder + '/data.json')) {
            const data = fs.readFileSync(courseFolder + '/data.json', "utf-8");
            try {
                const parsedData = JSON.parse(data);
                merged.push(parsedData);
            } catch (e) {
                console.log("Couldn't parse this JSON file. [", folder, "]")
            }
        }
    })

    res.json(merged)
});

// Get general course data
app.get("/api/course/:id/", (_req, res) => {
    let path = __dirname + `/data/courses/${_req.params.id}/data.json`;
    try {
        let file = fs.readFileSync(path, "utf-8");
        res.json(JSON.parse(file));
    } catch (e) {
        res.status(500).json({error: "Não foi possível achar este artigo."})
    }
});

// Get course class
app.get("/api/course/:id/chapter/:chapter", (_req, res) => {
    // Sanitize it too
    const path = __dirname + `/data/courses/${_req.params.id}/chapter-${_req.params.chapter}/1.md`;
    try {
        const file = fs.readFileSync(path, "utf-8");
        const parsedMd = marked(file.toString())
        res.send(parsedMd);
    } catch (e) {
        res.status(500).json({error: "Não foi possível achar este artigo."})
    }
});

app.listen(port, () => {
    console.log("Server listening on port", port);
});