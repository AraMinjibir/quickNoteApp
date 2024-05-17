// Variable declearation

const noteTextarea = document.querySelector('#noteTextarea');
const borderColorSelector = document.querySelector('#borderColorSelector');
const saveNoteBtn = document.querySelector('#saveNoteBtn');
const notesList = document.querySelector('#notesList'); 




// Add event listener

saveNoteBtn.addEventListener('click', saveNoteBtnClicked);
// Function

function saveNoteBtnClicked(){
    const newNote =  noteTextarea.value;

    if (newNote && borderColorSelector.options.selectedIndex !== 0) {
        var borderColor = borderColorSelector.options[borderColorSelector.options.selectedIndex].value
        // Create elements

        const card = document.createElement('div');
        const btnGroup = document.createElement('div');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        // set a classes
        btnGroup.setAttribute('class', 'mt-4')

        editBtn.setAttribute('class', 'border-0 px-2 ms-1 text-info');
        deleteBtn.setAttribute('class', 'border-0 px-2 ms-1 text-danger')

        // Append TextNode

        editBtn.appendChild(document.createTextNode('Edit'));
        deleteBtn.appendChild(document.createTextNode('Delete'))

        // editBtn event

        editBtn.addEventListener('click', editBtnClicked, false);

        function editBtnClicked(){
            const noteBorderColor = String(this.parentNode.parentNode.className).split(' ')[0];
            borderColorSelector.selectedIndex = borderColorSelector.children.namedItem(noteBorderColor).index;
            noteTextarea.value = newNote
            notesList.removeChild(document.getElementById(newNote))
        }
       
 
        // deleteBtn event

        deleteBtn.addEventListener('click', deleteBtnClicked);

        function deleteBtnClicked(){
            confirm('Are you sure you want to delete this ?')
            notesList.removeChild(document.getElementById(newNote))

        }

        // Append btn
        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(deleteBtn);

        const noteStyle = borderColor + ' mb-3 p-3'
        // Card attributes

        card.setAttribute('class',noteStyle);
        card.setAttribute('id', newNote);
        card.appendChild(btnGroup);

        // Append card

        notesList.appendChild(card);

        // clear the fields
        noteTextarea.value = ''
        borderColorSelector.options.selectedIndex = 0
    } else{
        alert('A note can neither be empty nor could it have no border color!')
    }
}