import { redirect } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";

import interviewer from "../assets/interviewer.jpg";
import Interview from "../components/Interview";
import InterviewLayout from "../styles/InterviewLayout";
import { Question } from "../types/Question";
import {
  getQuestionAsCount,
  getQuestionByType,
  getShuffleQuestions,
} from "../utils/question";
import { TYPE_COLLECTIONS } from "../constants/question";

const InterviewPage = () => {
  const questions = useLoaderData<typeof loader>();

  return (
    <InterviewLayout>
      <img src={interviewer} className="interviewer-image" alt="interviewer" />

      <Interview questions={questions} />
    </InterviewLayout>
  );
};

export default InterviewPage;

export function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const { searchParams } = url;
  const clickedType = searchParams.get("type");

  if (typeof clickedType !== "string") {
    return redirect("/");
  }

  const questions: Question[] = getQuestionByType(clickedType);
  const shuffleQuestions: Question[] = getShuffleQuestions(questions);
  const finalQuestions = getQuestionAsCount(
    shuffleQuestions,
    TYPE_COLLECTIONS[clickedType].count
  );

  return finalQuestions;
}
