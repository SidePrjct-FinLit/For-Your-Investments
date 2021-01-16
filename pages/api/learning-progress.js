import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const learningProgress = await db
  .collection("learning-progress")
  .find({})
  .toArray();

  res.json(learningProgress);
};