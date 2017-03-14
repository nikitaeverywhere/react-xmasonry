export function getRandomColor () {
    const colors = ["#ffff8d", "#ff8a80", "#a7ffeb", "#ffd180", "#80d8ff", "#ccff90", "#cfd8dc"];
    return colors[Math.floor(Math.random() * colors.length)];
}

export function getRandomCard (id) {
    return {
        id: id,
        header: "This is a dummy card",
        body: ["This is a dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
            , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
            , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
            , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
            , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
            , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
        ].slice(0, Math.floor(Math.random() * 6) + 1),
        width: Math.floor(1 + Math.random() * 1.5),
        color: getRandomColor()
    };
}