import { ref } from "vue";

export default function useSlider(items = []) {
  const current = ref(0);

  function next() {
    current.value = (current.value + 1) % items.length;
  }

  function prev() {
    current.value = (current.value - 1 + items.length) % items.length;
  }

  function setCurrent(index) {
    current.value = index;
  }

  return {
    current,
    next,
    prev,
    setCurrent,
  }
}