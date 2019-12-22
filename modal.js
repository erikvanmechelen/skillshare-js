// a couple functions which take a couple different parameters

// close function because you need to close the modal somehow

// customize the content, title/content through html-enabled

// object.onclick = function(){myScript};

// In JavaScript, using the addEventListener() method:

// object.addEventListener("click", myScript);

modal = document.querySelector('.modal');
modalTitle = document.querySelector('.modal_title');
modalContent = document.querySelector('.modal_content');


function openModal(modal_title, modal_content) {
    if(this.modalCounter === undefined) {
        this.modalCounter = 0;
    }
    
    modalTitle.innerHTML = modal_title;
    modalContent.innerHTML = modal_content;

    if(modal.style.display == 'block') {
        //hide modal
        closeModal();
    } else {
        // show modal
        this.modalCounter++;
        modal.style.display = 'block';

        document.querySelector('.modal_count').innerHTML = this.modalCounter;
    }

}

function closeModal() {
    modal.style.display = 'none';

    modalTitle.innerHTML = '';
    modalContent.innerHTML = '';
}



