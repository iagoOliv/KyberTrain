import express from 'express';
import fs from 'fs';
import { marked } from 'marked'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();

// Get general course data
app.get("/api/course/:id/", (_req, res) => {
    let path = __dirname + `/data/courses/${_req.params.id}/general/data.json`;
    let file = fs.readFileSync(path, "utf-8");
    res.json(JSON.parse(file));
});

// Get course class
app.get("/api/course/:id/chapter/:chapter/:aula", (_req, res) => {
    const path = __dirname + `/data/courses/${_req.params.id}/chapter-${_req.params.chapter}/aula-${_req.params.aula}.md`;
    const file = fs.readFileSync(path, "utf-8");
    try {
        res(marked(file.toString()));
    } catch (e) {
        console.log("Couldn't parse the Markdown file.")
    }
});

app.listen(port, () => {
    console.log("Server listening on port", port);
});