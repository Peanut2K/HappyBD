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
            <p className="Head">To I'Nong Anda 💌</p>
            <p className="text">Yoooo ว่าไง 52525 ให้จดหมายนี้เป็นตัวแทนคำอวยพรของพี่ละกัน คืองงมากว่าพี่กับน้องมาคุยกันได้ยังไง ตอนไหนนะ 25252525 อายุ 18 ละปุ โตเป็นสาวแล้วววว ถถถถถ</p>
            <p className="Foot"></p>
          </div>
        </div>

        <div
          className="section middle-section"
          style={{
            ...middleStyle,
            transition: 'all 2.5s ease',
          }}
        >
          <div className="content">
            <p className="text">ก็ขออวยพรให้ปีนี้เป็นปีที่ดีมากๆอีกปีนึงเด้อ ขอให้สมหวังทุกๆอย่าง โตขนาดนี้ก้ไม่ต้องมีพี่ๆเลี้ยงแล้วปุ 255255 ความสุขล้นหลาม ไว้เจอกันคราวหน้าเดะเลี้ยงน้ำละกัร yayy</p>
            <p className="Foot">Always here for you, <br/>P'Oat</p>
          </div>
        </div>

        <div
          className="section bottom-section"
          style={{
            ...bottomStyle,
            transition: 'all 5s ease',
          }}
        >
          <div className="content">
            <p className="Bless">Last but not least, I want to thank you, my dearest Nong, for always being by my side. May life bring you endless joy, love, and success in everything you do. You truly deserve the best this world has to offer!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Letter;
