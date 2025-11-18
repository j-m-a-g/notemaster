/** @author J. Maghamez */
"use strict";

const additionalVideoControls = document.querySelector(
	"#additionalVideoControls"
);
const anotherNoteViewQuill = new Quill("#anotherNoteView", {
	readOnly: true,
	modules: {
		toolbar: false
	},
	theme: "snow"
});
const appSectionSizesContainer = document.querySelector(
	"#appSectionSizesContainer"
);
const characterCountVisualMax = document.querySelector(
	"#characterCountVisualMax"
);
const codeFileViewerStatusBar = document.querySelector(
	"#codeFileViewerStatusBar"
);
const convertWordToNoteInput = document.querySelector(
	"#convertWordToNoteInput"
);
const copyHistoryQuill = new Quill("#copyHistoryEditor", {
	readOnly: true,
	modules: {
		toolbar: false
	},
	theme: "snow"
});
const customStylesheetImport = document.querySelector(
	"#customStylesheetImport"
);
const gettingStartedDarkMode = document.querySelector(
	"#gettingStartedDarkMode"
);
const insertOnlineImageInput = document.querySelector(
	"#insertOnlineImageInput"
);
const insertTableQuill = new Quill("#insertTableEditor", {
	readOnly: true,
	modules: {
		toolbar: false
	},
	placeholder: "You haven't created a table yet",
	theme: "snow"
});
const mammothJSOptions = {
	styleMap: ["comment-reference => sup"]
};
const programmingLanguageMode = document.querySelector(
	"#programmingLanguageMode"
);
const startFromScratchOptions = document.querySelector(
	"#startFromScratchOptions"
);
const toolbarOptions = [
	["bold", "italic", "underline", "strike"],
	["blockquote", "code-block"],
	["link", "image", "video"],

	[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
	[{ script: "sub" }, { script: "super" }],
	[{ indent: "-1" }, { indent: "+1" }],

	[{ header: [1, 2, 3, 4, false, 5, 6] }],

	[{ color: [] }, { background: [] }],
	[{ font: [] }],
	[
		{ align: "" },
		{ align: "center" },
		{ align: "right" },
		{ align: "justify" }
	],

	["clean"]
];
const totalCharacterCountDisplay = document.querySelector(
	"#totalCharacterCountDisplay"
);
const viewerStatusBarIndicator = document.querySelector(
	"#viewerStatusBarIndicator"
);
const wordDocumentToNoteButton = document.querySelector(
	"#wordDocumentToNoteButton"
);
const adjustAppSectionSizes = document.querySelector("#adjustAppSectionSizes");
const anotherNoteFileInput = document.querySelector("#anotherNoteFileInput");
const anotherNoteView = document.querySelector("#anotherNoteView");
const anotherNoteViewer = document.querySelector("#anotherNoteViewer");
const appLoad = document.querySelector("#appLoad");
const appSectionsTable = document.querySelector("#appSectionsTable");
const autoSave = document.querySelector("#autoSave");
const autoSaveCheck = document.querySelector("#autoSaveCheck");
const characterCount = document.querySelector("#characterCount");
const characterCountVisual = document.querySelector("#characterCountVisual");
const chooseViewer = document.querySelector("#chooseViewer");
const closeFile = document.querySelector("#closeFile");
const cloudFileView = document.querySelector("#cloudFileView");
const cloudFileViewer = document.querySelector("#cloudFileViewer");
const codeEditorTheme = document.querySelector("#codeEditorTheme");
const codeFileInput = document.querySelector("#codeFileInput");
const codeFileView = document.querySelector("#codeFileView");
const codeFileViewCodeEditor = ace.edit("codeFileView");
const codeFileViewer = document.querySelector("#codeFileViewer");
const confirmSaveDialog = document.querySelector("#confirmSaveDialog");
const confirmViewerClose = document.querySelector("#confirmViewerClose");
const copiedToClipboard = document.querySelector("#copiedToClipboard");
const createdTable = document.querySelector("#createdTable");
const createOrOpenContainer = document.querySelector("#createOrOpenContainer");
const customEmbedViewer = document.querySelector("#customEmbedViewer");
const customStylesheet = document.querySelector("#customStylesheet");
const customTypingTarget = document.querySelector("#customTypingTarget");
const darkModeCheck = document.querySelector("#darkModeCheck");
const darkModeStylesheet = document.querySelector("#darkModeStylesheet");
const darkModeToggle = document.querySelector("#darkModeToggle");
const dialogFocusBackground = document.querySelector("#dialogFocusBackground");
const downloadConvertedNote = document.querySelector("#downloadConvertedNote");
const editorSize = document.querySelector("#editorSize");
const embeddedCode = document.querySelector("#embeddedCode");
const errorMessage = document.querySelector("#errorMessage");
const fileLastModified = document.querySelector("#fileLastModified");
const fileName = document.querySelector("#fileName");
const fileSize = document.querySelector("#fileSize");
const hideEditorCheck = document.querySelector("#hideEditorCheck");
const hideViewing = document.querySelector("#hideViewing");
const hideViewingCheck = document.querySelector("#hideViewingCheck");
const historyTableContainer = document.querySelector("#historyTableContainer");
const iframes = document.querySelectorAll("iframe");
const imageFileInput = document.querySelector("#imageFileInput");
const imageView = document.querySelector("#imageView");
const imageViewer = document.querySelector("#imageViewer");
const importOwnStylesheet = document.querySelector("#importOwnStylesheet");
const insertCloudURLDialog = document.querySelector("#insertCloudURLDialog");
const insertOnlineImage = document.querySelector("#insertOnlineImage");
const insertSymbol = document.querySelector("#insertSymbol");
const insertTable = document.querySelector("#insertTable");
const lastViewedWebpages = [];
const localDocuments = document.querySelector("#localDocuments");
const mainEditor = document.querySelector("#mainEditor");
const mainEditorZoom = document.querySelector("#mainEditorZoom");
const markdownFileInput = document.querySelector("#markdownFileInput");
const markdownFileView = document.querySelector("#markdownFileView");
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const noFileSelected = document.querySelector("#noFileSelected");
const noteDownloadLink = document.querySelector("#noteDownloadLink");
const noteEditor = document.querySelector("#noteEditor");
const noteHTML = document.querySelector("#noteHTML");
const noteHTMLCodeEditor = ace.edit("noteHTML");
const noteName = document.querySelector("#noteName");
const onedriveOrigin = document.querySelector("#onedriveOrigin");
const onlineDesignView = document.querySelector("#onlineDesignView");
const onlineDesignViewer = document.querySelector("#onlineDesignViewer");
const onlineDocuments = document.querySelector("#onlineDocuments");
const openNoteFileInput = document.querySelector("#openNoteFileInput");
const pageBackgroundColor = document.querySelector("#pageBackgroundColor");
const pageSetupStyle = document.querySelector("#pageSetupStyle");
const pageTextColor = document.querySelector("#pageTextColor");
const pdfFileInput = document.querySelector("#pdfFileInput");
const pdfView = document.querySelector("#pdfView");
const pdfViewer = document.querySelector("#pdfViewer");
const resetTypingTarget = document.querySelector("#resetTypingTarget");
const revertToDefaultStyle = document.querySelector("#revertToDefaultStyle");
const savedForLater = document.querySelector("#savedForLater");
const savedForLaterDetails = document.querySelector("#savedForLaterDetails");
const saveDocumentHeading = document.querySelector("#saveDocumentHeading");
const setTypingTarget = document.querySelector("#setTypingTarget");
const shareCopyLink = document.querySelector("#shareCopyLink");
const snackbar = document.querySelector("#snackbar");
const snackbarMessage = document.querySelector("#snackbarMessage");
const symbolsDisplay = document.querySelector("#symbolsDisplay");
const tableColumns = document.querySelector("#tableColumns");
const tableRows = document.querySelector("#tableRows");
const textFileInput = document.querySelector("#textFileInput");
const textView = document.querySelector("#textView");
const textViewActions = document.querySelector("#textViewActions");
const textViewer = document.querySelector("#textViewer");
const textViewFont = document.querySelector("#textViewFont");
const totalWordCountDisplay = document.querySelector("#totalWordCountDisplay");
const tubeVideoView = document.querySelector("#tubeVideoView");
const tubeVideoViewer = document.querySelector("#tubeVideoViewer");
const typingTarget = document.querySelector("#typingTarget");
const URLToCloudFile = document.querySelector("#URLToCloudFile");
const URLToOnlineDesign = document.querySelector("#URLToOnlineDesign");
const URLToPDFInput = document.querySelector("#URLToPDFInput");
const URLToTubeVideo = document.querySelector("#URLToTubeVideo");
const userGreeting = document.querySelector("#userGreeting");
const videoFileInput = document.querySelector("#videoFileInput");
const videoView = document.querySelector("#videoView");
const videoViewer = document.querySelector("#videoViewer");
const viewersContainer = document.querySelector("#viewersContainer");
const viewerStatusBar = document.querySelector("#viewerStatusBar");
const viewingHistoryTable = document.querySelector("#viewingHistoryTable");
const viewingSize = document.querySelector("#viewingSize");
const webpageURLBar = document.querySelector("#webpageURLBar");
const webpageView = document.querySelector("#webpageView");
const webpageViewer = document.querySelector("#webpageViewer");
const wordCount = document.querySelector("#wordCount");
const wordCountVisual = document.querySelector("#wordCountVisual");
const wordCountVisualMax = document.querySelector("#wordCountVisualMax");
const wordDocumentView = document.querySelector("#wordDocumentView");
const wordDocumentViewer = document.querySelector("#wordDocumentViewer");
const wordFileInput = document.querySelector("#wordFileInput");
const wordsOrCharacters = document.querySelector("#wordsOrCharacters");
const wordWrap = document.querySelector("#wordWrap");
const wordWrapCheck = document.querySelector("#wordWrapCheck");
const workingURLParameters = new URLSearchParams(window.location.search);
let addedCharacterCount = 0;
let addedCharacterCountArray = [];
let addedWordCount = 0;
let addedWordCountArray = [];
let codeFileViewFontSize = 12;
let convertedFileOutput;
let isOpeningAnotherNote = false;
let mainEditorFontSize = 13;
let printTitle;
let textViewFontSize = 14;
