import React from 'react'

export default function Quote({quote, name, year, citation, url, backgroundImg}) {
    return (
        <div id="quote-box">
            <p className="quote">{quote}</p>
            <p className="name">{name}
                <span className="citation">{citation}</span>
                <span className="year">{year}</span>
            </p>
            {url ? (<a href={url}>See a clip</a>) : ("")}
            {backgroundImg
                ? (
                    <img src={backgroundImg}
                        alt="gif of Danny Phantom going Ghost"
                        style={{
                            // display: "block",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                )
                : ("")
            }
        </div>
    )
}
