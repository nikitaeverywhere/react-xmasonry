import XMasonry from "./components/XMasonry.jsx";
import XBlock from "./components/XBlock.jsx";

export {
    XMasonry,
    XBlock
};

if (typeof window !== `undefined`) {
    window.XMasonry = XMasonry;
    window.XBlock = XBlock;
}
