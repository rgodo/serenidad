'use client';

import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, InputBase, Paper, Typography } from "@mui/material";
import questions from '../../data/questions.json';
import { useState } from "react";
import { useIsMobile } from '../services/useIsMobile';
import CommonQuestionList from "./CommonQuestionSection";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { scrollToSection } from "../utils/functions/scroll";

const CommonQuestions = () => {
  const [sectionSelected, setSectionSelected] = useState(questions[0]);
  const isMobile = useIsMobile();
  return <Box component={'section'} id="faq">
    {/* Hero */}
    <Box
      sx={{
        backgroundImage: { xs: `url('/questions-hero.jpg')`, sm: `url('/questions-hero.jpg')` },
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        aspectRatio: { xs: '9/10', sm: '2/1', md: '4/1' },
        p: { xs: 2, md: 4 },
        color: "#fff",
        position: "relative",
        display: 'grid',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          display: { md: 'none'}
        }}
      ></Box>
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: 'row' },
        justifyContent: "space-between",
        alignItems: { sm: 'center' },
        maxWidth: '1100px',
        mx: 'auto',
        width: '100%'
      }}>
        <Box
          sx={{
            maxWidth: 600,
            textAlign: { xs: 'left', sm: 'left' },
            // marginLeft: { sm: '10%' },
            zIndex: 2
          }}
        >
          <Typography variant="subtitle1" lineHeight={1.70} mb={0} fontWeight={700} textTransform={'uppercase'}
            sx={{
              fontSize: { xs: '1.312rem', md: '1.25rem' }
            }}
          >
            Consultas
          </Typography>
          <Typography variant="h4" fontWeight={400} lineHeight={'1.1'} textTransform={'uppercase'} fontSize={'2.5rem'} mb={0}
            sx={{
              mb: '0.25rem',
              fontSize: { xs: '2.5rem', md: '3rem' },
              maxWidth: '290px'
            }}
          >
            Preguntas frecuentes
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: '1rem' }, lineHeight: 1.5, fontFamily: 'Assistant' }}>Si no encuentra respuesta a su inquietud, utilice la opción de <strong>“Contáctanos Ahora”</strong>.</Typography>
        </Box>
        <Box
          sx={{
            alignSelf: { md: 'end' },
            mt: {xs: '3rem', md: '0'}
          }}
        >
          <Button
            sx={{
              background: '#768837',
              color: "white",
              borderRadius: 0,
              padding: "0.5rem 1rem",
              fontFamily: 'Assistant, sans-serif',
              textTransform: 'none',
              fontSize: '0.875rem'
            }}
            onClick={() => { scrollToSection('contacto') }}
          >
            ¡Contáctanos Ahora!
          </Button>
        </Box>
      </Box>
    </Box>

    {/* Sections */}
    {
      isMobile && questions.map((section, idx) => (
        <Accordion key={idx}
          sx={{
            bgcolor: 'transparent',
            boxShadow: '0'
          }}
        >
          <AccordionSummary expandIcon={<ExpandCircleDownOutlinedIcon />}
            sx={{
              fontFamily: 'Assistant, sans-serif',
              fontSize: {xs: '1rem'},
              fontWeight: 700,
              color: '#616161'
            }}
          >
            {section.title}
          </AccordionSummary>
          <AccordionDetails>
            <CommonQuestionList data={section} />
          </AccordionDetails>
        </Accordion>
      ))
    }
    {
      !isMobile && <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          maxWidth: '75rem',
          margin: 'auto',
          p: '2rem',
          gap: '4rem'
        }}
      >
        <Box
          sx={{
            minWidth: '25rem',
          }}
        >
          {questions.map((section, idx) => (
            <Box key={idx}
              sx={{
                color: section.title === sectionSelected.title ? '#E1952D' : '#474846',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                mb: '1.75rem',
                cursor: 'pointer'
              }}
              onClick={() => {setSectionSelected(questions[idx])}}
            >
              <Typography
                sx={{
                  fontFamily: 'Assistant, sans-serif',
                  fontSize: { xs: '1rem' },
                  fontWeight: 700
                }}
              >{section.title}</Typography>
              <KeyboardArrowRightOutlinedIcon />
            </Box>
          ))}
          <Paper
            component="form"
            sx={{
              p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, boxShadow: 0, border: '1px solid #616161'
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontFamily: 'Assistant, sans-serif', }}
              placeholder="Buscar consulta"
              inputProps={{ 'aria-label': 'buscar consulta' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <CommonQuestionList data={sectionSelected} />
      </Box>
    }
  </Box>
}

export default CommonQuestions;