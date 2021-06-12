const pieceApp = {};

pieceApp.getChapters = function(){
    
    let proxiedUrl = `https://onepiececover.com/api/chapters/${pieceApp.currentChapter}`

    const url = new URL('http://proxy.hackeryou.com');

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


const arcMenu = document.querySelector('#arc-menu');
const arcSelectors = document.querySelector('#arc-selection')

const chapterGallery = document.querySelector('#hide-chapters');
const boxes = document.querySelector('.arcs-list')

const firstArc = document.querySelector('#arc-1');
const secondArc = document.querySelector('#arc-2');
const thirdArc = document.querySelector('#arc-3');
const fourthArc = document.querySelector('#arc-4');
const fifthArc = document.querySelector('#arc-5');
const sixthArc = document.querySelector('#arc-6');
const seventhArc = document.querySelector('#arc-7');
const eighthArc = document.querySelector('#arc-8')
const ninthArc = document.querySelector('#arc-9');
const tenthArc = document.querySelector('#arc-10');






    arcSelectors.addEventListener("change", function (event)  {
        event.preventDefault
        const selection = this.value

        pieceApp.init = function () {
            pieceApp.currentChapter = selection
            pieceApp.getChapters(pieceApp.currentChapter)
            pieceApp.changeChapter();
        }
        pieceApp.init();
    })



function hideChapters() {
    chapterGallery.style.display = "none";
    arcMenu.style.display ="none"
}

hideChapters();


function showChapters() {
    chapterGallery.style.display = "block";
    arcMenu.style.display = "block";
}

firstArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 1
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();

})


secondArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 101
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();
    
})

thirdArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 218
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();

})


fourthArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 303
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();
    
})

fifthArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 442
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();

})


sixthArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 490
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();
    
})

seventhArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 598
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();

})


eighthArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 654
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();
    
})

ninthArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 802
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();

})


tenthArc.addEventListener("click", (event) => {
    event.preventDefault();
    showChapters();
    boxes.style.display = "none";

    pieceApp.init = function() {
    pieceApp.currentChapter = 903
    pieceApp.getChapters(pieceApp.currentChapter)
    pieceApp.changeChapter();
    }

    pieceApp.init();
    
})
