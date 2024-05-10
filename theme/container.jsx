function Container({ children }) {
    return (
        <div className="w-full max-w-[1300px] mx-auto px-5 lg:px-10 xl:px-20">
            {children}
        </div>
    );
};

export default Container;