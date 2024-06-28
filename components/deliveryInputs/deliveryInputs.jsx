import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const StyledTextField = styled(TextField)({
    width: '100%',
    margin: '10px 0',
    '& .MuiInputBase-input': {
        fontFamily: 'Roboto-light',
        color: '#171717',
    },
    '& label': {
        fontFamily: 'Roboto-light',
        color: '#707070',
    },
    '& label.Mui-focused': {
        color: '#bb9d7b',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#bb9d7b',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#bb9d7b',
        },
    },
});

const StyledFormControl = styled(FormControl)`
    width: 100%;
    margin-bottom: 10px;
`;

const StyledInputLabel = styled(InputLabel)`
    color: #707070;
    font-family: 'Roboto-light';

    &.Mui-focused {
        color: #bb9d7b;
    }
`;

const StyledSelect = styled(Select)`
    .MuiOutlinedInput-notchedOutline {
        border-color: '#c4c4c4';
    }

    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #bb9d7b;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #bb9d7b;
    }

    .MuiSelect-select {
        font-family: 'Roboto-light';
        color: #707070;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    font-family: 'Roboto-light';
    color: #707070; 

    &:hover {
        background-color: #dedede;
    }
`;

const menuProps = {
    PaperProps: {
        style: {
            backgroundColor: '#f5f5f5',
            boxShadow: '0 1px 5px 0px #8080806e',
        },
    },
};

const StyledCheckbox = styled(Checkbox)({
    padding: '0',
    '& svg': {
        color: "#c4c4c4",
    },
    '&.Mui-checked': {
        '& svg': {
            color: '#bb9d7b',
        }
    },
});

function DeliveryInputs() {
    return (
        <>
            <h4 className='font-Roboto-Bold text-xl text-dark-gray mt-10 mb-5'>Delivery</h4>
            <StyledFormControl>
                <StyledInputLabel>Country/Region</StyledInputLabel>
                <StyledSelect
                    label="Country/Region"
                    MenuProps={menuProps}
                >
                    <StyledMenuItem value={"United State"}>United State</StyledMenuItem>
                    <StyledMenuItem value={"Japan"}>Japan</StyledMenuItem>
                    <StyledMenuItem value={"Brazil"}>Brazil</StyledMenuItem>
                    <StyledMenuItem value={"Canada"}>Canada</StyledMenuItem>
                </StyledSelect>
            </StyledFormControl>
            <div className='flex items-center gap-5'>
                <StyledTextField label="First name (optional)" variant="outlined" />
                <StyledTextField label="Last name" variant="outlined" />
            </div>
            <StyledTextField label="Address" variant="outlined" />
            <StyledTextField label="Apartment, suite, etc. (optional)" variant="outlined" />
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5'>
                <StyledTextField label="City" variant="outlined" />
                <StyledFormControl sx={{ margin: 0 }}>
                    <StyledInputLabel>State</StyledInputLabel>
                    <StyledSelect
                        label="State"
                        MenuProps={menuProps}
                    >
                        <StyledMenuItem value={"United State"}>United State</StyledMenuItem>
                        <StyledMenuItem value={"Japan"}>Japan</StyledMenuItem>
                        <StyledMenuItem value={"Brazil"}>Brazil</StyledMenuItem>
                        <StyledMenuItem value={"Canada"}>Canada</StyledMenuItem>
                    </StyledSelect>
                </StyledFormControl>
                <StyledTextField label="ZIP code" variant="outlined" />
            </div>
            <div className='flex items-center gap-2'>
                <StyledCheckbox />
                <span className='font-Roboto-light text-base text-dark-gray'>Save this information for next time</span>
            </div>
        </>
    );
};

export default DeliveryInputs;