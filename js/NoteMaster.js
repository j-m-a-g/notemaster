/** @author J. Maghamez */
"use strict";

const quill = new Quill("#mainEditor", {
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: '"Everything begins with an idea" - Earl Nightingale',
  theme: "snow"
});

class NoteMaster {
  static adjustedHeight = `${window.innerHeight - 35}px`;
  static appName = "NoteMaster";
  static checkedImageSource = "assets/images/check_000000.svg";
  static fileViewingHistoryNames = [];
  static fileViewingHistoryTimes = [];
  static symbolList = [
    ["¡", "Inverted Exclamation Mark"],
    ["¢", "Cent"],
    ["£", "Pound"],
    ["¤", "Currency"],
    ["¥", "Yen"],
    ["¦", "Broken Bar"],
    ["§", "Section"],
    ["¨", "Diaeresis"],
    ["©", "Copyright"],
    ["«", "Left Double Angle Quotation Mark"],
    ["¬", "Not"],
    ["®", "Registered"],
    ["¯", "Macron"],
    ["°", "Degree"],
    ["±", "Plus-Minus"],
    ["²", "Squared"],
    ["³", "Cubed"],
    ["´", "Acute"],
    ["µ", "Micro"],
    ["¶", "Pilcrow"],
    ["·", "Middle Dot"],
    ["¸", "Cedilla"],
    ["¹", "Superscript One"],
    ["º", "Masculine Ordinal Indicator"],
    ["»", "Right Double Angle Quotation Mark"],
    ["¼", "One Quarter"],
    ["½", "One Half"],
    ["¾", "Three Quarters"],
    ["¿", "Inverted Question Mark"],
    ["À", "Latin Uppercase A With Grave"],
    ["Á", "Latin Uppercase A With Acute"],
    ["Â", "Latin Uppercase A With Circumflex"],
    ["Ã", "Latin Uppercase A With Tilde"],
    ["Ã", "Latin Uppercase A With Tilde"],
    ["Ã", "Latin Uppercase A With Diaeresis"],
    ["Å", "Latin Uppercase A With Ring"],
    ["Æ", "Latin Uppercase AE"],
    ["Ç", "Latin Uppercase C With Cedilla"],
    ["È", "Latin Uppercase E With Grave"],
    ["É", "Latin Uppercase E With Acute"],
    ["Ê", "Latin Uppercase E With Circumflex"],
    ["Ê", "Latin Uppercase E With Circumflex"],
    ["Ë", "Latin Uppercase E With Diaeresis"],
    ["Ì", "Latin Uppercase I With Grave"],
    ["Í", "Latin Uppercase I With Acute"],
    ["Í", "Latin Uppercase I With Acute"],
    ["Î", "Latin Uppercase I With Circumflex"],
    ["Î", "Latin Uppercase I With Circumflex"],
    ["Ï", "Latin Uppercase I With Diaeresis"],
    ["Ð", "Latin Uppercase Eth"],
    ["Ñ", "Latin Uppercase N With Tilde"],
    ["Ò", "Latin Uppercase O With Grave"],
    ["Ó", "Latin Uppercase O With Acute"],
    ["Ô", "Latin Uppercase O With Circumflex"],
    ["Õ", "Latin Uppercase O With Tilde"],
    ["Ö", "Latin Uppercase O With Diaeresis"],
    ["×", "Multiplication"],
    ["Ø", "Latin Uppercase O With Stroke"],
    ["Ù", "Latin Uppercase U With Grave"],
    ["Ú", "Latin Uppercase U With Acute"],
    ["Û", "Latin Uppercase U With Circumflex"],
    ["Ü", "Latin Uppercase U With Diaeresis"],
    ["Ý", "Latin Uppercase Y With Acute"],
    ["Þ", "Latin Uppercase Thom"],
    ["ß", "Latin Lowercase Sharp S"],
    ["à", "Latin Lowercase A With Grave"],
    ["á", "Latin Lowercase A With Acute"],
    ["â", "Latin Lowercase A With Circumflex"],
    ["ã", "Latin Lowercase A With Tilde"],
    ["ä", "Latin Lowercase A With Diaeresis"],
    ["å", "Latin Lowercase A With Ring"],
    ["æ", "Latin Lowercase AE"],
    ["ç", "Latin Lowercase C With Cedilla"],
    ["è", "Latin Lowercase E With Grave"],
    ["é", "Latin Lowercase E With Acute"],
    ["ê", "Latin Lowercase E With Circumflex"],
    ["ë", "Latin Lowercase E With Diaeresis"],
    ["ì", "Latin Lowercase I With Grave"],
    ["í", "Latin Lowercase I With Acute"],
    ["î", "Latin Lowercase I With Circumflex"],
    ["ï", "Latin Lowercase I With Diaeresis"],
    ["ð", "Latin Lowercase Eth"],
    ["ñ", "Latin Lowercase N With Tilde"],
    ["ò", "Latin Lowercase O With Grave"],
    ["ó", "Latin Lowercase O With Acute"],
    ["ô", "Latin Lowercase O With Circumflex"],
    ["õ", "Latin Lowercase O With Tilde"],
    ["ö", "Latin Lowercase O With Diaeresis"],
    ["÷", "Division"],
    ["ø", "Latin Lowercase O With Stroke"],
    ["ù", "Latin Lowercase U With Grave"],
    ["ú", "Latin Lowercase U With Acute"],
    ["û", "Latin Lowercase U With Circumflex"],
    ["ü", "Latin Lowercase U With Diaeresis"],
    ["ý", "Latin Lowercase Y With Acute"],
    ["þ", "Latin Lowercase Thom"],
    ["ÿ", "Latin Lowercase Y With Diaeresis"],
    ["Ā", "Latin Uppercase A With Macron"],
    ["ā", "Latin Lowercase A With Macron"],
    ["Ă", "Latin Uppercase A With Breve"],
    ["ă", "Latin Lowercase A With Breve"],
    ["Ą", "Latin Uppercase A With Ogonek"],
    ["ą", "Latin Lowercase A With Ogonek"],
    ["Ć", "Latin Uppercase C With Acute"],
    ["ć", "Latin Lowercase C With Acute"],
    ["Ĉ", "Latin Uppercase C With Circumflex"],
    ["ĉ", "Latin Lowercase C With Circumflex"],
    ["Ċ", "Latin Uppercase C With Dot"],
    ["ċ", "Latin Lowercase C With Dot"],
    ["Č", "Latin Uppercase C With Caron"],
    ["č", "Latin Lowercase C With Caron"],
    ["ď", "Latin Lowercase D With Caron"]
  ];
  static uncheckedImageSource = "assets/images/menu_dropdown_placeholder.svg";

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
  static shiftProgressValue(progressObject, currentValue, maxValue, stepValue) {
    if (currentValue < maxValue) {
      document.querySelector(`#${progressObject}`).value = currentValue;
      currentValue += stepValue;
      setTimeout(
        this.shiftProgressValue,
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
  static dynamicallySetHeight() {
    appSectionsTable.style.height = this.adjustedHeight;
    anotherNoteView.style.height = this.adjustedHeight;
    wordDocumentView.style.height = this.adjustedHeight;
    noteEditor.style.height = this.adjustedHeight;
    codeFileView.style.height = this.adjustedHeight;

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
  static hideAndShow(hiddenContainer, shownContainer) {
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
  static alterWindowTitle(isNoteClosed) {
    if (isNoteClosed) {
      document.title = `Home - ${this.appName}`;
    } else {
      if (noteName.value === "") {
        document.title = `Untitled - ${this.appName}`;
      } else {
        document.title = `${noteName.value} - ${this.appName}`;
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
  static toggleViewer(isShown, currentViewer) {
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
  static toggleDialog(isShown, currentDialog, focusedElement) {
    dialogFocusBackground.hidden = !isShown;
    document.querySelector(`#${currentDialog}`).hidden = !isShown;

    if (focusedElement !== null) {
      document.querySelector(`#${focusedElement}`).focus();
    }
  }

  static toggleMenuCheck(imageObject) {
    if (
      document
        .querySelector(`#${imageObject}`)
        .src.includes(this.checkedImageSource)
    ) {
      document.querySelector(`#${imageObject}`).src = this.uncheckedImageSource;
    } else {
      document.querySelector(`#${imageObject}`).src = this.checkedImageSource;
    }
  }

  static alterMenuFunctions(isDisabled) {
    document.querySelector("#closeNote").disabled = isDisabled;
    document.querySelector("#downloadAsPlainText").disabled = isDisabled;
    document.querySelector("#downloadNote").disabled = isDisabled;
    document.querySelector("#hideEditor").disabled = isDisabled;
    document.querySelector("#insertDate").disabled = isDisabled;
    document.querySelector("#insertOnlineImageButton").disabled = isDisabled;
    document.querySelector("#insertSymbolButton").disabled = isDisabled;
    document.querySelector("#insertTableButton").disabled = isDisabled;
    document.querySelector("#insertTime").disabled = isDisabled;
    document.querySelector("#launchExampleButton").disabled = !isDisabled;
    document.querySelector("#printNote").disabled = isDisabled;
    document.querySelector("#quillRedo").disabled = isDisabled;
    document.querySelector("#quillUndo").disabled = isDisabled;
    document.querySelector("#save").disabled = isDisabled;
    document.querySelector("#saveForLater").disabled = isDisabled;
    document.querySelector("#showHTMLEditor").disabled = isDisabled;
  }

  static applyPercentageSizes() {
    chooseViewer.style.width = `${viewingSize.value}%`;
    viewersContainer.style.width = `${viewingSize.value}%`;
    createOrOpenContainer.style.width = `${editorSize.value}%`;
    noteEditor.style.width = `${editorSize.value}%`;
  }

  static adjustViewingAndEditorSizes() {
    // Disallows the user from manually surpassing the defined input limits
    if (viewingSize.value > viewingSize.max) {
      viewingSize.value = viewingSize.max;
    } else if (viewingSize.value < viewingSize.min) {
      viewingSize.value = viewingSize.min;
    }

    editorSize.value = 100 - viewingSize.value;
    this.applyPercentageSizes();
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
  static addHistoryEntry(valueObject) {
    this.fileViewingHistoryNames.push(
      document.querySelector(`#${valueObject}`).value
    );
    this.fileViewingHistoryTimes.push(this.get12HourTime());
  }

  /**
   * @method appendViewingHistory
   * Populates the user's Viewing History within a table every time
   * they request it through the, "Viewing History" dialog
   */
  static appendViewingHistory() {
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

    // Iterates through the history-storing arrays and adds their values to
    // the table
    for (let a = 0; a < this.fileViewingHistoryNames.length; a++) {
      const historyRow = document.createElement("tr");
      const historyTime = document.createElement("td");
      const historyName = document.createElement("td");

      historyTime.innerHTML = this.fileViewingHistoryTimes[a];
      historyName.innerHTML = this.fileViewingHistoryNames[a];

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
  static throwAppError(messageText) {
    this.toggleDialog(true, "applicationError", null);
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
  static displaySnackbar(snackbarText) {
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
  static get12HourTime() {
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
   * @method addUnicodeCharacters
   * Enables the app to populate the, "Symbols" dialog with
   * Unicode characters and their descriptions based on elements of the
   * symbolList array
   */
  static addUnicodeCharacters() {
    for (let s = 0; s < this.symbolList.length; s++) {
      for (let t = 0; t < this.symbolList[s].length; t++) {
        const symbolBox = document.createElement("div");
        const symbolTitle = document.createElement("h3");

        symbolTitle.style.textAlign = "center";
        symbolTitle.innerHTML = this.symbolList[s][0];

        symbolBox.className = "symbolContainer";
        symbolBox.title = this.symbolList[s][1];
        symbolBox.setAttribute(
          "onclick",
          `quill.insertText(quill.getSelection(focus), '${this.symbolList[s][0]}')`
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
  static onLoadTasks() {
    if (mobileDetect.phone() !== null) {
      window.location.replace("learn-more");
    }

    try {
      // Dark Mode
      if (localStorage.getItem("darkMode") === "true") {
        darkModeToggle.click();
        gettingStartedDarkMode.checked = true;
      }

      EditorFunctions.updateStatusBar();
      this.addUnicodeCharacters();
      this.dynamicallySetHeight();

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
        this.hideAndShow("createOrOpenContainer", "noteEditor");
        quill.clipboard.dangerouslyPasteHTML(
          localStorage.getItem("noteProgress")
        );

        noteName.value = localStorage.getItem("noteTitle");
        this.alterMenuFunctions(false);
      }

      // GET STARTED WINDOW
      if (localStorage.getItem("finishedGetStarted") !== "true") {
        this.toggleDialog(true, "gettingStarted", null);
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
        EditorFunctions.initiateNote(false);
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
        this.adjustViewingAndEditorSizes();
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

      noteHTMLCodeEditor.session.setMode("ace/mode/html");
      noteHTMLCodeEditor.session.setUseWrapMode(true);
      noteHTMLCodeEditor.setReadOnly(true);

      codeFileViewCodeEditor.session.setMode("ace/mode/plain_text");
      codeFileViewCodeEditor.session.setUseWrapMode(true);
      codeFileViewCodeEditor.setReadOnly(true);

      appLoad.hidden = true;
    } catch (error) {
      this.throwAppError(error);
    }
  }
}
