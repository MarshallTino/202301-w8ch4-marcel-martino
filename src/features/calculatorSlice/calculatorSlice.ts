import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface calculatorState {
  result: number;
  display: number;
  operation: string;
}

const initialState: calculatorState = { display: 0, operation: "", result: 0 };

const calculatorSlice = createSlice({
  initialState,
  name: "calculator",
  reducers: {
    clearDisplay: (currentCalculatorState: calculatorState) => {
      const newState = {
        result: 0,
        display: 0,
        operation: currentCalculatorState.operation,
      };
      return newState;
    },
    addToOperation: (
      currentCalculatorState: calculatorState,
      action: PayloadAction<number | string>
    ) => {
      const newState = {
        result: currentCalculatorState.result,
        display: currentCalculatorState.display,
        operation: currentCalculatorState.operation + action.payload,
      };
      return newState;
    },
    updateDisplay: (
      currentCalculatorState: calculatorState,
      action: PayloadAction<number>
    ) => {
      const newState = {
        result: currentCalculatorState.result,
        display: currentCalculatorState.display,
        operation: currentCalculatorState.operation + action.payload,
      };
      return newState;
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { addToOperation, clearDisplay } = calculatorSlice.actions;
