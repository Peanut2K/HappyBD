import { useRef, useEffect } from "react"
import './Slide.css';
import { image } from "motion/react-client";

export default function Slide() {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({ left: 0, behavior: "smooth" })
        }
    }, [])

    return (
        <div id="example">
            <h2>Slide &rarr;</h2>
            <ul ref={ref}>
                <li id="pic1" className="ct" style={{ }}> </li>
                <li id="pic2" className="ct" style={{ }}></li>
                <li id="pic3" className="ct" style={{ }}></li>
                <li id="pic4" className="ct" style={{ }}></li>
                <li id="pic5" className="ct" style={{ }}></li>
                <li id="pic7" className="ct" style={{ }}></li>
                <li id="pic8" className="ct" style={{ }}></li>
                <li id="pic9" className="ct" style={{ }}></li>
                <li id="pic6" className="ct" style={{ }}></li>
            </ul>
        </div>
    )
}