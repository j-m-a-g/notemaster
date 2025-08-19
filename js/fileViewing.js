/** @author J. Maghamez */
"use strict";

/**
 * @method taskOnceFileOpen
 * Executes crucial tasks once the user has opened a file
 * of their choosing, such as displaying technical information regarding the
 * specified document - like its name, size, and date modified - as
 * well as appending it to their Viewing History
 *
 * @param {string} unhiddenView - The name of the viewer to be unconcealed after a corresponding file is selected by the user
 * @param {string} fileInputObject - The name of the HTML DOM object which allowed them to select a specific file - i.e. an <input type="file"> element
 */
function tasksOnceFileOpen(unhiddenView, fileInputObject) {
  // Allows the user to have the option of closing the
  // viewed file and hides the "No File Selected" indication
  closeFile.disabled = false;
  noFileSelected.hidden = true;

  // Displays the viewer for the corresponding file type
  document.querySelector(`#${unhiddenView}`).hidden = false;
  if (document.querySelector(`#${fileInputObject}`) !== null) {
    fileName.innerHTML = document
      .querySelector(`#${fileInputObject}`)
      .value.replace("C:\\fakepath\\", "");

    fileSize.innerHTML = `${(event.target.files[0].size / 1048576).toFixed(2)}MB`;
    fileLastModified.innerHTML = new Date(event.target.files[0].lastModified)
      .toString()
      .slice(0, 21);
  } else {
    viewerStatusBarIndicator.hidden = true;
  }

  // Adds the current file to Viewing History
  if (fileName.innerHTML !== "---") {
    fileViewingHistoryNames.push(fileName.innerHTML);
  }

  // Adds the time the current file was opened to Viewing History
  fileViewingHistoryTimes.push(get12HourTime());
  hideViewing.disabled = false;
}

/**
 * @method closeCurrentFile
 * Closes a file the user is viewing at-hand - independent of
 * its type - resetting the state of all the file viewers
 * and file information status bar
 */
function closeCurrentFile() {
  additionalVideoControls.hidden = true;
  anotherNoteView.hidden = true;
  anotherNoteViewer.hidden = true;
  anotherNoteViewQuill.setContents();

  chooseViewer.hidden = false;

  closeFile.disabled = true;
  cloudFileView.hidden = true;
  cloudFileView.removeAttribute("src");
  cloudFileViewer.hidden = true;

  codeFileView.hidden = true;
  codeFileViewer.hidden = true;
  codeFileViewerStatusBar.hidden = true;

  customEmbedViewer.hidden = true;

  imageView.hidden = true;
  imageView.removeAttribute("src");
  imageViewer.hidden = true;

  markdownFileView.hidden = true;
  markdownFileView.removeAttribute("src");
  markdownFileViewer.hidden = true;

  noFileSelected.hidden = false;

  onlineDesignView.hidden = true;
  onlineDesignView.removeAttribute("src");
  onlineDesignViewer.hidden = true;

  pdfView.hidden = true;
  pdfView.removeAttribute("src");
  pdfViewer.hidden = true;

  textView.hidden = true;
  textView.innerHTML = "";
  textViewActions.hidden = true;
  textViewer.hidden = true;

  tubeVideoView.hidden = true;
  tubeVideoView.removeAttribute("src");
  tubeVideoViewer.hidden = true;
  URLToTubeVideo.removeAttribute("value");

  videoView.hidden = true;
  videoView.pause();
  videoView.removeAttribute("src");
  videoViewer.hidden = true;

  viewersContainer.hidden = true;
  viewerStatusBarIndicator.hidden = false;

  webpageURLBar.removeAttribute("value");
  webpageView.hidden = true;
  webpageView.src = "Pages/noWebpageNavigated.html";
  webpageViewer.hidden = true;

  wordDocumentView.hidden = true;
  wordDocumentView.innerHTML = "";
  wordDocumentViewer.hidden = true;

  // Resets the state of the status bar
  fileName.innerHTML = "---";
  fileSize.innerHTML = "---";
  fileLastModified.innerHTML = "---";

  /**
   * @todo Clear the objectURL of the viewed file so it can be consecutively viewed
   */

  hideViewing.disabled = true;
}

/**
 * @method readMarkdownFile
 * Allows the user to view a text file that they
 * have selected from their device's local filesystem
 */
function readTextFile() {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    textView.innerHTML = fileReader.result;
  };

  fileReader.readAsText(event.target.files[0]);
}

/**
 * @method readWordDocument
 * Allows the user to view a Word document that they
 * have selected from their device's local filesystem
 */
function readWordDocument() {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    mammothPlus
      .convertToHtml({ arrayBuffer: event.target.result }, mammothJSOptions)
      .then(function (result) {
        wordDocumentView.innerHTML = result.value;
        displaySnackbar("Some formatting may not display correctly");
      })
      .catch(function () {
        // Indicates that there was an issue in parsing the user's
        // Word document to HTML
        throwAppError(
          "The file you are trying to view does not seem like a Word document. Ensure the file extension is correct and try again."
        );
        closeCurrentFile();
      });
  };

  fileReader.readAsArrayBuffer(event.target.files[0]);
}

/**
 * @method readMarkdownFile
 * Allows the user to view a Markdown file that they
 * have selected from their device's local filesystem
 */
function readMarkdownFile() {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    markdownFileView.innerHTML = marked.parse(fileReader.result);
  };

  fileReader.readAsText(event.target.files[0]);
}

/**
 * @method readHTMLNote
 * Allows the user to view another note - as an HTML
 * file - that they have selected from their device's local filesystem
 */
function readHTMLNote() {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    anotherNoteViewQuill.clipboard.dangerouslyPasteHTML(fileReader.result);
  };

  fileReader.readAsText(event.target.files[0]);
  tasksOnceFileOpen("anotherNoteView", "anotherNoteFileInput");
}

/**
 * @method viewCodeFile
 * Allows the user to view a source code file that
 * they have selected from their device's local filesystem
 */
function viewCodeFile() {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    codeFileViewCodeEditor.session.setValue(fileReader.result);
  };

  fileReader.readAsText(event.target.files[0]);
  codeFileViewerStatusBar.hidden = false;
  tasksOnceFileOpen("codeFileView", "codeFileInput");
}

/**
 * @function checkURLInput
 * Validates if the user has not left a URL input
 * blank when, for example, attempting to view an online
 * image
 *
 * @param {string} URLInputObject - The name of the URL input object to be validated
 * @returns {boolean} - Indicates whether the input is not simply white-space, otherwise this value is false
 */
function checkURLInput(URLInputObject) {
  if (document.querySelector(`#${URLInputObject}`).value === "") {
    displaySnackbar("Please enter a valid URL");
    return false;
  } else {
    return true;
  }
}

/**
 * @method parseCloudDocumentURL
 * Retrieves a user's cloud document's ID - for both cloud storage
 * providers - and composes a URL indicating that the file is
 * being, "embedded" to be set as the cloudDocumentViewer's source
 */
function parseCloudDocumentURL() {
  // Checks whether the inputted URL is correct
  if (checkURLInput("URLToCloudFile")) {
    // Determines if the user wants to view a cloud document
    // originating from OneDrive or Drive
    if (onedriveOrigin.checked) {
      const ODriveURLArray = URLToCloudFile.value.split("");
      let resultingURL = "";

      // Removes the URL parameters that come after the path to
      // the document (i.e. after "&action")
      for (let a = 0; a < ODriveURLArray.length; a++) {
        if (
          ODriveURLArray[a] === "&" &&
          ODriveURLArray[a + 1] === "a" &&
          ODriveURLArray[a + 2] === "c" &&
          ODriveURLArray[a + 3] === "t" &&
          ODriveURLArray[a + 4] === "i" &&
          ODriveURLArray[a + 5] === "o" &&
          ODriveURLArray[a + 6] === "n"
        ) {
          while (true) {
            if (a !== ODriveURLArray.length) {
              ODriveURLArray[a] = "";
              a++;
            } else {
              break;
            }
          }
        }
      }

      for (let c = 0; c < ODriveURLArray.length; c++) {
        resultingURL += ODriveURLArray[c];
      }

      toggleDialog(false, "insertCloudURLDialog", null);

      cloudFileView.src = `${resultingURL}&action=embedview`;
    } else {
      const GDriveURLArray = URLToCloudFile.value
        .replace("https://docs.google.com/", "")
        .replace("https://drive.google.com", "")
        .split("");
      let documentID = "";

      // Parses the URL to retrieve the document ID
      for (let b = 0; b < GDriveURLArray.length; b++) {
        if (
          GDriveURLArray[b - 1] === "/" &&
          GDriveURLArray[b] === "d" &&
          GDriveURLArray[b + 1] === "/"
        ) {
          while (true) {
            if (GDriveURLArray[b + 2] !== "/") {
              documentID += GDriveURLArray[b];
              b++;
            } else {
              documentID += GDriveURLArray[b];
              documentID += GDriveURLArray[b + 1];
              break;
            }
          }
        }
      }

      // Throws an error if documentID has not been changed from
      // its original declaration
      if (documentID === "") {
        toggleDialog(false, "insertCloudURLDialog", null);
        throwAppError(
          "This Google Drive document URL is invalid. Please ensure you are copying the link to it from your browser's address bar and try again."
        );
        closeCurrentFile();
      } else {
        toggleDialog(false, "insertCloudURLDialog", null);
        cloudFileView.src = `https://docs.google.com/viewer?srcid=${documentID.replace("d/", "")}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;
      }
    }

    toggleViewer(true, "cloudFileViewer");
    tasksOnceFileOpen("cloudFileView", null);
    addHistoryEntry("URLToCloudFile");
  }
}

/**
 * @method verifyiFrameInEmbed
 * Ensures the user's custom embed code contains at least a
 * single iFrame element to be displayed within the app
 */
function verifyIfiFrameInEmbed() {
  if (embeddedCode.value.includes("</iframe>")) {
    customEmbedViewer.innerHTML = embeddedCode.value;
    noFileSelected.hidden = true;
    viewerStatusBar.hidden = true;
    toggleDialog(false, "customEmbed", null);
    toggleViewer(true, "customEmbedViewer");
    dynamicallySetHeight();
    tasksOnceFileOpen(null, null);
  } else {
    throwAppError(
      "The pasted code does not seem to be an iFrame element. Please ensure the content you are trying to embed is within an element of this type."
    );
  }
}
