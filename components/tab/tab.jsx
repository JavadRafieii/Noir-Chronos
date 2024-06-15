import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import Tables from '../table/table';

const StyledBox = styled('div')(
    ({ theme }) => `
    width: 100%;
    border: 1px solid #ffffff14;
`,
);

const StyledTabList = styled(TabList)(({ theme }) => ({
    "& .MuiButtonBase-root": {
        width: "33.3333333%",
        maxWidth: "none",
        color: "#fff",
        border: "1px solid #ffffff14",
        fontFamily: "Roboto-Medium",
        fontSize: ".9rem",
        padding: "20px",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem",
        },
    },
    "& .MuiButtonBase-root.Mui-selected": {
        color: "#171717",
        background: "#bb9d7b",
    },
    "& .MuiTabs-indicator": {
        backgroundColor: "#fff",
        height: "3px",
    },
}));

function ProductTab() {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <StyledBox>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <StyledTabList onChange={handleChange} >
                        <Tab label="Description" value="1" />
                        <Tab label="Shipping and Return" value="2" />
                        <Tab label="Size Guide" value="3" />
                    </StyledTabList>
                </Box>
                <TabPanel value="1" sx={{ fontFamily: "Roboto-Medium", color: "#ffffffbf", lineHeight: "30px" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                </TabPanel>
                <TabPanel value="2" sx={{ fontFamily: "Roboto-Medium", color: "#ffffffbf", lineHeight: "30px" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                </TabPanel>
                <TabPanel value="3" sx={{ fontFamily: "Roboto-Medium", color: "#ffffffbf", lineHeight: "30px" }}>
                    <Tables />
                </TabPanel>
            </TabContext>
        </StyledBox>
    );
};

export default ProductTab;