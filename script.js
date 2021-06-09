const pieceApp = {};

pieceApp.getChapters = function(){

    let proxiedUrl = "https://onepiececover.com/api/chapters/"

    const url = new URL('http://proxy.hackeryou.com');

    url.search = new URLSearchParams({
        reqUrl: proxiedUrl
})  


async function onePieceChapters(id) {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        return data;
    }
    const mangaChapters = [];
    // console log to see the 40 pokemon in an array
    // console.log(pokeBag)

    for (let i = 1; i <= 20; i++) {
        mangaChapters.push( onePieceChapters(i) );
    }

    Promise.all(mangaChapters)
        .then(data => {
            data.forEach(chapter => {
                

            })
            pieceApp.displayChapter(chapter);
        })

 }

pieceApp.displayChapter = function(arrayOfChapters) {
    const clearHTML = document.querySelector('.chapters-gallery')
    clearHTML.innerHTML = "";
    arrayOfChapters.forEach(page => {
        const title = document.querySelector('h2');
        title.innerText = page.chapter;

        const summary = document.querySelector('p');
        summary.innerText = page.summary;

        const chapterImage = document.querySelector('img');
        image.alt = page.description;
        image.src = page.cover_images.split('|');

        console.log();

    })
}

pieceApp.init = function() {
    pieceApp.getChapters();
}

pieceApp.init();