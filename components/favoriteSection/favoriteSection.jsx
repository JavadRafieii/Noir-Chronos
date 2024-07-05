import { useRef } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import styled from "@emotion/styled";
import { addNewFavorite, deleteFavorite } from '@/reduxConfiguration/wishlistSlice';
import { useDispatch } from 'react-redux';

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    color: '#ffffffbf',
    '&.Mui-checked': {
        color: '#ffffffbf',
    },
}));


function FavoriteSection({ checked, product }) {

    const checkboxRef = useRef(null);

    const dispatch = useDispatch();

    const handleAddNewFavorite = () => {
        const isChecked = !checkboxRef.current.checked;
        if (isChecked) {
            dispatch(deleteFavorite(product.id));
        } else {
            dispatch(addNewFavorite(product));
        }
    };

    return (
        <FormControlLabel
            control={
                <StyledCheckbox
                    inputRef={checkboxRef}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    checked={checked}
                    onChange={handleAddNewFavorite}
                />
            }
            label="Add to wishlist"
        />
    );
};

export default FavoriteSection;