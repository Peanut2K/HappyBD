import { useState, useEffect } from 'react';
import './letter.css';

const Letter = () => {
  const [letterContainerHeight] = useState("600px");
  const [middleStyle, setMiddleStyle] = useState({
    opacity: 0,
    transform: "rotateX(-180deg) translateY(200px)",
  });
  const [bottomStyle, setBottomStyle] = useState({
    opacity: 0,
    transform: "rotateX(-180deg) translateY(200px)",
  });

  useEffect(() => {
    setMiddleStyle({
      opacity: 1,
      transform: "rotateX(0deg) translateY(200px)",
    });

    setBottomStyle({
      opacity: 1,
      transform: "rotateX(0deg) translateY(200px)",
    });
  }, []);

  return (
    <>
    <div
      className="letter-container"
      style={{
        height: letterContainerHeight,
        transition: 'height 1s ease',
      }}
    >
      <div><h2>Happy Birthday 🍰</h2></div>
      <div className="paper">
        <div className="section top-section">
          <div className="content">
            <p className="Head">To I'Dawn</p>
            <p className="text">20 ละ อส แก่แล้วนะ อห วันเกิดปีนี้ก็ขอให้มีความสุขมากๆ พักผ่อนบ้างทำงานควยไรเยอะแยะ รักคนอื่นให้เหมือนรักตัวเองบ้างนะ อส ขอให้เป็นปีที่ดีมากๆอีกปีนึง ไว้ไปเที่ยวกันอีกเยอะๆจู้</p>
            <p className="Foot">Oat</p>
          </div>
        </div>

        <div
          className="section middle-section"
          style={{
            ...middleStyle,
            transition: 'all 1s ease',
          }}
        >
          <div className="content">
            <p className="text">Yo กาลดาว วิจารณ์ปรีชา สุขสันต์วันเกิดครบรอบ 20 ปีแห่งการเติบโต ขออำนวยอวยพรให้ปีนี้เป็นอีกปีที่มีความสุข ความเจริญ ใครเห็นใครรัก ใครเห็นใครชอบ  มีปัญหาอะไรทักมาได้นะจ้ะ จุ้บๆ</p>
            <p className="Foot">Chat</p>
          </div>
        </div>

        <div
          className="section bottom-section"
          style={{
            ...bottomStyle,
            transition: 'all 3s ease',
          }}
        >
          <div className="content">
            <p className="Bless">Last but not least, I want to thank you, my dearest friend, for always being by my side. May life bring you endless joy, love, and success in everything you do. You truly deserve the best this world has to offer!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Letter;
