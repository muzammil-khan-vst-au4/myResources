import React from 'react'

const Card = ({resources})=> {
    let colors = ["red", "orange", "gold", "yellow", "purple", "light-purple", "hot-pink", "dark-pink", "pink", "dark-green", "green", "dark-blue", "blue", "light-blue", "lightest-blue", "washed-blue", "washed-green", "washed-yellow", "light-pink", "light-yellow", "light-red"]
    let cards = resources.map((resource, index) => {
        let random = Math.floor((Math.random() * colors.length))
        return (
           <a href={resource.url} target={"_blank"} rel="noopener noreferrer" key={index}> <div className={`grow bg-${colors[random]} br3 pa3 ma2 dib bw2 shadow-5`}>
                <div className="black-text text-darken-2"><h5>{resource.name}</h5></div>
                <div className="black-text text-darken-2">{resource.description}</div>
            </div></a>
        )
    })
    return (
        <div className="br--top bw2">
            {cards}
        </div>
    )
}

export default Card
