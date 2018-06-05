<script>
const setting_1 = {
  backgroundColor: "#7f40f1",
  onCover: function(contentEl, revealerEl) {
    contentEl.style.opacity = 1;
  }
};
const setting_2 = {
  backgroundColor: "#fcf652",
  delay: 0.25,
  onCover: function(contentEl, revealerEl) {
    contentEl.style.opacity = 1;
  }
};
const reveal_mapping = [
  {
    el: "#rev-1",
    setting_1
  },
  {
    el: "#rev-2",
    setting_2
  }
];
// Helper vars and functions.
function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

function createDOMEl(type, className, content) {
  var el = document.createElement(type);
  el.className = className || "";
  el.innerHTML = content || "";
  return el;
}

Vue.component("reveal-fx", {
  functional: true,
  props: {
    el: {
      type: String
    },
    options: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    reveal(settings) {}
  },
  render: function(createElement, context) {}
});
</script>
<script>
const setting_1 = {
  backgroundColor: "#7f40f1",
  onCover: function(contentEl, revealerEl) {
    contentEl.style.opacity = 1;
  }
};
const setting_2 = {
  backgroundColor: "#fcf652",
  delay: 0.25,
  onCover: function(contentEl, revealerEl) {
    contentEl.style.opacity = 1;
  }
};
const reveal_mapping = [
  {
    el: "#rev-1",
    setting_1
  },
  {
    el: "#rev-2",
    setting_2
  }
];
// Helper vars and functions.
function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

function createDOMEl(type, className, content) {
  var el = document.createElement(type);
  el.className = className || "";
  el.innerHTML = content || "";
  return el;
}

Vue.component("reveal-fx", {
  functional: true,
  props: {
    el: {
      type: String
    },
    options: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    reveal(settings) {}
  },
  render: function(createElement, context) {}
});
</script>
