import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import nextArrowBtn from '@assets/next_arrow_button.png';
import { Question } from '@custom/types/Question';
import '@styles/InterviewContainer.scss';

function convertNumberToTimeStamp(timer: number) {
  const hour: string = (timer / 60).toFixed().padStart(2, '0');
  const min: string = (timer % 60).toString().padStart(2, '0');

  return `${hour}:${min}`;
}

const timeStamps = [];

const Interview: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const [id, setId] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const timerRef = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000) as unknown as number;
  }, [id]);

  const nextQuestion = () => {
    if (id === questions.length - 1) {
      navigate('/exit');
      return;
    }

    setId((prevId) => prevId + 1);
    timeStamps.push(timer);
    setTimer(0);
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div className='interview-container'>
      <div className='timer-box'>
        <h3 className='timer'>{convertNumberToTimeStamp(timer)}</h3>
      </div>
      <div className='question-box'>
        <p className='question'>{questions[id].text}</p>
        <button type='button' className='next-arrow-btn' onClick={nextQuestion}>
          <img src={nextArrowBtn} alt='next arrow btn' />
        </button>
      </div>
    </div>
  );
};

export default Interview;
