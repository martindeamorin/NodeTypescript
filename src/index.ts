import express from "express";
import path from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import homeRouter from "./routes/home"

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(cors());

app.use("/home", homeRouter)

app.listen(4000, () => {
    console.log("App running and listening")
})