import { defineStore} from 'pinia';
import { ref } from 'vue';

const useHeaderStore = defineStore('header', () => {
  // 상태를 반응형으로 선언
  const state = ref(false);

  function getState() {
    return state.value;
  }

  function setState(value) {
    state.value = value;
  }

  return { state, getState, setState };
});

export default useHeaderStore;
