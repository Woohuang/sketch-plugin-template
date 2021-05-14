import BrowserWindow from "sketch-module-web-view";
import { getWebview } from "sketch-module-web-view/remote";
import { getWinURL } from "@/sketch/utils/windows";
import { winIdentifier } from "./index";
const sketch = require("sketch/dom");

let browserWindow: BrowserWindow = null;
const win = () => {
  if (getWebview(winIdentifier.XSearch)) {
    getWebview(winIdentifier.XSearch).close();
  } else {
    browserWindow = new BrowserWindow({
      alwaysOnTop: true,
      identifier: winIdentifier.XSearch,
      width: 465,
      height: 332,
      center: true,
      hidesOnDeactivate: true,
      frame: false,
      transparent: true,
      hasShadow: false,
      resizable: false,
    });
    // only show the window when the page has loaded to avoid a white flash
    browserWindow.once("ready-to-show", () => {
      browserWindow.show();
    });
    const webContents = browserWindow.webContents;
    // add a handler for a call from web content's javascript
    webContents.on("XSearch", (s: any) => {
      console.log(s)
      if (s === "closeWin") {
        browserWindow.close();
      } else {
        if (s.name) {
          if (s.select == true) {
            sketch.getSelectedDocument().selectedLayers.clear()
            sketch
              .find(`[name="${s.name}"]`)
              .forEach((item) => (item.selected = true));
          } else {
            sketch
              .find(`[name="${s.name}"]`)
              .forEach((item) => (item.selected = false));
          }
          sketch.UI.message("Success!");
        }
      }
    });
    browserWindow.loadURL(getWinURL("home"));
    return browserWindow;
  }
};
export default win;
