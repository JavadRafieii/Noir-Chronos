import Container from "@/theme/container";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from "@mui/material";

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
        '& fieldset': {
            borderColor: '#979797', // Adding red border for the input field
        },
        '&:hover fieldset': {
            borderColor: '#bb9d7b',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#bb9d7b',
        },
    },
});

const StyledTextarea = styled(TextareaAutosize)({
    width: '100%',
    margin: '10px 0',
    fontFamily: 'Roboto-light',
    color: '#171717',
    borderColor: 'red', // Adding red border for the textarea
    '&:hover': {
        borderColor: '#bb9d7b',
    },
    '&:focus': {
        borderColor: '#bb9d7b',
    },
});

function ContactPage() {
    return (
        <Container>
            <h1 className="font-Roboto-Bold text-white text-4xl text-center my-20">Contact</h1>
            <div className="px-40">
                <div className="flex items-center gap-5">
                    <StyledTextField label="Name" variant="outlined" />
                    <StyledTextField label="Email" variant="outlined" />
                </div>
                <StyledTextField label="Phone Number" variant="outlined" />
                <StyledTextarea
                    minRows={5}
                    placeholder="Enter your text here"
                />
            </div>
        </Container>
    );
};

export default ContactPage;