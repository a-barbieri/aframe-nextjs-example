let AFrameSingleton;
if (typeof window !== "undefined") {
  AFrameSingleton = require("aframe");
}

module.exports = {
  AFrameSingleton
};
