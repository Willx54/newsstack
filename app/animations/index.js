System.register(["./fade-in.animation", "./slide-in-out.animation"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (fade_in_animation_1_1) {
                exportStar_1(fade_in_animation_1_1);
            },
            function (slide_in_out_animation_1_1) {
                exportStar_1(slide_in_out_animation_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map