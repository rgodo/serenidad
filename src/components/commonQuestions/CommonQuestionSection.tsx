import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
type Question = {
  title: string;
  answer: string;
}

type SectioData = {
  title: string;
  description: string;
  questions: Question[];
}

interface Props {
  data: SectioData
}

const CommonQuestionList: React.FC<Props> = ({ data }) => {
  return <Box>
    <Typography
      sx={{
        fontFamily: 'Assistant, sans-serif',
        fontWeight: 700,
        fontSize: { xs: '1.25rem', md: '1.875rem' },
        lineHeight: 2,
        color: '#E1952D'
      }}
    >
      {data.title}
    </Typography>
    <Typography
      sx={{
        fontSize: {xs: '1rem'},
        fontWeight: 400,
        fontFamily: 'Assistant, sans-serif',
        mb: {xs: '2rem'}
      }}
    >
      {data.description}
    </Typography>
    {data.questions.map((question, idx) => (
      <Accordion key={idx}
        sx={{
          bgcolor: 'transparent',
          boxShadow: '0'
        }}
        defaultExpanded={idx === 0}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          sx={{
            fontFamily: 'Assistant, sans-serif',
            fontSize: { xs: '1rem', md: '1.25rem' },
            fontWeight: 700,
            color: '#474846'
          }}
        >
          {idx+1}. {question.title}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            fontFamily: 'Assistant, sans-serif',
            fontSize: { xs: '0.875rem' },
            fontWeight: 400,
            color: '#616161'
          }}
        >
          {question.answer}
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>
}

export default CommonQuestionList;