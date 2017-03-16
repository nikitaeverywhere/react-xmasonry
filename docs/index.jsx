import CardsDemo from "./jsx/CardsDemo.jsx"
import ArticlesDemo from "./jsx/ArticlesDemo.jsx";
import ContentChangesDemo from "./jsx/ContentChangesDemo.jsx";

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
                Use better CSS fixed ratio approach when possible (no image load hooks are triggered, content appears immediately)
            </div>
            <div className="littleGray centerText">
                <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ArticlesDemo.css">CSS source</a> | <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ArticlesDemo.jsx">JavaScript source</a>
            </div>
            <ArticlesDemo/>
            <h1 style={{ textAlign: "center" }}>Content Changes Demo</h1>
            <div className="littleGray limited centerText">
                When grid items change their size dynamically (like images which are not loaded
                yet or after CSS stylesheets finish their load), you need to update the layout
                manually each time when changes happen.<br/>
                Anytime, you can update XMasonry manually by triggering
                its <code>update</code> method.
            </div>
            <div className="littleGray centerText">
                <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ContentChangesDemo.css">CSS source</a> | <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ContentChangesDemo.jsx">JavaScript source</a>
            </div>
            <ContentChangesDemo/>
        </div>,
        document.getElementById(`demoApp`)
    );
};