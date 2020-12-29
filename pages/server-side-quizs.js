import { connectToDatabase } from "../util/mongodb";
import Layout from '../components/layout'


export default function ServerSideQuizs({quizs}) {
    return (
        <div>
            <h1>Server Side Quiz</h1>
            <ul>
                {
                    quizs.map((question) => (
                        <li>
                            <h4>Q: {question.stem}</h4>
                            <p>{question.answer}</p>
                            <p>{question.distraction1}</p>
                            <p>{question.distraction2}</p>
                            <p>{question.distraction3}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();

    const quizs = await db
    .collection("quiz")
    .find({})
    .toArray();

    return {
        props: {
            quizs: JSON.parse(JSON.stringify(quizs)),
        },
    };
}

ServerSideQuizs.Layout = Layout;