import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import ProblemBoard from '../board/ProblemBoard';
import './Problem.scss';

function ProblemListCotainers() {
  const [problemItems, setProblemItems] = useState(null);
  const [loadding, setLoadding] = useState(false);

  const fetchData = useCallback(async () => {
    setLoadding(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_DEFAULTS_URL}/problem`);
      const { data } = response;
      setProblemItems(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadding(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (loadding || !problemItems) {
    return <></>;
  }

  return <ProblemBoard className="ProblemList" title="문제목록" data={problemItems} />;
}

export default ProblemListCotainers;