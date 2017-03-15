import CardsDemo from "./jsx/CardsDemo.jsx"
import ArticlesDemo from "./jsx/ArticlesDemo.jsx";

window.init = function () {
    ReactDOM.render(
        <div>
            <h1 style={{ textAlign: "center" }}>Cards Demo</h1>
            <div className="littleGray centerText">
                <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/CardsDemo.css">CSS source</a> | <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/CardsDemo.jsx">JavaScript source</a>
            </div>
            <CardsDemo/>
            <h1 style={{ textAlign: "center" }}>Articles Demo</h1>
            <div className="littleGray centerText">
                Use better CSS fixed ratio approach when possible (no image load hooks needed at all)
            </div>
            <div className="littleGray centerText">
                <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ArticlesDemo.css">CSS source</a> | <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ArticlesDemo.jsx">JavaScript source</a>
            </div>
            <ArticlesDemo/>
        </div>,
        document.getElementById(`demoApp`)
    );
};