var btn = document.getElementById("btn");
var output = document.getElementById("output");
var quotes = [
    '“Be yourself; everyone else is already taken.”―Oscar Wilde',
    '“Live as if you were to die tomorrow. Learn as if you were to live forever.” ―Mahatma Gandhi',
    '“Some day you will be old enough to start reading fairy tales again.” ―C.S. Lewis',
    '“Remember, we are madly in love, so its all right to kiss me anytime you feel like it.”―Suzanne Collins',
    '“Books are a uniquely portable magic.”―Stephen King',
    '“What a slut time is. She screws everybody.”―John Green',
    '“But better to get hurt by the truth than comforted with a lie.”―Khaled Hosseini',
    '“... a mind needs books like a sword needs a whetstone, if it is to keep its edge.”―George R.R. Martin',
    '“Memories warm you up from the inside. But they also tear you apart.”―Haruki Murakami',
    '“Never tell the truth to people who are not worthy of it.”―Mark Twain',
];

btn.addEventListener('click', function(){
    var randomquote = quotes[Math.floor(Math.random() * quotes.length) ]
output.innerHTML = randomquote;
})