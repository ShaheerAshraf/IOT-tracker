import { Box } from "@mui/material";
import ResponsiveAppBar from "../Components/Appbar";
import ContactBanner from "../Components/ContactBanner";
import ContactForm from "../Components/ContactForm";
import ContactLocation from "../Components/ContactLocation";
function ContactPage() {
    return (
        <Box >
            <ResponsiveAppBar />
            <ContactBanner />
            <ContactForm />
            <ContactLocation />
        </Box>
    );
}

export default ContactPage;
