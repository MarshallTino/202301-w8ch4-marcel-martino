import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface calculatorState {
  display: number | string;
  operation: string;
}

const initialState: calculatorState = { display: 0, operation: "" };

const calculatorSlice = createSlice({
  initialState,
  name: "calculator",
  reducers: {
    clearDisplayAndOperation: (currentCalculatorState: calculatorState) => {
      const newState = {
        display: 0,
        operation: "",
      };
      return newState;
    },
    addToOperation: (
      currentCalculatorState: calculatorState,
      action: PayloadAction<number | string>
    ) => {
      const newState = {
        display: currentCalculatorState.display,
        operation: currentCalculatorState.operation + action.payload,
      };
      return newState;
    },
    updateDisplay: (
      currentCalculatorState: calculatorState,
      action: PayloadAction<number | string>
    ) => {
      const newState = {
        display: action.payload,
        operation: currentCalculatorState.operation,
      };
      return newState;
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const {
  addToOperation: addToOperationActionCreator,
  clearDisplayAndOperation: clearDisplayActionCreator,
  updateDisplay: updateDisplayActionCreator,
} = calculatorSlice.actions;
