/**
 * @jest-environment jsdom
 */
import { useEffect, useState } from "react";
import {useFreshTick} from "../useFreshTick";
import { renderHook, cleanup } from "@testing-library/react-hooks";
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;

describe("useFreshTick", () => {
    let useHook;

    beforeEach(() => {
      useHook = function(){
        const [currentValue, setCurrentValue] = useState(0);
        function increment() {
          setCurrentValue(currentValue + 1);
        }
        const freshTick = useFreshTick(increment)
        useEffect(() => {
            const intervalId = setInterval(() => {
                freshTick();
            },1000);
            return () => clearInterval(intervalId);
        }, [])
        return {currentValue}
      }
    });

    afterEach(cleanup);

    it("should be defined", () => {
      expect(useFreshTick).toBeDefined();
    });
    it("should increment correctly", () => {
      jest.useFakeTimers();
      const { result } = renderHook(() => useHook());
      act(() => {
        jest.advanceTimersByTime(5000);
      });
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(result.current.currentValue).toBe(5);
      jest.useRealTimers();
    });

    // it("should start timer when started with start function in array destructuring", () => {
    //     jest.useFakeTimers();
    //     const { result } = renderHook(() => useHook());
    //     act(() => {
    //         const [start] = result.current.intervalHandler;
    //         start();
    //     });
    //     act(() => {
    //       jest.advanceTimersByTime(1000);
    //     });
    //     expect(setInterval).toHaveBeenCalledTimes(1);
    //     expect(result.current.currentValue).toBe(1);
    //     jest.useRealTimers();
    //   });

});