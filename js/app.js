document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);
  
  const deleteInput = document.querySelector("#delete");
  form.addEventListener("submit", handleFormDeleteAll)
    
  
  
});


const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultParagraph = document.querySelector("#reading-list");
  const newLi = document.createElement("li");
  newLi.textContent = `
  Title:${event.target.title.value}, 
  Author:${event.target.author.value}, 
  Category:${event.target.category.value}`

  resultParagraph.appendChild(newLi);
  
  event.target.reset();
};
const handleFormDeleteAll = function(){
  
}
  const newInput = document.createElement("input");
  newInput.textContent = "Delete All" ;
  newInput.type("submit")
  newInput.id("delete")
  const body = document.querySelector("body");
  body.appendChild(newInput);
    
