import PaymentsIcon from '@mui/icons-material/Payments';

function Payment() {
    return (
        <>
            <h4 className='font-Roboto-Bold text-xl text-dark-gray mt-10'>Payment</h4>
            <span className="font-Roboto-Regular text-[#707070] text-sm block my-2">All transactions are secure and encrypted.</span>
            <div className="bg-gray p-5 rounded-md flex flex-col items-center">
                <PaymentsIcon sx={{ fontSize: 60, color: "#c4c4c4" }} />
                <span className="font-Roboto-Regular text-[#707070] text-sm">This store can’t accept payments right now.</span>
            </div>
        </>
    );
};

export default Payment;