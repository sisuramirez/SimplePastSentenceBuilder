/*Selected subject form selector */
const selectedSubjectType = document.getElementById("selected-subject");
/*Regular/irregular form selector*/
const verbTypeSelector = document.getElementById("regular_irregular");
/*The selected verb element */
const selectedVerbType = document.getElementById("selected_verb");
/*Container for merged text (a <p> tag) */
const sentenceBuilderResultSection = document.getElementById("sentence-builder__result-section");
/*Textbox for user input (complement of the sentence) */ 
const complementTextBox = document.getElementById("userInput");
/*Button to merge all the text*/
const mergeButton = document.getElementById("merge-button");
/*Button to clear all the text*/
const clearTextButton = document.getElementById("clear-text-button");



/* Invoked when a verb type is selected; calls the populateVerbs function */
verbTypeSelector.addEventListener("change", () => {
  populateVerbs();
});

/* Invoked when we click on the "Merge" button */
mergeButton.addEventListener("click", () => {
  mergeText();
});

clearTextButton.addEventListener("click", () => {
  clearText();
})

/*This function will be called when the verb type is already selected*/
function populateVerbs() {
  /* Get the selected verb type */
  const verbType = verbTypeSelector.value; 
   /* Clear the existing options */
  selectedVerbType.innerHTML = " ";
   /* Populate options based on the selected verb type */
  if (verbType === "regular") {
    addOptionsToSelect(["Walked", "Talked", "Played", "Helped", "Called", "Jumped", "Danced", "Asked", "Watched", "Played", "Laughed", "Stayed", "Cooked", "Cleaned", "Loved", "Opened", "Closed", "Hoped", "Worked", "Visited"]);
  } else if (verbType === "Irregular") {
    addOptionsToSelect(["Went", "Ate", "Had", "Came", "Saw", "Took", "Gave", "Wrote", "Ran", "Spoke", "Broke", "Built", "Swam", "Rode", "Drove", "Slept", "Arose", "Stole", "Froze", "Spent"]);
  }
}

function addOptionsToSelect(verbsArray) {
  verbsArray.forEach((verb) => {
    /* Create an option for the form: Select your verb */
    const option = document.createElement("option");
    /* Add a value and a text for each option*/
    option.value = verb;
    option.textContent = verb;
    /* Inject the element to the HTML (2nd step)*/
  selectedVerbType.appendChild(option);
  });
}

function mergeText() {
  const selectedVerb = selectedVerbType.value.toLowerCase();
  const selectedSubject = selectedSubjectType.value.charAt(0).toUpperCase() + selectedSubjectType.value.slice(1);
  const complementText = complementTextBox.value;
  sentenceBuilderResultSection.innerHTML = " ";
  const pTag = document.createElement("p");
  pTag.className = "sentence-builder__final-text"
  pTag.textContent = `${selectedSubject} ${selectedVerb} ${complementText} `;
  sentenceBuilderResultSection.appendChild(pTag);
 }

 function clearText() {
  sentenceBuilderResultSection.innerHTML = " ";
 }


 
function addTexts(arrayAIterarCuandoInvoquemos) {
  sentenceBuilderResultSection.innerHTML = " ";
  arrayAIterarCuandoInvoquemos.forEach(
    (parametroQueVaArepresentarACadaElementoDelArrayEnCadaIteracion) => {
      const pTag = document.createElement("p");
      pTag.textContent =
        parametroQueVaArepresentarACadaElementoDelArrayEnCadaIteracion;

      sentenceBuilderResultSection.appendChild(pTag);
    },
  );
}


