const additionalVideoControls = document.querySelector(
	"#additionalVideoControls"
);
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
const customStylesheetImport = document.querySelector(
	"#customStylesheetImport"
);
const downloadNotePrefixAndSuffix = [
	"<div style='word-wrap: break-word'>",
	"</div><style>body { font-family: sans-serif } td { word-break: break-word } h1, h2, h3, h4, h5, h6 { font-weight: normal } .ql-font-serif { font-family: serif } .ql-font-monospace { font-family: monospace }</style>"
];
const gettingStartedDarkMode = document.querySelector(
	"#gettingStartedDarkMode"
);
const insertOnlineImageInput = document.querySelector(
	"#insertOnlineImageInput"
);
const programmingLanguageMode = document.querySelector(
	"#programmingLanguageMode"
);
const startFromScratchOptions = document.querySelector(
	"#startFromScratchOptions"
);
const symbolList = [
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
const adjustedHeight = `${window.innerHeight - 35}px`;
const anotherNoteFileInput = document.querySelector("#anotherNoteFileInput");
const anotherNoteView = document.querySelector("#anotherNoteView");
const anotherNoteViewer = document.querySelector("#anotherNoteViewer");
const appLoad = document.querySelector("#appLoad");
const appName = "NoteMaster";
const appSectionsTable = document.querySelector("#appSectionsTable");
const autoSave = document.querySelector("#autoSave");
const autoSaveCheck = document.querySelector("#autoSaveCheck");
const characterCount = document.querySelector("#characterCount");
const characterCountVisual = document.querySelector("#characterCountVisual");
const checkedImageSource = "assets/images/check_000000.svg";
const chooseViewer = document.querySelector("#chooseViewer");
const closeFile = document.querySelector("#closeFile");
const cloudFileView = document.querySelector("#cloudFileView");
const cloudFileViewer = document.querySelector("#cloudFileViewer");
const codeEditorTheme = document.querySelector("#codeEditorTheme");
const codeFileInput = document.querySelector("#codeFileInput");
const codeFileView = document.querySelector("#codeFileView");
const codeFileViewer = document.querySelector("#codeFileViewer");
const confirmSaveDialog = document.querySelector("#confirmSaveDialog");
const confirmViewerClose = document.querySelector("#confirmViewerClose");
const copiedToClipboard = document.querySelector("#copiedToClipboard");
const copiedToClipboardString = "Copied to clipboard";
const createdTable = document.querySelector("#createdTable");
const createOrOpenContainer = document.querySelector("#createOrOpenContainer");
const currentDate = new Date();
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
const fileViewingHistoryNames = [];
const fileViewingHistoryTimes = [];
const hideEditorCheck = document.querySelector("#hideEditorCheck");
const hideViewing = document.querySelector("#hideViewing");
const hideViewingCheck = document.querySelector("#hideViewingCheck");
const historyTableContainer = document.querySelector("#historyTableContainer");
const iframes = document.getElementsByTagName("iframe");
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
const noteName = document.querySelector("#noteName");
const onedriveOrigin = document.querySelector("#onedriveOrigin");
const onlineDesignView = document.querySelector("#onlineDesignView");
const onlineDesignViewer = document.querySelector("#onlineDesignViewer");
const onlineDocuments = document.querySelector("#onlineDocuments");
const openNoteFileInput = document.querySelector("#openNoteFileInput");
const originalDownloadSuffix = downloadNotePrefixAndSuffix[1];
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
const uncheckedImageSource = "assets/images/menu_dropdown_placeholder.svg";
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
