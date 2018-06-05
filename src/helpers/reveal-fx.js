const BASE_OPTIONS = {
  // RevealFx options  {
  // If true, then the content will be hidden until it´s "revealed".
  isContentHidden: true,
  // The animation/reveal settings. This can be set initially or passed when calling the reveal method.
  revealSettings: {
    // Animation direction: left right (lr) || right left (rl) || top bottom (tb) || bottom top (bt).
    direction: 'lr',
    // Revealer´s background color.
    backgroundColor: '#f0f0f0',
    // Animation speed. This is the speed to "cover" and also "uncover" the element (seperately, not the total time).
    duration: 0.5,
    // Animation easing. This is the easing to "cover" and also "uncover" the element.
    easing: 'Quint.easeInOut',
    // percentage-based value representing how much of the area should be left covered.
    coverArea: 0,
    // Callback for when the revealer is covering the element (halfway through of the whole animation).
    onCover: function (contentEl, revealerEl) {
      return false
    },
    // Callback for when the animation starts (animation start).
    onStart: function (contentEl, revealerEl) {
      return false
    },
    // Callback for when the revealer has completed uncovering (animation end).
    onComplete: function (contentEl, revealerEl) {
      return false
    }
  }
}
