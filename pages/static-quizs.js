import { connectToDatabase } from "../util/mongodb";

export default function StaticQuizs({quizs}) {
    return (
        <div>
            <h1>Static Quiz</h1>
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

export async function getStaticProps() {
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