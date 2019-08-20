import { useLayoutEffect, MutableRefObject, useRef, useEffect } from "react";

/**
 *  useOutsideClick hook
 *
 * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
 *
 * @param ref Ref whose outside click needs to be listened to
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 */
function useOutsideClick(
  ref: MutableRefObject<HTMLElement>,
  handler: (e: MouseEvent) => any,
  when: boolean = true
): void {
  const savedHandler = useRef(handler);

  function handle(e: MouseEvent) {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      savedHandler.current(e);
    }
  }
  useEffect(() => {
    savedHandler.current = handler;
    if (when) {
      document.addEventListener("click", handle);
      document.addEventListener("ontouchstart", handle);
      return () => {
        document.removeEventListener("click", handle);
        document.removeEventListener("ontouchstart", handle);
      };
    }
  }, [ref, handler, when]);
}

export { useOutsideClick };
