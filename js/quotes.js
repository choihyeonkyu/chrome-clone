const quotes = [
    {
        quote: "Self-confidence is the first requisite to great undertakings.",
        author: "--- Samuel Johnson"
    },
    {
        quote: "It is not always the same thing to be a good man and a good citizen.",
        author: "--- Aristotle"
    },
    {
        quote: "Real knowledge is to know the extent of one's ignorance.",
        author: "--- Confucius"
    },
    {
        quote: "Fashion is architecture: it is a matter of proportions.",
        author: "--- Gabriel Coco Chanel"
    },
    {
        quote: "To have doubted one's own first principles is the mark of a civilized man.",
        author: "--- Oliver Wendell Holmes Jr."
    },
    {
        quote: "He not busy being born is busy dying.",
        author: "--- Bob Dylan"
    },
    {
        quote: "Youth is easily deceived because it is quick to hope.",
        author: "--- Aristotle"
    },
    {
        quote: "Dream as if you'll live forever. Live as if you'll die today.",
        author: "--- James Dean"
    },
    {
        quote: "The great tragedy of Science - the slaying of a beautiful hypothesis by an ugly fact.",
        author: "--- Thomas H. Huxley"
    },
    {
        quote: "It is not white hair that engenders wisdom.",
        author: "--- Menander"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;