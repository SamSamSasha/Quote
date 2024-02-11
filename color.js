let quoteButton = document.querySelector(".quoteChanger")

let quote = document.querySelector(".quote")

let body = document.querySelector("body")

let author = document.querySelector(".author")

let quotes = [
    {
        text: "Как правило, самые сильные люди - это.",
        author: "Яндекс Дзен"
    },
    {
        text: "Проблема цитат в сети Интернет заключается в том, что люди безоговорочно верят в их подлинность",
        author: "В.И.Ленин"
    },
    {
        text: "Когда одеваешься на выпускной",
        author: "ВКнотакте"
    },
    {
        text: "Veni, vidi, vici",
        author: "Cesar"
    },
    {
        text: "Когда меня рожали, собственно тогда я и родился",
        author: "Джейсон Стетхем" 
    },
    {
        text: "Нация перестает существовать, когда она перестает слушать репчик))00))",
        author: "Альберт Эйнштейн" 
    }
]

function randomizer(){
    let quoteRandom = Math.random() * quotes.length
    let quoteRandomFloored = Math.floor(quoteRandom)
    quote.innerText = `${quotes[quoteRandomFloored]["text"]}`             
    author.innerText = `Copyright: ${quotes[quoteRandomFloored]["author"]}`
}


quoteButton.addEventListener("click", randomizer)

