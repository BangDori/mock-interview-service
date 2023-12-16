import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import nextArrowBtn from '@assets/next_arrow_button.png';
import { Question } from '@custom/types/Question';
import '@styles/InterviewContainer.scss';

const Interview: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const [id, setId] = useState<number>(0);
  const navigate = useNavigate();

  const nextQuestion = () => {
    if (id === questions.length - 1) {
      navigate('/exit');
      return;
    }

    setId((prevId) => prevId + 1);
  };

  return (
    <div className='interview-container'>
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
