import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
    createSelector
} from '@reduxjs/toolkit';

const wishlistAdapter = createEntityAdapter();

const initialState = wishlistAdapter.getInitialState({
    isLoading: false,
    status: 'idle',
    actionError: null,
    error: true,
});

export const fetchWishlist = createAsyncThunk(
    'wishlist/fetchWishlist',
    async () => {
        const response = await fetch("http://localhost:8000/wishlist");
        const data = await response.json();
        return data;
    }
);

export const addNewFavorite = createAsyncThunk(
    'wishlist/addNewFavorite',
    async (newFavorite) => {
        const { id } = newFavorite;
        const updateProduct = await fetch(`http://localhost:8000/Products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favorite: true,
            })
        });
        const dataUpdate = await updateProduct.json();

        const response = await fetch("http://localhost:8000/wishlist", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUpdate),
        });
        const data = await response.json();
        return data;
    }
);

export const deleteFavorite = createAsyncThunk(
    'wishlist/deleteFavorite',
    async (id) => {
        const updateProduct = await fetch(`http://localhost:8000/Products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                favorite: false,
            })
        });
        const response = await fetch(`http://localhost:8000/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return id;
    }
);

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchWishlist.fulfilled, (state, action) => {
                state.error = null;
                state.isLoading = false;
                wishlistAdapter.addMany(state, action.payload);
            })
            .addCase(fetchWishlist.rejected, (state) => {
                state.error = true;
            })

            .addCase(addNewFavorite.pending, (state) => {
                state.actionError = null;
                state.status = "loading";
            })
            .addCase(addNewFavorite.fulfilled, (state, action) => {
                state.status = "idle";
                wishlistAdapter.addOne(state, action.payload);
            })
            .addCase(addNewFavorite.rejected, (state) => {
                state.actionError = true;
            })

            .addCase(deleteFavorite.pending, (state) => {
                state.actionError = null;
                state.status = "loading";
            })
            .addCase(deleteFavorite.fulfilled, (state, action) => {
                state.status = "idle";
                wishlistAdapter.removeOne(state, action.payload);
            })
            .addCase(deleteFavorite.rejected, (state) => {
                state.actionError = true;
            })
    },
});

export const { } = wishlistSlice.actions;

export default wishlistSlice.reducer;

export const {
    selectIds: selectWishlistIds,
} = wishlistAdapter.getSelectors((state) => state.wishlist);

export const selectProductById = createSelector(
    (state) => state.wishlist,
    (_, productId) => productId,
    (wishlist, productId) => wishlist.entities[productId]
);