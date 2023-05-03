"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//imports:
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//middlewares:
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//routes:
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//server:
app.listen(port || 3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});
