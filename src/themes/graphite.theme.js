const style = `:root {
  --themeColor: rgb(104, 134, 170);
  --highlightColor: rgba(104, 134, 170, .4);
  --selectionColor: rgba(0, 0, 0, .1);
  --editorColor: rgba(43, 48, 50, .8);
  --editorColor50: rgba(43, 48, 50, .5);
  --editorColor30: rgba(43, 48, 50, .3);
  --editorColor10: rgba(43, 48, 50, .1);
  --editorColor04: rgba(43, 48, 50, .04);
  --editorBgColor: #f7f7f7;
  --deleteColor: #ff6969;
  --iconColor: rgba(135, 135, 135, .8);
  --codeBgColor: #d8d8d869;
  --codeBlockBgColor: rgba(104, 134, 170, .04);

  --sideBarColor: rgba(188, 193, 197, .8);
  --sideBarTitleColor: rgba(255, 255, 255, 1);
  --sideBarTextColor: rgba(188, 193, 197, .4);
  --sideBarBgColor: rgba(69, 75, 80, 1);
  --sideBarItemHoverBgColor: rgba(255, 255, 255, .03);
  --itemBgColor: rgba(43, 48, 50, .5);
  --floatBgColor: rgb(237, 237, 238);
  --floatHoverColor: rgba(43, 48, 50, .04);
  --floatBorderColor: rgba(0, 0, 0, .03);
  --maskColor: rgba(255, 255, 255, .7);
  --editorAreaWidth: 700px;
}

.title-bar.tabs-visible {
  background: #f3f3f3 !important;
}

.editor-tabs {
  background: #f3f3f3 !important;
  border-bottom: 1px solid #dddddd !important;
  box-shadow: none !important;
}
.tabs-container > li {
  background: none !important;
}
.tabs-container > li.active {
  border: 1px solid #dddddd;
  border-top: none;
  border-bottom: none;
  background: var(--floatBgColor) !important;
}
.tabs-container > li.active:not(:last-child):after {
  top: 0 !important;
  bottom: auto !important;
  background: var(--themeColor) !important;
}

/* ------------------------------------ */

li.paragraph {
  color: var(--editorColor);
}

/*task list*/
li.task-list-item {
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
  opacity: .5;
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

/*horizontal line*/
p:not(.active)[data-role="hr"]::before {
  content: '';
  position: absolute;
  width: 100%;
  display: block;
  left: 50%;
  top: 50%;
  height: 2px;
  box-sizing: border-box;
  border-bottom: 2px dashed var(--editorColor50);
  transform: translateX(-50%) translateY(-50%);
}
`

export default style
