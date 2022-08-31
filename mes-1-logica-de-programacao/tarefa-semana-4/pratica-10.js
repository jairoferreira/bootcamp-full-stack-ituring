function tweets (conteudo, likes, shares){
    let tweet = {}

    tweet.conteudo = conteudo
    tweet.likes = likes
    tweet.shares = shares

    tweet.darlikes = function () {
        this.likes ++
    }

    return tweet
}

let novoTweet = tweets("asdasdasdasdasd", 15)
console.log(novoTweet.likes)
novoTweet.darlikes()
console.log(novoTweet.likes)

