import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addBook, deleteBook, editBook, getAllBooks, getBookById } from '../api/bookApi';

const initialState = {
    books: [],
    book:null,
    error: null,
    isLoading: false
};

export const getAllBookAction = createAsyncThunk('book/getAllBookAction',
    async (args, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await getAllBooks();
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const addNewBookAction = createAsyncThunk('book/addNewBookAction',
    async (book, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await addBook(book);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    });

    export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await getBookById(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
    

export const deleteBookAction = createAsyncThunk('book/deleteBookAction',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await deleteBook(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const editBookAction = createAsyncThunk('book/editBookAction',
    async ({ id, book }, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await editBook(book,id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBookAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllBookAction.fulfilled, (state, action) => {
            state.books = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getAllBookAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(addNewBookAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addNewBookAction.fulfilled, (state, action) => {
            state.books.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(addNewBookAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(deleteBookAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteBookAction.fulfilled, (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id);
            state.isLoading = false;
        });
        builder.addCase(deleteBookAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(editBookAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(editBookAction.fulfilled, (state, action) => {
            const index = state.books.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state.books[index] = action.payload;
            }
            state.isLoading = false;
        });
        builder.addCase(editBookAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchProductById.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.book = action.payload; // Assuming you want to set the book here
            state.isLoading = false;
        });
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
