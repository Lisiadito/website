const style = `:root {
  /*editor*/
  --themeColor: #e2c08d;
  --highlightColor: #ffffff10;
  --selectionColor: #67769660;
  --editorColor: #9da5b4;
  --editorColor50: rgba(157, 165, 180, .5);
  --editorColor30: rgba(157, 165, 180, .3);
  --editorColor10: rgba(157, 165, 180, .1);
  --editorColor04: rgba(157, 165, 180, .04);
  --editorBgColor: #282c34;
  --deleteColor: #ff6969;
  --iconColor: rgba(255, 255, 255, .8);
  --codeBgColor: #3a3f4b;
  --codeBlockBgColor: #3a3f4b;

  /*marktext*/
  --sideBarColor: #9da5b4;
  --sideBarTitleColor: #9da5b4;
  --sideBarTextColor: #9da5b4;
  --sideBarBgColor: #21252b;
  --sideBarItemHoverBgColor: #3a3f4b;
  --itemBgColor: #21252b;
  --floatBgColor: #21252b;
  --floatHoverColor: #3a3f4b;
  --floatBorderColor: #181a1f;
  --maskColor: rgba(0, 0, 0, .7);
  --editorAreaWidth: 700px;
}

::-webkit-scrollbar {
  background: var(--editorBgColor);
}
::-webkit-scrollbar:vertical {
  width: 10px;
}
::-webkit-scrollbar:vertical:hover {
  width: 12px;
}
::-webkit-scrollbar-thumb {
  background: #414956;
}
::-webkit-scrollbar-thumb:hover {
  background: #4b5362;
}

.el-tooltip__popper.is-dark {
  border: 1px solid #181a1f;
}
.v-modal {
  background: #000;
}
.el-dialog {
  box-shadow: 0 1px 3px rgba(0,0,0,.3) !important;
  border: 1px solid #181a1f !important;
}

.mt-notification > .notice-bg.icon-message {
  background: #4d78cc !important;
}

.drop-container.active {
  border: 1px dashed #4d78cc !important;
}

.title-bar .frameless-titlebar-button > div > svg {
  fill: #ffffff;
}
.frameless-titlebar-minimize[data-v-0a64f081]:hover,
.frameless-titlebar-toggle[data-v-0a64f081]:hover {
  background-color: rgba(215, 218, 224, 0.05) !important;
}

.side-bar {
  border-right: 1px solid #181a1f !important;
}
.left-column ul > li > svg {
  color: rgba(215, 218, 224, 0.6) !important;
}
.left-column ul > li:hover > svg {
  color: #d7dae0 !important;
}
.left-column ul > li.active > svg {
  color: #4d78cc !important;
}
.open-project svg,
.empty .no-data svg,
.side-bar-toc .no-data svg {
  fill: #4d78cc !important;
}

.recent-files-projects a,
.open-project a {
  color: #9da5b4 !important;
  border: 1px solid #181a1f !important;
  background-color: #353b45 !important;
  background-image: linear-gradient(#3a3f4b, #353b45) !important;
  box-shadow: none !important;
}
.recent-files-projects a:hover,
.open-project a:hover {
  color: #d7dae0 !important;
  background-image: linear-gradient(#3e4451, #3a3f4b) !important;
}

.editor-tabs {
  border-bottom: 1px solid #181a1f;
  box-shadow: none !important;
}
.tabs-container > li,
.tabs-container > li.active {
  background: var(--editorBgColor) !important;
}
.tabs-container > li.active {
  border: 1px solid #181a1f;
  border-bottom: none;
}
.tabs-container > li.active:not(:last-child):after {
  top: 0 !important;
  right: auto !important;
  width: 2px !important;
  height: auto !important;
  background: #4d78cc !important;
}
.tabs-container svg.close-icon #unsaved-circle-icon {
  fill: #4d78cc;
}

:not(pre) > code[class*="language-"],
pre.ag-paragraph {
  background: var(--codeBlockBgColor) !important;
}

p:not(.ag-active)[data-role="hr"]::before {
  border-top: 2px dashed #4b5362 !important;
  background: none !important;
}

.input-wrapper {
  background: #1b1d23 !important;
}

li.ag-task-list-item {
  list-style-type: none;
  position: relative;
}
li.task-list-item > input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 4px 0px 0px;
  top: -1px;
  left: -22px;
  transform-origin: center;
  transform: rotate(-90deg);
  transition: all .2s ease;
}
li.task-list-item > input[checked] {
  transform: rotate(0);
  opacity: .6;
}
li.task-list-item > input[type=checkbox]::before {
  content: '';
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  display: inline-block;
  border: 2px solid var(--editorColor);
  border-radius: 2px;
  background-color: var(--editorBgColor);
  position: absolute;
  top: 0;
  left: 0;
  transition: all .2s ease;
}
li.task-list-item > input[checked]::before {
  border: transparent;
  background-color: var(--editorColor);
}
li.task-list-item > input::after {
  content: '';
  transform: rotate(-45deg) scale(0);
  width: 9px;
  height: 5px;
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  position: absolute;
  display: inline-block;
  top: 1px;
  left: 5px;
  transition: all .2s ease;
}
li.task-list-item > input[checked]::after {
  transform: rotate(-45deg) scale(1);
}

/* ------------------------------------ */

/*
 * Prism.js theme (override light theme)
 */

/* @import url("prismjs/one-dark.theme.css"); */
`

export default style
