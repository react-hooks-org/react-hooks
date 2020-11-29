import { act, renderHook } from "@testing-library/react-hooks";
import { useState } from "react";
import { useDidMount } from "../useDidMount";

describe('useDidMount', () => {
    it("is defined", () => {
        expect(useDidMount).toBeDefined();
    });
    describe("base", () => {
        let useHook;
        beforeEach(() => {
            useHook = function (){
                const [value, setValue] = useState(0)
                useDidMount(()=>{
                    setValue(9000)
                })
                return {value};
            }
        })
        it('runs immediately after mount', async() => {        
            const {result} = renderHook(()=> useHook())    
            expect(result.current.value).toBe(9000)
     
        })
    })
   
});
