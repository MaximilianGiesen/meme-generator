import React from "react"

export default function Main() {

    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [memesArr, setMemesArr] = React.useState([])

    function handleChange(e) {
        const {value, name} = e.currentTarget

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    React.useEffect(() => {
        console.log("Api fetch successful")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesArr(data.data.memes))
    }, [])

    const fetchImage = () => {
        console.log("fetched Image!")
    }

    return(
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={fetchImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl}  alt="meme"/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}