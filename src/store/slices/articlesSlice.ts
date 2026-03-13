import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Article {
    id: string;
    title: string;
    authors: string[];
    abstract: string;
    doi: string;
    category: string;
    publishDate: string;
    downloadCount: number;
}

interface ArticlesState {
    items: Article[];
    selectedArticle: Article | null;
    loading: boolean;
    filters: {
        category?: string;
        searchQuery?: string;
    };
}

const initialState: ArticlesState = {
    items: [],
    selectedArticle: null,
    loading: false,
    filters: {},
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state, action: PayloadAction<Article[]>) => {
            state.items = action.payload;
        },
        setSelectedArticle: (state, action: PayloadAction<Article | null>) => {
            state.selectedArticle = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setFilters: (state, action: PayloadAction<ArticlesState['filters']>) => {
            state.filters = { ...state.filters, ...action.payload };
        },
    },
});

export const { setArticles, setSelectedArticle, setLoading, setFilters } = articlesSlice.actions;
export default articlesSlice.reducer;
