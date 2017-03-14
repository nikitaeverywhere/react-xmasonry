import DemoCards from "./jsx/DemoCards.jsx"

window.init = function () {
    ReactDOM.render(
        <div>
            <DemoCards/>
        </div>,
        document.getElementById(`demoApp`)
    );
};