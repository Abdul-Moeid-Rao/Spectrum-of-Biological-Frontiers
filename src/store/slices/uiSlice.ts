import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    sidebarOpen: boolean;
    modal: {
        isOpen: boolean;
        type: string | null;
        data: any;
    };
    notifications: {
        id: string;
        type: 'success' | 'error' | 'info';
        message: string;
    }[];
}

const initialState: UIState = {
    sidebarOpen: false,
    modal: {
        isOpen: false,
        type: null,
        data: null,
    },
    notifications: [],
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        openModal: (state, action: PayloadAction<{ type: string; data?: any }>) => {
            state.modal.isOpen = true;
            state.modal.type = action.payload.type;
            state.modal.data = action.payload.data || null;
        },
        closeModal: (state) => {
            state.modal.isOpen = false;
            state.modal.type = null;
            state.modal.data = null;
        },
        addNotification: (state, action: PayloadAction<{ type: 'success' | 'error' | 'info'; message: string }>) => {
            state.notifications.push({
                id: Math.random().toString(36).substr(2, 9),
                ...action.payload,
            });
        },
        removeNotification: (state, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter((n) => n.id !== action.payload);
        },
    },
});

export const { toggleSidebar, openModal, closeModal, addNotification, removeNotification } = uiSlice.actions;
export default uiSlice.reducer;
