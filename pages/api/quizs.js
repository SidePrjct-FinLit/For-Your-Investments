import nc from 'next-connect';
import { getQuizs} from '@/database/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
    const quizs = await getQuizs(
      req.db
    );

    res.send({ quizs });
  });

  export default handler;
