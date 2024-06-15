import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TuneIcon from '@mui/icons-material/Tune';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "95%",
    width: 600,
    bgcolor: '#1b1b1b',
    border: '2px solid #ffffff0d',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px'
};

const styleButton = {
    background: "#bb9d7b",
    fontFamily: "Roboto-Medium",
    color: "#171717",
    "&:hover": {
        color: "#ffffffbf",
        background: "#bb9d7b",
    }
};

const styleDeleteButton = {
    border: "1px solid #832c28",
    fontFamily: "Roboto-Medium",
    color: "#f44336",
    marginLeft: "10px",
    "&:hover": {
        borderColor: "#f44336",
    }
};

const styleAlert = {
    fontFamily: "Roboto-Medium",
    fontSize: ".9rem",
    marginBottom: "1rem",
    background: "#160b0b",
    color: "#e8bdbd"
};

function FilterPrice({ handleSubmit, erorr, filter, handelDeleteFilters }) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button
                sx={styleButton}
                startIcon={<TuneIcon />}
                onClick={handleOpen}>
                Filter
            </Button>

            {filter && <Button onClick={handelDeleteFilters} sx={styleDeleteButton} startIcon={<DeleteIcon />}>Delete Filters</Button>}

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={styleModal}>
                    <span className="font-Roboto-Bold text-white text-lg block">Price</span>
                    <p className="font-Roboto-Light text-light-gray text-base my-3">The lowest price is $159,000 and the highest price is $490,000.</p>
                    {erorr && <Alert sx={styleAlert} severity="error">The one of inputs or both is empty. Please enter both of them.</Alert>}
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center text-white w-1/2">
                                $ <input type="number" placeholder="From 159000" className="w-full ml-2 font-Roboto-Medium text-[#ffffffbf] p-3 h-[55px] bg-transparent border border-[#ffffffbf] rounded-[5px] outline-none focus:border-[2px]" />
                            </div>
                            <div className="flex items-center text-white w-1/2">
                                $ <input type="number" placeholder="To 320000" className="w-full ml-2 font-Roboto-Medium text-[#ffffffbf] p-3 h-[55px] bg-transparent border border-[#ffffffbf] rounded-[5px] outline-none focus:border-[2px]" />
                            </div>
                        </div>
                        <input type="submit" className="bg-golden font-Roboto-Medium text-base hover:text-light-gray text-dark-gray w-full mt-4 p-2 rounded-[5px] cursor-pointer" />
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default FilterPrice;