import { Link, useLocation } from 'react-router-dom';

import { Question } from '@custom/types/Question';
import '@styles/Exit.scss';

type LocationState = {
  state: {
    timeStamps: string[];
    questions: Question[];
  };
};

function getInterviewResult(timeStamps: string[], questions: Question[]) {
  const resultinterviewResult = [];

  for (let i = 0; i < questions.length; i += 1) {
    resultinterviewResult.push({
      ...questions[i],
      timeStamp: timeStamps[i],
    });
  }

  return resultinterviewResult;
}

const Exit = () => {
  const location = useLocation() as LocationState;
  const { timeStamps, questions } = location.state;

  const interviewResult = getInterviewResult(timeStamps, questions);

  return (
    <div className='exit-layout'>
      <div className='exit-title'>
        <h1 className='title-txt'>
          인터뷰가 모두 종료되었습니다! 고생하셨습니다.
        </h1>
      </div>
      <div className='interview-detail-container'>
        <table>
          <thead>
            <tr>
              <th align='center'>번호</th>
              <th align='center'>질문</th>
              <th align='center'>소요 시간</th>
            </tr>
          </thead>
          <tbody>
            {interviewResult.map((result, index) => (
              <tr key={result.id}>
                <td align='center'>{index + 1}</td>
                <td className='border-center'>{result.text}</td>
                <td align='center'>{result.timeStamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='navigation-container'>
        <Link to='/' className='w-btn w-btn-blue'>
          홈으로
        </Link>
      </div>
    </div>
  );
};

export default Exit;
