import { Box, Link, Typography } from "@mui/material";
const contactChannel = [
  {
    icon: 'footer-location-map.svg',
    iconSize: { width: '2rem', height: '3rem' },
    title: 'Oficionas prinpales:',
    description: "Parroquias de la región de O'Higgins"
  },
  {
    icon: 'footer-house.svg',
    iconSize: { width: '3rem', height: '3rem' },
    title: 'Casa Matriz:',
    description: 'Astorga 570, Piso 2, Rancagua'
  },
  {
    icon: 'footer-phone.svg',
    iconSize: { width: '3rem', height: '2.5rem' },
    title: 'Atención telefónica 24/7:',
    description: '+569  5691 8927'
  },
]

const Footer = () => {

  return (
    <footer>
      <Box
        sx={{
          padding: '2rem',
          paddingX: { sm: '4rem' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            fontFamily: 'Assistant, sans-serif',
            color: '#484846',
            fontWeight: 600,
          }}
        >
          <img src="/logo-serenidad.svg" alt="Logo Serenidad" style={{ marginBottom: '1rem' }}></img>
          <br />
          <span>
            Organización sin fines de lucro vinculada al Obispado de Rancagua, fundada el 2025, que entrega servicios funerarios dignos, accesibles y confiables, en comunión con los valores cristianos.
          </span>
        </Box>
        <Box
          sx={{
            marginX: {sm: 'auto'}
          }}
        >
          <Typography
            sx={{
              fontFamily: 'EB Garamond, sans-serif',
              color: '#768837',
              fontWeight: 600,
              marginBottom: '2rem',
              fontSize: '1.125rem',
              textTransform: 'uppercase',
            }}
          >
            Servicios disponibles
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Assistant, sans-serif',
              color: '#484846',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            Funeraria 24 horas
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Assistant, sans-serif',
              color: '#484846',
              fontWeight: 600,
              marginBottom: '1.5rem',
            }}
          >
            Cremación
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Assistant, sans-serif',
              color: '#484846',
              fontWeight: 600
            }}
          >
            Panteón de Cenizas
          </Typography>
        </Box>
        <Box
          sx={{
            marginX: {sm: 'auto'}
          }}
        >
          <Typography
            sx={{
              fontFamily: 'EB Garamond, sans-serif',
              color: '#768837',
              fontWeight: 600,
              marginBottom: '1rem',
              fontSize: '1.125rem',
              textTransform: 'uppercase',
            }}
          >
            Canales de atención
          </Typography>
          {
            contactChannel.map((channel, index) => (
              <Box key={index} sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', marginTop: '1rem', gap: '1.5rem' }}>
                <Box
                  sx={{ width: '3rem', textAlign: 'center'}}
                >
                  <img src={`/icons/${channel.icon}`} alt={channel.title} style={{ width: channel.iconSize.width, height: channel.iconSize.height }} />
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: 'Assistant, sans-serif' }}>{channel.title}</Typography>
                  <Typography sx={{ fontWeight: 600, fontFamily: 'Assistant, sans-serif' }}>{channel.description}</Typography>
                </Box>
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: '#E1952D',
          color: 'white',
          textAlign: { xs: 'center' },
          padding: '1rem',
          fontFamily: 'Assistant, sans-serif',
          fontWeight: 600,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '0rem', md: '1rem' },
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            borderRight: { xs: 'none', md: '1px solid white' },
            paddingRight: { xs: '0', md: '1rem' },
            fontSize: '1rem',
            fontWeight: 600,
            fontFamily: 'Assistant, sans-serif',
          }}
        >
          ©Serenidad, todos los derechos reservados
        </Typography>
        <Link href="" sx={{
          color: 'white',
          paddingRight: { xs: '0', md: '1rem' },
          borderRight: { xs: 'none', md: '1px solid white' },
          fontSize: '1rem',
          fontWeight: 600,
        }}>
          Reglamento Interno para Panteón de Cenizas
        </Link>
        <Link href="" sx={{
          color: 'white',
          fontSize: '1rem',
          fontWeight: 600,
        }}>
          Preguntas frecuentes
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;