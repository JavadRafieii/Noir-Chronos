import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    ".MuiInputBase-input": {
        fontFamily: "Roboto-Medium",
        color: "#ffffffbf",
        borderRadius: "5px",
    },
    ".MuiFormLabel-root": {
        fontFamily: "Roboto-Medium",
        color: "#ffffffbf",
    },
    ".MuiFormLabel-root.Mui-focused ": {
        color: "#ffffffbf",
    },
    ".MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffffffbf",
    },
    ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffffffbf",
    },
    ".MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffffffbf",
    },
    ".MuiSvgIcon-root": {
        color:"#ffffffbf"
    }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontFamily: "Roboto-Medium",
    color: "#ffffffbf",
    "&.MuiMenuItem-root.Mui-selected": {
        backgroundColor: "#bb9d7b",
        color: "#171717",
    }
}));

function FilterProducts({ gender, handleChangeGender }) {

    return ( 
        <StyledFormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
            <Select
                value={gender}
                label="Filter by"
                onChange={handleChangeGender}
            >
                <StyledMenuItem value={""}>FILTER BY</StyledMenuItem>
                <StyledMenuItem value={"MEN"}>MEN LUXURY</StyledMenuItem>
                <StyledMenuItem value={"WOMEN"}>WOMEN LUXURY</StyledMenuItem>
                <StyledMenuItem value={"LUXURY"}>UNISEX LUXURY</StyledMenuItem>
            </Select>
        </StyledFormControl>
     );
};

export default FilterProducts;