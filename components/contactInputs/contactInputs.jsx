import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const StyledTextField = styled(TextField)({
    width: '100%',
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

function ContactInputs() {
    return (
        <>
            <h4 className='font-Roboto-Bold text-xl text-dark-gray mb-5 mt-10'>Contact</h4>
            <StyledTextField id="outlined-basic" label="Email or mobile phone number" variant="outlined" />
            <div className='flex items-center gap-2 mt-5'>
                <StyledCheckbox />
                <span className='font-Roboto-light text-base text-dark-gray'>Email me with news and offers</span>
            </div>
        </>
    );
};

export default ContactInputs;