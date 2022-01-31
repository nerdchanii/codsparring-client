import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { BiBlock } from 'react-icons/bi';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isLogin } from '../../state/login';
import { useSetRecoilState } from 'recoil';

const LeaveAccount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // 후에 방식이 변경되어야 할 것
  const setLogin = useSetRecoilState(isLogin);
  const onClickQuit = useCallback(async (e) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('com.naver.nid.access_token');
      const response = await axios.delete('/api/delete/user', {
        headers: { Authorization: `${token}` },
      });
      if (response.data === true) {
        // 후에 방식이 변경되어야 할 것
        alert('탈퇴가 완료되었습니다.');
        setLogin(false);
      }
    } catch (e) {
      alert('에러가 발생했습니다. 다시 시도해주세요');
    } finally {
      setLoading(false);
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <Box>
      <Button
        startIcon={<BiBlock />}
        size="large"
        variant="outlined"
        sx={{ color: '#2f9272' }}
        onClick={onClickQuit}
        disabled={loading}
      >
        탈퇴하기
      </Button>
    </Box>
  );
};

export default LeaveAccount;