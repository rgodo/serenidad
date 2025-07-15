import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { gallery } from '../../data/services.json';
import locations from '../../data/locations.json';

const ContactUsForm = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        padding: '1rem 2rem',
        maxWidth: { md: '540px' }
      }}
    >
      {
        fields.map( (field, idx) => (
          <Box key={idx}
            sx={{ mb: '1rem' }}
          >
            <Typography component={'label'} htmlFor={field.id}
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                fontFamily: 'Assistant, sans-serif',
                mb: '0.5rem',
                display: 'block',
                color: '#484846'
              }}
            >{field.labelText}</Typography>
            <TextField
              select={field.type === 'select'}
              multiline={field.type === 'multiline'}
              rows={field.type === 'multiline'? 4: 1}
              fullWidth type={field.type} id={field.id} placeholder={field.placeholder}
              defaultValue={field.type === 'select'? 'none': ''}
              sx={{
                fontFamily: 'Assistant, sans-serif'
              }}
              slotProps={{
                input: {
                  sx: {
                    fontFamily: "Assistant, sans-serif",
                  },
                }
              }}
            >
              {
                field.type === 'select' && (
                  <>
                    <MenuItem value='none' disabled selected={true} sx={{
                      fontFamily: 'Assistant, sans-serif'
                    }}>
                      {field.placeholder}
                    </MenuItem>
                    {
                      field.options.map((option, idx) => (
                        <>
                          <MenuItem key={idx} value={idx} selected={true} sx={{
                            fontFamily: 'Assistant, sans-serif'
                          }}>
                            {option}
                          </MenuItem>
                        </>
                      ))
                    }
                  </>
                )
              }
            </TextField>
          </Box>
        ))
      }
      <Typography
        sx={{
          fontFamily: 'Assistant, sans-serif',
          fontSize: '14px',
          lineHeight: '18px',
          mb: '1rem'
        }}
      >
        Nos pondremos en contacto contigo a la brevedad, ofreciéndote orientación, tranquilidad y soluciones integrales.
      </Typography>
      <Button
        fullWidth
        sx={{
          textTransform: 'none',
          fontFamily: 'Assistant, sans-serif',
          bgcolor: '#768837',
          color: 'white',
          py: '0.5rem'
        }}
      >
        Enviar
      </Button>
    </Box>
  )
}

export default ContactUsForm;

const fields = [
  {
    type: 'text',
    id: 'name',
    placeholder: 'Escriba aqui su nombre completo',
    labelText: 'Nombre y Apellido'
  },
  {
    type: 'text',
    id: 'phone',
    placeholder: '+569 000000000',
    labelText: 'Numero de celular'
  },
  {
    type: 'select',
    id: 'comuna',
    placeholder: 'Seleccione una comuna',
    labelText: 'Comuna',
    options: locations.map((location) => location.name)
  },
  {
    type: 'email',
    id: 'email',
    placeholder: 'Escriba aquí su correo electrónico',
    labelText: 'Correo electrónico'
  },
  {
    type: 'select',
    id: 'service',
    placeholder: 'Servicio que desee saber información',
    labelText: 'Principal servicio de interés',
    options: gallery.images.map((item) => item.title)
  },
  {
    type: 'multiline',
    id: 'message',
    placeholder: 'Escriba aqui su mensaje',
    labelText: 'Mensaje'
  }
]