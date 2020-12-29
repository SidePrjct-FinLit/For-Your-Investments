export async function getQuizs(db) {
    return db
      .collection('quiz')
      .find({})
      .toArray();
  }