// const express = require("express"); // express 파일 찾음. 1순위 같은 파일 위치, 2순위 node_modules
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express(); // app 상수에 express를 실행해서 담음.

app.use(cookieParser());
app.use(bodyParser.json()); // json
app.use(bodyParser.urlencoded({ extended: true })); // html
app.use(helmet()); // node.js 앱 보안에 도움
app.use(morgan("dev")); // logging (무슨 일이 어디서 일어났는지 기록, 인자로 로깅 옵션 설정 가능)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;