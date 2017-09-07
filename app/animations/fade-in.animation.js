System.register(["@angular/animations"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var animations_1, fadeInAnimation;
    return {
        setters: [
            function (animations_1_1) {
                animations_1 = animations_1_1;
            }
        ],
        execute: function () {
            exports_1("fadeInAnimation", fadeInAnimation = animations_1.trigger('fadeInAnimation', [
                // route 'enter' transition
                animations_1.transition(':enter', [
                    // styles at start of transition
                    animations_1.style({ opacity: 0 }),
                    // animation and styles at end of transition
                    animations_1.animate('.3s', animations_1.style({ opacity: 1 }))
                ]),
            ]));
        }
    };
});
//# sourceMappingURL=fade-in.animation.js.map