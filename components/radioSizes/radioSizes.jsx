import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    fontFamily: "Roboto-Medium",
    color: "#fff",
    ".MuiFormLabel-root": {
        fontFamily: "Roboto-Medium",
        fontSize: 15,
        color: "#ffffffbf",
    },
    ".MuiFormLabel-root.Mui-focused": {
        color: "#ffffffbf",
    },
    ".MuiButtonBase-root": {
        color: "#ffffffbf",
    },
    ".MuiButtonBase-root.Mui-checked": {
        color: "#bb9d7b",
    },
}));

function RadioSizes({ handelChangeSize, sizes, size }) {
    return ( 
        <StyledFormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
            <RadioGroup
                row
                onChange={(event) => handelChangeSize(event.target.value)}
                value={size}
            >
                {sizes.map(item => <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
            </RadioGroup>
        </StyledFormControl>
     );
};

export default RadioSizes;