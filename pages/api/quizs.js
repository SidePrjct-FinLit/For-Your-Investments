import { CircularProgress } from "@material-ui/core";
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const quizs = await db
  .collection("quiz")
  .find({})
  .toArray();

  res.json(quizs);
};