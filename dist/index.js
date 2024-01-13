"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
require('dotenv').config();
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(compression_1.default);
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.json({ msg: 'hello world' });
});
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(process.env.MONGO_URL);
mongoose_1.default.connection.on('error', (error) => console.log(error));
app.use('/', (0, router_1.default)());
const server = http_1.default.createServer(app);
server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/');
});
//# sourceMappingURL=index.js.map