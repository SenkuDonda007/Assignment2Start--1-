// constants for query selector
const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const studentId = document.getElementById('myStudentId');

// function to change bg color from user input and add student id
function changeCustomColor() {
  const value = parseInt(customNumberInput.value);

  if (value >= 0 && value <= 100) {
    studentId.textContent = `Student ID: ${value}`;

    if (value < 20) {
      document.body.style.backgroundColor = 'green';
    } else if (value < 40) {
      document.body.style.backgroundColor = 'blue';
    } else if (value < 60) {
      document.body.style.backgroundColor = 'orange';
    } else if (value < 80) {
      document.body.style.backgroundColor = 'purple';
    } else {
      document.body.style.backgroundColor = 'yellow';
    }
  } else {
    document.body.style.backgroundColor = 'red';
  }
}

// function to change bg color from random no.
function changeRandomColor() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  studentId.textContent = `Student ID: ${randomNumber}`;
  customNumberInput.value = randomNumber;
  changeCustomColor();
}

// function to generate options for select list
function addList() {
  // Tip: you might have to check length condition so that the list does not keep growing when clicked
  // Tip: use createElement and appendChild inside every for loop to add elements to select list from array

  const imageArray = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
  ];

  for (let i = 0; i < imageArray.length; i++) {
    const option = document.createElement('option');
    option.value = imageArray[i];
    option.text = `Image ${i + 1}`;
    imageSelect.appendChild(option);
  }
}

// function to change image
function changeImage() {
  const selectedOption = imageSelect.options[imageSelect.selectedIndex];
  const selectedImageName = selectedOption.value;
  images.src = `img/${selectedImageName}`;
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);

// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);

document.addEventListener('DOMContentLoaded', addList);
