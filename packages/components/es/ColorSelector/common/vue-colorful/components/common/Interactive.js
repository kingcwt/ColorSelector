import { defineComponent, toRefs, ref, onUnmounted, createVNode } from "vue";
import { clamp } from "../../utils/clamp.js";
const isTouch = (event) => "touches" in event;
const getTouchPoint = (touches, touchId) => {
  for (let i = 0; i < touches.length; i++) {
    if (touches[i].identifier === touchId)
      return touches[i];
  }
  return touches[0];
};
const getParentWindow = (node) => {
  return node && node.ownerDocument.defaultView || self;
};
const getRelativePosition = (node, event, touchId) => {
  const rect = node.getBoundingClientRect();
  const pointer = isTouch(event) ? getTouchPoint(event.touches, touchId) : event;
  return {
    left: clamp((pointer.pageX - (rect.left + getParentWindow(node).pageXOffset)) / rect.width),
    top: clamp((pointer.pageY - (rect.top + getParentWindow(node).pageYOffset)) / rect.height)
  };
};
const preventDefaultMove = (event) => {
  !isTouch(event) && event.preventDefault();
};
const isInvalid = (event, hasTouch) => {
  return hasTouch && !isTouch(event);
};
const Interactive = /* @__PURE__ */ defineComponent({
  name: "Interactive",
  props: {
    onMove: {
      type: Function
    },
    onKey: {
      type: Function
    }
  },
  setup(props, {
    attrs,
    slots
  }) {
    const {
      onMove,
      onKey
    } = toRefs(props);
    const container = ref(null);
    const touchId = ref(null);
    const hasTouch = ref(false);
    const dragEventObj = () => {
      const handleMoveStart2 = (event) => {
        const el = container.value;
        if (!el)
          return;
        preventDefaultMove(event);
        if (isInvalid(event, hasTouch.value) || !el)
          return;
        if (isTouch(event)) {
          hasTouch.value = true;
          const changedTouches = event.changedTouches || [];
          if (changedTouches.length)
            touchId.value = changedTouches[0].identifier;
        }
        el.focus();
        onMove.value(getRelativePosition(el, event, touchId.value));
        toggleDocumentEvents2(true);
      };
      const handleMove = (event) => {
        preventDefaultMove(event);
        const isDown = isTouch(event) ? event.touches.length > 0 : event.buttons > 0;
        if (isDown && container.value) {
          onMove.value(getRelativePosition(container.value, event, touchId.value));
        } else {
          toggleDocumentEvents2(false);
        }
      };
      const handleMoveEnd = () => toggleDocumentEvents2(false);
      const handleKeyDown2 = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode < 37 || keyCode > 40)
          return;
        event.preventDefault();
        onKey.value({
          left: keyCode === 39 ? 0.05 : keyCode === 37 ? -0.05 : 0,
          top: keyCode === 40 ? 0.05 : keyCode === 38 ? -0.05 : 0
        });
      };
      function toggleDocumentEvents2(state) {
        const touch = hasTouch.value;
        const el = container.value;
        const parentWindow = getParentWindow(el);
        const toggleEvent = state ? parentWindow.addEventListener : parentWindow.removeEventListener;
        toggleEvent(touch ? "touchmove" : "mousemove", handleMove);
        toggleEvent(touch ? "touchend" : "mouseup", handleMoveEnd);
      }
      return {
        handleMoveStart: handleMoveStart2,
        handleKeyDown: handleKeyDown2,
        toggleDocumentEvents: toggleDocumentEvents2
      };
    };
    const {
      handleMoveStart,
      handleKeyDown,
      toggleDocumentEvents
    } = dragEventObj();
    onUnmounted(() => {
      toggleDocumentEvents(false);
    });
    return () => {
      return createVNode("div", {
        ...attrs,
        "onTouchstart": handleMoveStart,
        "onMousedown": handleMoveStart,
        "onKeydown": handleKeyDown,
        "class": "vue-colorful__interactive",
        "ref": container,
        "role": "slider"
      }, [slots.default && slots.default()]);
    };
  }
});
export {
  Interactive
};
