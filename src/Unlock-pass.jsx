import { useState, useRef, useEffect } from 'react';
import Letter from "./letter";
import './Unlock-pass.css';

const Pass = () => {
  const [password, setPassword] = useState(['', '', '', '']);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const inputRefs = useRef([]);
  const correctPassword = '2401';

  useEffect(() => {
    if (!isUnlocked) {
      inputRefs.current[0].focus();
    }
  }, [isUnlocked]);

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newPassword = [...password];
      newPassword[index] = value;
      setPassword(newPassword);

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !password[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const hint = ()=>{
    alert("รหัสผ่านคือ 2 ตัวแรกวันเกิดพี่ 2 ตัวหลังเดือนเกิดพี่ อิอิ")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPassword = password.join('');
    if (enteredPassword === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert('คือจำวันเกิดกันไม่ได้ละไง TWT');
      setPassword(['', '', '', '']);
      inputRefs.current[0].focus();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', height:'100px' }}>
      {!isUnlocked && (
        <>
          <h2 style={{ color: 'black' }}>Unlock to see something 💣</h2>
          <button
              onClick={hint}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                color: 'black',
                backgroundColor: '#E1DDD0',
                border: '2px solid black',
                borderRadius: '20px',
                cursor: 'pointer',
                marginBottom: '5px',
              }}
            >
              🥴 Hint
            </button>
          <form onSubmit={handleSubmit}>
            <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
              {password.map((digit, index) => (
                <input
                  key={index}
                  type="tel"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength="1"
                  ref={(el) => (inputRefs.current[index] = el)}
                  style={{
                    width: '40px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '24px',
                    margin: '0 5px',
                    border: '2px solid black',
                    borderRadius: '50%',
                    backgroundColor: '#E1DDD0',
                    color: 'black',
                  }}
                />
              ))}
            </div>
            <button
              type="submit"
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                fontSize: '16px',
                color: 'black',
                backgroundColor: '#E1DDD0',
                border: '2px solid black',
                borderRadius: '20px',
                cursor: 'pointer',
              }}
            >
              📩 Unlock
            </button>
          </form>
        </>
      )}
      {isUnlocked && (
        <>
        <Letter />
        <div className="rose"><img src="/RoseT.png"></img></div>
        </>
      )}
    </div>
  );
};

export default Pass;
