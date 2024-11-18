(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], function (exports) {
      root.Backbone = factory(root, exports);
    });
  } else if (typeof exports !== "undefined") {
    factory(root, exports);
  } else {
    root.Backbone = factory(root, {});
  }
})(window, function (root, Backbone) {
  // Removed actual backbone code for minimal reproduction
  Backbone.Modal = function () {
    const something = root.something;
    // So that _type_of swc helper import gets added to the code
    if (typeof something === "object") {
      return "object";
    }
    return "don't know";
  };
  return Backbone;
});
