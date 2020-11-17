import { useState, useEffect, MutableRefObject, useCallback } from "react";
import { useMutationObserver } from "shared/useMutationObserver";
import { useDidMount } from "shared/useDidMount";

/**
 * @param element HTML element whose boundingclientrect is needed
 * @return ClientRect
 */
function getBoundingClientRect(
  element: HTMLElement
): ClientRect | DOMRect | null {
  return element.getBoundingClientRect();
}

/**
 * useBoundingclientRect hook
 * @param ref The React ref whose ClientRect is needed
 * @return ClientRect
 */
function useBoundingclientrect(ref: MutableRefObject<HTMLElement | null>) {
  const [value, setValue] = useState<ClientRect | DOMRect | null>(null);

  const update = useCallback(() => {
    setValue(ref.current ? getBoundingClientRect(ref.current) : null);
  }, []);

  useDidMount(() => {
    update();
  });

  useMutationObserver(ref, update);

  return value;
}

export { useBoundingclientrect };
