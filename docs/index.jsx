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
            <h1 style={{ textAlign: "center" }}>Content Changes Demo</h1>
            <div className="littleGray limited centerText">
                When grid items change their size dynamically (like dynamically loaded CSS
                stylesheets or interactive layout), you need to update the layout
                manually each time when changes happen.<br/>
                Update XMasonry any time by triggering its <a target="_blank" href="https://www.npmjs.com/package/react-xmasonry#accessing-xmasonry-by-reference">update</a> method.
            </div>
            <div className="littleGray centerText">
                <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ContentChangesDemo.css">CSS source</a> | <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ContentChangesDemo.jsx">JavaScript source</a>
            </div>
            <ContentChangesDemo/>
            <h1 style={{ textAlign: "center" }}>Articles Demo</h1>
            <div className="littleGray centerText">
                Use better CSS fixed ratio approach when possible (no image load hooks are triggered, content appears immediately)
            </div>
            <div className="littleGray centerText">
                <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/css/ArticlesDemo.css">CSS source</a> | <a target="_blank" href="https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/ArticlesDemo.jsx">JavaScript source</a>
            </div>
            <ArticlesDemo/>
        </div>,
        document.getElementById(`demoApp`)
    );
};