import XMasonry from "./XMasonry.jsx";
import XBlock from "./XBlock.jsx";

export {
    XMasonry,
    XBlock
};

if (typeof window !== `undefined`) {
    window.XMasonry = XMasonry;
    window.XBlock = XBlock;
}