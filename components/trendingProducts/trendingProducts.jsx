import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../productCard/productCard';

const StyledTabList = styled(TabList)(({ theme }) => ({
    "& .MuiTabs-flexContainer": {
        justifyContent: "center",
    },
    "& .MuiButtonBase-root": {
        color: "#ffffffbf",
        fontFamily: "Roboto-Bold",
        fontSize: "1.2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem",
        },
    },
    "& .MuiButtonBase-root.Mui-selected": {
        color: "#ffffffbf",
    },
    "& .MuiTabs-indicator": {
        backgroundColor: "#bb9d7b",
    },
}));


function TrendingProducts({ products }) {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <StyledTabList onChange={handleChange} aria-label="lab API tabs example" data-aos="fade-up">
                <Tab label="MEN LUXURY" value="1" />
                <Tab label="WOMEN LUXURY" value="2" />
                <Tab label="UNISEX LUXURY" value="3" />
            </StyledTabList>
            <TabPanel value="1" sx={{ px: 0 }}>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {products.map(item => {
                        if (item.gender === "MEN") {
                            return (
                                <SwiperSlide key={item.id}>
                                    <ProductCard product={item} />
                                </SwiperSlide>
                            );
                        };
                        return null
                    })}
                </Swiper>
            </TabPanel>
            <TabPanel value="2" sx={{ px: 0 }}>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {products.map(item => {
                        if (item.gender === "WOMEN") {
                            return (
                                <SwiperSlide key={item.id}>
                                    <ProductCard product={item} />
                                </SwiperSlide>
                            );
                        };
                        return null
                    })}
                </Swiper>
            </TabPanel>
            <TabPanel value="3" sx={{ px: 0 }}>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {products.map(item => {
                        if (item.gender === "LUXURY") {
                            return (
                                <SwiperSlide key={item.id}>
                                    <ProductCard product={item} />
                                </SwiperSlide>
                            );
                        };
                        return null
                    })}
                </Swiper>
            </TabPanel>
        </TabContext>
    );
};

export default TrendingProducts;