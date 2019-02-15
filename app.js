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

    
    myForm.addEventListener('submit', saveBookmark);

})();