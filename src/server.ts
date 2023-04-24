import express from "express";
import cors from "cors";
import { loggerMiddleware, notFound } from "./middleware";
import { doctorRouter } from "./routes/doctorRouter";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", (_, res) => {
  res.status(200).send({ status: "✌️" });
});

app.use(loggerMiddleware);

app.use("/test", (_, res) => {
  res.status(404).send({ status: "🤷‍♂️" });
});

app.use("/api/v1", doctorRouter);

app.use(notFound);
app.listen(3000, () => {
  console.log(`\n\t ✌️ \n\n server listening on port ${3000} ...`);
});

export default app;
