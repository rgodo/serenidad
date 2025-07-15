import { Box, MenuItem, TextField, Typography } from "@mui/material";
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
    labelText: 'Comuna'
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
    labelText: 'Principal servicio de interés'
  },
  {
    type: 'multiline',
    id: 'message',
    placeholder: 'Escriba aqui su mensaje',
    labelText: 'Mensaje'
  }
]

const ContactUsForm = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        padding: '1rem 2rem',
        maxWidth: { md: '30rem' }
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
                  <MenuItem value='none' selected={true} sx={{
                    fontFamily: 'Assistant, sans-serif'
                  }}>
                    {field.placeholder}
                  </MenuItem>
                )
              }
            </TextField>
            {/* {
              (field.type != 'select' && field.type != 'textarea') && (
                <TextField fullWidth type={field.type} id={field.id} placeholder={field.placeholder}
                  sx={{
                    fontFamily: 'Assistant, sans-serif'
                  }}
                />
              )
            }
            {
              field.type === 'select' && (
                <TextField fullWidth type={field.type} id={field.id} placeholder={field.placeholder}
                  sx={{
                    fontFamily: 'Assistant, sans-serif'
                  }}
                />
              )
            } */}
          </Box>
        ))
      }
    </Box>
  )
}

export default ContactUsForm;