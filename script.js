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


    for (let i = 1; i <= 217; i++) {
        mangaChapters.push( onePieceChapters(i) );
    }

    Promise.all(mangaChapters)
        .then(data => {
        
                pieceApp.displayChapter(data);
            
        })
}

pieceApp.displayChapter = function(arrayOfChapters) {
    // const clearHTML = document.querySelector('.chapters-gallery')
    // clearHTML.innerHTML = "";
    

    arrayOfChapters.forEach(page => {
        
        const title = document.querySelector('.chapter-title');
        title.innerHTML = page.chapter
        
        const summary = document.querySelector('.chapter-description');
        summary.innerText = page.summary;

        const chapterImage = document.querySelector('.api-img');
        chapterImage.alt = page.explanation;
        chapterImage.src = page.cover_images.split('|')[0]

        // const wholePage = document.querySelector('.chapters-gallery');
        // arrayOfChapters.push(wholePage)
    });
}

pieceApp.init = function() {
    pieceApp.getChapters()
}

pieceApp.init();