const pieceApp = {};

pieceApp.getChapters = function(){
    
    const proxiedUrl = `https://onepiececover.com/api/chapters/${pieceApp.currentChapter}`

    const url = new URL('https://proxy.hackeryou.com');

    url.search = new URLSearchParams({
        reqUrl: proxiedUrl
    })  


fetch(url)
        .then (data => {
            return data.json();
        })
        .then(jsonData => {
            pieceApp.displayChapter(jsonData)
        })
    }


pieceApp.displayChapter = function (arrayOfChapters) {
        
        const title = document.querySelector('.chapter-title');
        title.innerText = arrayOfChapters.chapter

        const chapterName = document.querySelector('.chapter-name');
        chapterName.innerText = arrayOfChapters.title
        

        const summary = document.querySelector('.chapter-description');
        summary.innerText = arrayOfChapters.summary;

        const chapterImage = document.querySelector('.api-img');
        chapterImage.alt = arrayOfChapters.explanation;
        chapterImage.src = arrayOfChapters.cover_images.split('|')[0] 
}


pieceApp.changeChapter = function() {
    const next = document.querySelector('.next');
    next.addEventListener('click', function () {
        
    pieceApp.currentChapter = pieceApp.currentChapter + 1;
    pieceApp.getChapters(pieceApp.currentChapter);
})
    const previous = document.querySelector('.previous');
    previous.addEventListener('click', function() { 
        
        if (pieceApp.currentChapter !== 1){
        pieceApp.currentChapter = pieceApp.currentChapter - 1;
        pieceApp.getChapters(pieceApp.currentChapter);
        }
    })
}

const chSelectors = document.querySelector('#chapter-selection')

chSelectors.addEventListener("change", function (event) {
    event.preventDefault
    const selection = this.value

    pieceApp.init = function () {
        pieceApp.currentChapter = selection
        pieceApp.getChapters(pieceApp.currentChapter)
        pieceApp.changeChapter();
    }
    pieceApp.init();
})

pieceApp.init = function() {
    pieceApp.currentChapter = 1
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
}

pieceApp.init();

