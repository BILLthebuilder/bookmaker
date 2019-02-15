(function () {
    let myForm = document.getElementById('myForm');
    function saveBookmark(e) {
        e.preventDefault();
        let siteName = document.getElementById('siteName').value;

        let urlName = document.getElementById('urlName').value;

        let thebookmarks = {
            name: siteName,
            url: urlName
        }


        if (!siteName && !urlName) {
            alert('Please fill in the fields');
        }
        else {
            if (!localStorage.getItem('values')) {
                let bookmarks = [];
                bookmarks.push(thebookmarks);
                localStorage.setItem('values', JSON.stringify(bookmarks));
            }
            else {
                let newBookmark = JSON.parse(localStorage.getItem('values'));
                newBookmark.push(thebookmarks);
                localStorage.setItem('values', JSON.stringify(newBookmark));
            }

        }

    }

    function fetchBookmarks(){
        let bookmarks = JSON.parse(localStorage.getItem('values'));
        let results = document.getElementById('results');

        // bookmarks.forEach(value=>{
        //     let name = value.siteName;
        //     results.innerHTML = `${name}`;
        // });
        for (let i=0; i<bookmarks.length; i++){
            let name = bookmarks[i].name;
            let url = bookmarks[i].url;
            results.innerHTML += `<div class="card card-body"> 
                                <h3>${name}
                                <a class="btn btn-info" target="_blank" href="${url}">Visit</a>
                                <a onClick="deleteBookmark(${url})" class="btn btn-danger" href="#">Delete</a>

                                </h3>
                                    </div>`;
        }
        
    }
    window.onload = fetchBookmarks();
    myForm.addEventListener('submit', saveBookmark);

})();