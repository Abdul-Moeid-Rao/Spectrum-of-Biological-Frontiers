import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Submission {
    id: string;
    title: string;
    status: 'draft' | 'submitted' | 'under-review' | 'accepted' | 'published' | 'rejected';
    lastUpdated: string;
}

interface SubmissionsState {
    items: Submission[];
    currentSubmission: any | null;
    stepProgress: number;
    loading: boolean;
}

const initialState: SubmissionsState = {
    items: [],
    currentSubmission: null,
    stepProgress: 1,
    loading: false,
};

const submissionsSlice = createSlice({
    name: 'submissions',
    initialState,
    reducers: {
        setSubmissions: (state, action: PayloadAction<Submission[]>) => {
            state.items = action.payload;
        },
        setCurrentSubmission: (state, action: PayloadAction<any>) => {
            state.currentSubmission = action.payload;
        },
        setStepProgress: (state, action: PayloadAction<number>) => {
            state.stepProgress = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setSubmissions, setCurrentSubmission, setStepProgress, setLoading } = submissionsSlice.actions;
export default submissionsSlice.reducer;
