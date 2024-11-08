// Step 1: Declare references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 2: Initialize chaptersArray from localStorage or as an empty array
let chaptersArray = getChapterList() || [];

// Step 3: Display the existing chapters from localStorage
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Step 4: Handle button click to add a new chapter
button.addEventListener('click', () => {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

// Step 5: Define the displayList function
function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  
  li.append(deleteButton);
  list.append(li);

  // Step 6: Add event listener for deleting a chapter
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });
}

// Step 7: Define the setChapterList function to save to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Step 8: Define the getChapterList function to retrieve from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Step 9: Define the deleteChapter function to remove a chapter
function deleteChapter(chapter) {
  // Remove the "❌" character at the end of the chapter string
  chapter = chapter.slice(0, chapter.length - 1);

  
  // Filter out the chapter from chaptersArray
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  
  // Update localStorage
  setChapterList();
}
