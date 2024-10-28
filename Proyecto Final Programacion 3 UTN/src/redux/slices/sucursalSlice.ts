import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISucursal } from "../../types/dtos/sucursal/ISucursal";

interface SucursalState {
    selectedSucursal: ISucursal | null;
}

const initialState: SucursalState = {
    selectedSucursal: null,
}

const sucursalSlice = createSlice({
    name: "sucursal",
    initialState,
    reducers: {
        setSelectedSucursal: (state, action: PayloadAction<ISucursal>) => {
            state.selectedSucursal = action.payload;
        },
        clearSelectedSucursal: (state) => {
            state.selectedSucursal = null;
        },
    },
});

export const { setSelectedSucursal, clearSelectedSucursal } = sucursalSlice.actions;

export default sucursalSlice.reducer;
