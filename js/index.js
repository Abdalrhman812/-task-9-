const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Robert Frost', 
     'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'Oscar Wilde', 
     'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
];

var lastQuoteIndex = -1;

function generateQuote() {
    var random;

    do {
        random = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (random === lastQuoteIndex);

    lastQuoteIndex = random;

    const quoteElement = document.querySelector('#quoteOutput');
    const authorElement = document.querySelector('#authorOutput');

    quoteElement.textContent = `"${arrayOfQuotes[random].quote}"`;
authorElement.textContent = `--${arrayOfQuotes[random].author}`;
}
