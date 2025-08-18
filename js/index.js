// Note editor on the right side
const quill = new Quill("#mainEditor", {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: '"Everything begins with an idea" - Earl Nightingale',
  theme: "snow"
});

// Editor on the right side for viewing notes
const anotherNoteViewQuill = new Quill("#anotherNoteView", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  theme: "snow"
});

// Displays the user their Viewing History as a table to
// be copied
const copyHistoryQuill = new Quill("#copyHistoryEditor", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  theme: "snow"
});

const insertTableQuill = new Quill("#insertTableEditor", {
  readOnly: true,
  modules: {
    toolbar: null
  },
  placeholder: "You haven't created a table yet",
  theme: "snow"
});

noteHTMLCodeEditor.session.setMode("ace/mode/html");
noteHTMLCodeEditor.setReadOnly(true);
noteHTMLCodeEditor.session.setUseWrapMode(true);

codeFileViewCodeEditor.session.setMode("ace/mode/plain_text");
codeFileViewCodeEditor.setReadOnly(true);
codeFileViewCodeEditor.session.setUseWrapMode(true);

/**
 * @method shiftProgressValue
 * Lets <progress> elements be gradually shifted to a specified value
 * within an, "animated fashion"
 *
 * @param {string} progressObject - The name of the HTML DOM <progress> element
 * @param {number} currentValue - The value the <progress> element is at prior to the method's execution
 * @param {number} maxValue - The value the element must reach by the end of the method's execution
 * @param {number} stepValue - The number that the <progress> element must increment by until it reaches maxValue
 */
function shiftProgressValue(progressObject, currentValue, maxValue, stepValue) {
  if (currentValue < maxValue) {
    document.querySelector(`#${progressObject}`).value = currentValue;
    currentValue += stepValue;
    setTimeout(
      shiftProgressValue,
      1,
      progressObject,
      currentValue,
      maxValue,
      stepValue
    );
  }
}

/**
 * @method dynamicallySetHeight
 * Sets the height of certain elements dependent on the height
 * of a user's browser window
 */
function dynamicallySetHeight() {
  appSectionsTable.style.height = adjustedHeight;
  anotherNoteView.style.height = adjustedHeight;
  wordDocumentView.style.height = adjustedHeight;
  noteEditor.style.height = adjustedHeight;
  codeFileView.style.height = adjustedHeight;

  // Applies the adjusted height to every iFrame on the page
  for (let iframe = 0; iframe < iframes.length; iframe++) {
    iframes[iframe].style.height = window.innerHeight + "px";
  }
}

/**
 * @method hideAndShow
 * Allows a view to be hidden from the user and
 * another to be displayed instead
 *
 * @param {string} hiddenContainer - The name of the HTML DOM object to be hidden
 * @param {string} shownContainer - The name of the HTML DOM object to be shown
 */
function hideAndShow(hiddenContainer, shownContainer) {
  document.querySelector(`#${hiddenContainer}`).hidden = true;
  document.querySelector(`#${shownContainer}`).hidden = false;
}

/**
 * @method alterWindowTitle
 * Updates the tab's title to include the name of a
 * note a user is currently working on or indicate that
 * they are on, "Home"
 *
 * @param {boolean} isNoteClosed - Indicates whether the user has a note open or not
 */
function alterWindowTitle(isNoteClosed) {
  if (isNoteClosed) {
    document.title = `Home - ${appName}`;
  } else {
    if (noteName.value === "") {
      document.title = `Untitled - ${appName}`;
    } else {
      document.title = `${noteName.value} - ${appName}`;
    }
  }
}

/**
 * @method toggleViewer
 * Enables the app to either show or hide a certain
 * viewer to the user
 *
 * @param {boolean} isShown - Whether the viewer should be shown to the user
 * @param {string} currentViewer - The name of the division to be displayed or hidden
 */
function toggleViewer(isShown, currentViewer) {
  document.querySelector(`#${currentViewer}`).hidden = !isShown;
  viewersContainer.hidden = !isShown;
  chooseViewer.hidden = isShown;
}

/**
 * @method toggleDialog
 * Enables the app to either show or hide a certain
 * dialog to the user
 *
 * @param {boolean} isShown - Whether the dialog should be shown to the user
 * @param {string} currentDialog - The name of the division to be displayed or hidden
 * @param {string} focusedElement - The name of an HTML DOM object to be put into focus once the specified dialog has been shown
 */
function toggleDialog(isShown, currentDialog, focusedElement) {
  dialogFocusBackground.hidden = !isShown;
  document.querySelector(`#${currentDialog}`).hidden = !isShown;

  if (focusedElement !== null) {
    document.querySelector(`#${focusedElement}`).focus();
  }
}

function toggleMenuCheck(imageObject) {
  if (
    document.querySelector(`#${imageObject}`).src.includes(checkedImageSource)
  ) {
    document.querySelector(`#${imageObject}`).src = uncheckedImageSource;
  } else {
    document.querySelector(`#${imageObject}`).src = checkedImageSource;
  }
}

function alterMenuFunctions(isDisabled) {
  document.querySelector("#closeNote").disabled = isDisabled;
  document.querySelector("#downloadAsPlainText").disabled = isDisabled;
  document.querySelector("#downloadNote").disabled = isDisabled;
  document.querySelector("#hideEditor").disabled = isDisabled;
  document.querySelector("#insertDate").disabled = isDisabled;
  document.querySelector("#insertOnlineImageButton").disabled = isDisabled;
  document.querySelector("#insertSymbolButton").disabled = isDisabled;
  document.querySelector("#insertTableButton").disabled = isDisabled;
  document.querySelector("#insertTime").disabled = isDisabled;
  document.querySelector("#printNote").disabled = isDisabled;
  document.querySelector("#quillRedo").disabled = isDisabled;
  document.querySelector("#quillUndo").disabled = isDisabled;
  document.querySelector("#save").disabled = isDisabled;
  document.querySelector("#saveForLater").disabled = isDisabled;
  document.querySelector("#showHTMLEditor").disabled = isDisabled;
}

function applyPercentageSizes() {
  chooseViewer.style.width = `${viewingSize.value}%`;
  viewersContainer.style.width = `${viewingSize.value}%`;
  createOrOpenContainer.style.width = `${editorSize.value}%`;
  noteEditor.style.width = `${editorSize.value}%`;
}

function adjustViewingAndEditorSizes() {
  // Disallows the user from manually surpassing the defined input limits
  if (viewingSize.value > viewingSize.max) {
    viewingSize.value = viewingSize.max;
  } else if (viewingSize.value < viewingSize.min) {
    viewingSize.value = viewingSize.min;
  }

  editorSize.value = 100 - viewingSize.value;
  applyPercentageSizes();
  localStorage.setItem("viewingSizeValue", viewingSize.value);
}

/**
 * @method addHistoryEntry
 * Appends the name of a document - as well as the
 * time it was seen by the user - to an array
 * to be iterated through once they request their Viewing History
 *
 * @param {string} valueObject - The name of the <input type="file"> element to retrieve the file name from
 */
function addHistoryEntry(valueObject) {
  fileViewingHistoryNames.push(document.querySelector(`#${valueObject}`).value);
  fileViewingHistoryTimes.push(get12HourTime());
}

/**
 * @method appendViewingHistory
 * Populates the user's Viewing History within a table every time
 * they request it through the, "Viewing History" dialog
 */
function appendViewingHistory() {
  // Resets the table's state to prevent duplication
  viewingHistoryTable.innerHTML = "";

  const headRow = document.createElement("tr");
  const timeHead = document.createElement("td");
  const nameHead = document.createElement("td");
  timeHead.innerHTML = "<b>Time</b>";
  nameHead.innerHTML = "<b>Document</b>";

  headRow.appendChild(timeHead);
  headRow.appendChild(nameHead);
  viewingHistoryTable.appendChild(headRow);

  // Iterates through the history-storing arrays and adds their values to the table
  for (let a = 0; a < fileViewingHistoryNames.length; a++) {
    const historyRow = document.createElement("tr");
    const historyTime = document.createElement("td");
    const historyName = document.createElement("td");

    historyTime.innerHTML = fileViewingHistoryTimes[a];
    historyName.innerHTML = fileViewingHistoryNames[a];

    historyRow.appendChild(historyTime);
    historyRow.appendChild(historyName);
    viewingHistoryTable.appendChild(historyRow);
  }
}

/**
 * @method throwAppError
 * Prompts the user with a dialog indicating an error has
 * occurred within the app - in the event one does - and
 * indicates what they should do to try and resolve it
 *
 * @param {string} messageText - The message to be displayed in the error dialog
 */
function throwAppError(messageText) {
  toggleDialog(true, "applicationError", null);
  errorMessage.innerHTML = messageText;
}

/**
 * @method displaySnackbar
 * Presents the user with a banner towards the top of
 * their screen, providing them with feedback whenever certain actions have
 * been successfully completed
 *
 * @param {string} - The message to be displayed in the snack-bar
 */
function displaySnackbar(snackbarText) {
  // Shows the snack-bar from its, "display" style of "none"
  snackbar.style.display = "flex";
  snackbarMessage.innerHTML = snackbarText; // Applies the argument from the snackBarText parameter

  // Hides the snack-bar once again after a 7.5 second delay
  setTimeout(function () {
    snackbar.style.display = "none";
  }, 7500);
}

/**
 * @function get12HourTime
 * Lets the app present the user with times in 12-hour
 * format as opposed to the default 24-hour format JavaScript uses
 * in the Date object by default
 *
 * @returns {string} - A human-readable display of the current time in 12-hour format
 */
function get12HourTime() {
  let hour;
  let minute;
  let suffix;

  // Removes the standard 24-hour format
  if (currentDate.getHours() > 12) {
    hour = currentDate.getHours() - 12;
  } else if (currentDate.getHours() < 10) {
    hour = currentDate.getHours().toString().replace("0", "");
  } else {
    hour = currentDate.getHours();
  }

  // Accounts for minutes 1-9
  if (currentDate.getMinutes() < 10) {
    minute = "0" + currentDate.getMinutes();
  } else {
    minute = currentDate.getMinutes();
  }

  // Adds, "AM" or "PM"
  if (currentDate.getHours() < 12) {
    suffix = " AM";
  } else {
    suffix = " PM";
  }

  return hour + ":" + minute + suffix;
}

/**
 * @method createTable
 * Enables the user to create a table within the, "Insert
 * Table" dialog with an amount of rows and columns of
 * their choosing
 */
function createTable() {
  createdTable.innerHTML = "";
  for (let rows = 0; rows < tableRows.value; rows++) {
    const currentRow = document.createElement("tr");
    for (let columns = 0; columns < tableColumns.value; columns++) {
      const currentColumn = document.createElement("td");
      // Accounts for the fact that the last cell must contain text to be copied
      if (columns === tableColumns.value - 1 && rows === tableRows.value - 1) {
        currentColumn.innerHTML = "ㅤ";
      }

      currentRow.appendChild(currentColumn);
    }

    createdTable.appendChild(currentRow);
  }

  insertTableQuill.clipboard.dangerouslyPasteHTML(tableSourceHTML.innerHTML);
}

/**
 * @method addUnicodeCharacters
 * Enables the app to populate the, "Symbols" dialog with
 * Unicode characters and their descriptions based on elements of the
 * symbolList array
 */
function addUnicodeCharacters() {
  for (let s = 0; s < symbolList.length; s++) {
    for (let t = 0; t < symbolList[s].length; t++) {
      const symbolBox = document.createElement("div");
      const symbolTitle = document.createElement("h3");

      symbolTitle.style.textAlign = "center";
      symbolTitle.innerHTML = symbolList[s][0];

      symbolBox.className = "symbolContainer";
      symbolBox.title = symbolList[s][1];
      symbolBox.setAttribute(
        "onclick",
        `quill.insertText(quill.getSelection(focus), '${symbolList[s][0]}')`
      );
      symbolBox.appendChild(symbolTitle);

      symbolsDisplay.appendChild(symbolBox);
      break;
    }
  }
}

/**
 * @method onLoadTasks
 * Checks whether the user is attempting to access NoteMaster from
 * a mobile phone device - to otherwise redirect them to the
 * app's product page instead - and, if not, loads their preferences
 * as well as adjusts certain aspects of the page
 */
function onLoadTasks() {
  if (mobileDetect.phone() !== null) {
    window.location.replace("learn-more");
  }

  try {
    // Dark Mode
    if (localStorage.getItem("darkMode") === "true") {
      darkModeToggle.click();
      gettingStartedDarkMode.checked = true;
    }

    dynamicallySetHeight();
    updateStatusBar();
    addUnicodeCharacters();

    if (currentDate.getHours() < 12) {
      userGreeting.innerHTML = "Good Morning 😎";
    } else if (currentDate.getHours() >= 12 && currentDate.getHours() < 18) {
      userGreeting.innerHTML = "Good Afternoon 🌞";
    } else {
      userGreeting.innerHTML = "Good Evening 🌚";
    }

    if (
      localStorage.getItem("noteProgress") !== "<p></p>" &&
      localStorage.getItem("noteProgress") !== null
    ) {
      hideAndShow("createOrOpenContainer", "noteEditor");
      quill.clipboard.dangerouslyPasteHTML(
        localStorage.getItem("noteProgress")
      );

      noteName.value = localStorage.getItem("noteTitle");
      alterMenuFunctions(false);
    }

    // GET STARTED WINDOW
    if (localStorage.getItem("finishedGetStarted") !== "true") {
      toggleDialog(true, "gettingStarted", null);
    }

    // WRITING INSIGHTS
    if (localStorage.getItem("totalWordCountArray") === null) {
      addedWordCountArray = [];
      localStorage.setItem(
        "totalWordCountArray",
        JSON.stringify(addedWordCountArray)
      );
    }

    if (localStorage.getItem("totalCharacterCountArray") === null) {
      addedCharacterCountArray = [];
      localStorage.setItem(
        "totalCharacterCountArray",
        JSON.stringify(addedCharacterCountArray)
      );
    }

    // SHARED NOTE CHECK
    if (
      workingURLParameters.has("name") ||
      workingURLParameters.has("markup")
    ) {
      initiateNote(false);
      noteName.value = workingURLParameters.get("name");
      quill.clipboard.dangerouslyPasteHTML(
        decodeURIComponent(workingURLParameters.get("markup"))
      );

      // Removes the parameters from being displayed in a user's address
      // bar for security reasons
      history.pushState(null, "", window.location.href.split("?")[0]);
    }

    // RETRIEVE SAVED NOTES
    if (localStorage.getItem("savedNotes") !== null) {
      savedForLater.innerHTML = localStorage.getItem("savedNotes");
      savedForLaterDetails.click();
      savedForLaterDetails.open = true;
    }

    // USER PREFERENCES
    // Auto Save
    if (localStorage.getItem("autoSaveEnabled") === "true") {
      autoSave.click();
    }

    // Word Wrap
    if (localStorage.getItem("wordWrapEnabled") === "true") {
      wordWrap.click();
    }

    // Code Editor Theme
    if (localStorage.getItem("selectedCodeEditorTheme") !== null) {
      codeEditorTheme.value = localStorage.getItem("selectedCodeEditorTheme");
      noteHTMLCodeEditor.setTheme(`ace/theme/${codeEditorTheme.value}`);
      codeFileViewCodeEditor.setTheme(`ace/theme/${codeEditorTheme.value}`);
    }

    // Viewing and Editor Size
    if (localStorage.getItem("viewingSizeValue") !== null) {
      viewingSize.value = localStorage.getItem("viewingSizeValue");
      adjustViewingAndEditorSizes();
    }

    // Typing Target
    if (localStorage.getItem("storedTypingTarget") !== null) {
      if (localStorage.getItem("customTarget") === "false") {
        typingTarget.hidden = false;
        typingTarget.value = localStorage.getItem("storedTypingTarget");
      } else if (localStorage.getItem("customTarget") === "true") {
        customTypingTarget.hidden = false;
        customTypingTarget.value = localStorage.getItem("storedTypingTarget");
      }

      setTypingTarget.click();
      snackbar.style.display = "none";
    }

    appLoad.hidden = true;
  } catch (error) {
    throwAppError(error);
  }
}
