import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return response.data;
    });


const cardsslice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cards = action.payload.results;
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

    },
});

export const cardReducer = cardsslice.reducer


