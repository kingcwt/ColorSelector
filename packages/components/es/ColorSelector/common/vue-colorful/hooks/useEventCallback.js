import { ref } from "vue";
function useEventCallback(handler) {
  const callbackRef = ref(handler);
  const fn = ref((value) => {
    callbackRef.value && callbackRef.value(value);
  });
  callbackRef.value = handler;
  return fn.value;
}
export {
  useEventCallback
};
