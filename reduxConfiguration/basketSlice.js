import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
    createSelector
} from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
    status: 'idle',
    error: null,

    productAdditionStatus: 'idle',
    quantityStatus: 'idle',
});

export const fetchCartProducts = createAsyncThunk(
    'cart/fetchCartProducts',
    async () => {
        const response = await fetch("http://localhost:8000/cart");
        const data = await response.json();
        return data;
    }
);

export const addNewProduct = createAsyncThunk(
    'cart/addNewProduct',
    async (newProduct) => {
        const response = await fetch("http://localhost:8000/cart", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const data = await response.json();
        return data;
    }
);

export const deleteProduct = createAsyncThunk(
    'cart/deleteProduct',
    async (id) => {
        const response = await fetch(`http://localhost:8000/cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return id;
    }
);

export const updateProductQuantity = createAsyncThunk(
    'cart/updateProductQuantity',
    async ({ id, productQuantity }) => {
        const response = await fetch(`http://localhost:8000/cart/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: productQuantity
            })
        });
        const data = await response.json();
        return data;
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        defaultStateOfProductAddition(state) {
            state.productAdditionStatus = 'idel';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                cartAdapter.addMany(state, action.payload);
            })
            .addCase(fetchCartProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(addNewProduct.fulfilled, (state, action) => {
                state.productAdditionStatus = 'idel';
                cartAdapter.addOne(state, action.payload);
                state.productAdditionStatus = 'added';
            })
            .addCase(addNewProduct.pending, (state) => {
                state.productAdditionStatus = 'loading';
            })
            .addCase(addNewProduct.rejected, (state) => {
                state.productAdditionStatus = 'rejected';
            })

            .addCase(deleteProduct.fulfilled, (state, action) => {
                cartAdapter.removeOne(state, action.payload);
            })
            
            .addCase(updateProductQuantity.fulfilled, (state, action) => {
                const { id, quantity } = action.payload;
                const existingProduct = state.entities[id];
                if (existingProduct) {
                    existingProduct.quantity = quantity;
                };
                state.quantityStatus = "idel";
            }) 
            .addCase(updateProductQuantity.pending, (state) => {
                state.quantityStatus = "loading";
            })
            .addCase(updateProductQuantity.rejected, (state) => {
                state.quantityStatus = "error";
            })
    },
});

export const { defaultStateOfProductAddition } = cartSlice.actions;

export default cartSlice.reducer;

export const {
    selectAll: selectAllCartProducts,
    selectById: selectCartProductById,
    selectIds: selectCartProductIds
} = cartAdapter.getSelectors((state) => state.cart);

export const selectProductById = createSelector(
    (state) => state.cart,
    (_, productId) => productId,
    (cart, productId) => cart.entities[productId]
);

export const selectSubtotal = createSelector(
    (state) => state.cart.entities,
    (entities) => {
        let subtotal = 0;
        Object.values(entities).forEach(product => {
            const { price, off } = product.costs;
            let finalPrice = price;
            if (off) {
                finalPrice -= (price * (off / 100));
            }
            subtotal += finalPrice * product.quantity;
        });
        return subtotal;
    }
);