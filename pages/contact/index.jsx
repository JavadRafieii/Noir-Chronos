import Container from "@/theme/container";
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from "@mui/material";

const StyledTextField = styled(TextField)({
    width: '100%',
    margin: '10px 0',
    '& .MuiInputBase-input': {
        fontFamily: 'Roboto-light',
        color: '#fff',
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
    padding: '18.5px 14px',
    fontFamily: 'Roboto-light',
    color: '#fff',
    border: '1px solid #979797',
    borderRadius: '4px',
    background: 'transparent',
    '&:hover': {
        borderColor: '#bb9d7b',
    },
    '&:focus': {
        border: '2px solid #bb9d7b',
        outline: 'none',
    },
    '&::placeholder': {
        fontFamily: 'Roboto-light',
        color: '#707070',
    },
});

function ContactPage() {
    return (
        <Container>
            <h1 className="font-Roboto-Bold text-white text-4xl text-center my-20">Contact</h1>
            <div className="mb-5 lg:px-40">
                <div className="flex flex-col items-center md:flex-row md:gap-x-5">
                    <StyledTextField label="Name" variant="outlined" />
                    <StyledTextField label="Email" variant="outlined" />
                </div>
                <StyledTextField label="Phone Number" variant="outlined" />
                <StyledTextarea
                    minRows={5}
                    placeholder="Enter your text here"
                />
            </div>
            <div className="flex justify-center mb-20">
                <button className="bg-golden py-3 px-10 rounded-md font-Roboto-Medium text-base text-dark-gray duration-[.5s] hover:bg-white">Send</button>
            </div>
        </Container>
    );
};

export default ContactPage;