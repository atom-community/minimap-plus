/**
 * called by Atom when activating an extension
 */
function activate() {
  if (!atom.packages.isPackageLoaded("minimap")) {
    const { install } = require("atom-package-deps")
   // install if not installed
    install("minimap-plus", false).then(() => {
      // enable if disabled
      if (!atom.packages.isPackageLoaded("minimap")) {
        atom.packages.enablePackage("minimap")
      }
      atom.notifications.addInfo(`
        The original "minimap" is installed and enabled..
        "minimap-plus" now forwards to the original "minimap" which includes all the improvements from "minimap-plus".
      `)
    })

  }
}
exports.activate = activate;
