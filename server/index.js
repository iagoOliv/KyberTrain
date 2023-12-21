import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { marked } from 'marked'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

// Get general course data
app.get("/api/course/:id/", (_req, res) => {
    let path = __dirname + `/data/courses/${_req.params.id}/general/data.json`;
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
