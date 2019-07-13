const emulsifiers = [
    {
        code: "E334",
        isHalal: false
    },
    {
        code: "E570",
        isHalal: false
    },
    {
        code: "E422",
        isHalal: false
    },
    {
        code: "E270",
        isHalal: false
    },
    {
        code: "E440a",
        isHalal: true
    },
]

function searchEmulsifier() {
    const emulsifierName = document.getElementById("emulsifierName").value
    let message = "Sorry, not found";
    for (let emulsifier of emulsifiers) {
        code = emulsifier.code

        if (code.toLowerCase() == emulsifierName.toLowerCase()) {
            message = emulsifier.isHalal
            if (emulsifier.isHalal) {
                message = "Yay! It's Halal!"
            }
            else {
                message = "Sorry, it's not Halal"
            }
        }
    }

    document.getElementById('answer').innerHTML = message
}