<script>
export default {
name: 'BlockReveal',
config: {},
install(Vue, installOptions) {
Vue.directive('reveal', {
  bind: function(el, binding, vnode) {
    const options = extend(binding.value.options)

    const position = el.position
      if (
      position !== 'fixed' &&
      position !== 'absolute' &&
      position !== 'relative'
      ) {

      el.style.position = 'relative'
    }
// Content element.
  this.content = createDOMEl(
    'div',
    'block-revealer__content',
    this.el.innerHTML
  )

  if (this.options.isContentHidden) {
    this.content.style.opacity = 0
  }
  // Revealer element (the one that animates)
  this.revealer = createDOMEl('div', 'block-revealer__element')
  this.el.classList.add('block-revealer')
  this.el.innerHTML = ''
  this.el.appendChild(this.content)
  this.el.appendChild(this.revealer)
}


}
function extend(a, b) {
  for(var key in b) {
    if( b.hasOwnProperty( key ) ) {
      a[key] = b[key];
    }
  }
  return a;
}

</script>



