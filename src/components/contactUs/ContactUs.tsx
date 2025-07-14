import { Box, Typography } from "@mui/material";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <Box component={'section'} sx={{
      backgroundImage: "url('bg-sheet.png')",
      padding: { xs: '2rem', md: '2rem 4rem'},
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr'},
      gap: '2rem'
    }}>
      <Box sx={{
        color: '#616161',
        maxWidth: {md: '30rem'},
        justifySelf: {md: 'right'}
      }}>
        <Typography sx={{
          fontFamily: "Perpetua, sans-serif",
          fontSize: { xs: '0.875rem', md: '1rem'},
          fontWeight: '700',
          textTransform: 'uppercase',
          mb: '0.5rem'
        }}>
          Contacto
        </Typography>
        <Typography sx={{
          fontFamily: "Perpetua, sans-serif",
          fontSize: { xs: '2.5rem', md: '2.625rem' },
          fontWeight: '700',
          textTransform: 'uppercase',
          lineHeight: '1',
          mb: { xs: '1rem', md: '1.5rem' },
        }}>
          Estamos aquí para apoyarte
        </Typography>
        <Typography sx={{
          fontFamily: "Assistant, sans-serif",
          fontSize: { xs: '0.875rem', md: '1rem'},
          fontWeight: '400',
          lineHeight: '1',
          mb: { xs: '0.75rem', md: '3rem' },
        }}>
          En Serenidad®, donde la paz se convierte en memoria, te acompañamos con cercanía y respeto en cada momento que lo necesites
        .</Typography>
        <Typography sx={{
          fontFamily: "Assistant, sans-serif",
          fontSize: { xs: '0.875rem', md: '1rem'},
          fontWeight: '700',
          lineHeight: '1',
          mb: {md: '1.5rem'}
        }}>
          ¡Para Emergencias, prefiere el contacto de Whatsapp!
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: {xs: 'none', md: 'block'}
          }}
        >
          <img width={'100%'} src="/gallery2.png" alt="" />
        </Box>
      </Box>
      <ContactUsForm />
    </Box>
  )
}

export default ContactUs;