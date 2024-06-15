import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accordions() {
    return (
        <div className="mt-10">
            <Accordion sx={{ color: "#fff", fontFamily: "Roboto-Medium", background: "#1b1b1b", border: "1px solid #ffffff0d" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#ffffffbf" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Shipping & Delivery
                </AccordionSummary>
                <AccordionDetails sx={{ color: "#ffffffbf" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ color: "#fff", fontFamily: "Roboto-Medium", background: "#1b1b1b", border: "1px solid #ffffff0d" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#ffffffbf" }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Returns
                </AccordionSummary>
                <AccordionDetails sx={{ color: "#ffffffbf" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ color: "#fff", fontFamily: "Roboto-Medium", background: "#1b1b1b", border: "1px solid #ffffff0d" }} defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#ffffffbf" }} />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Care Guide
                </AccordionSummary>
                <AccordionDetails sx={{ color: "#ffffffbf" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Accordions;