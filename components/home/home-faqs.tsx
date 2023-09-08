import type { FC } from 'react';
import { useState } from 'react';
// import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
// import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Collapse,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

interface FaqType {
  question: string;
  answer: string;
}

const faqs: FaqType[] = [
  {
    question: 'How can I purchase tickets for events?',
    answer: 'To purchase tickets, you need to download and install our mobile application called Trybae Pass. Once installed, you can browse through the available events and make ticket purchases directly from the app.'
  },
  {
    question: 'Where can I find my purchased tickets?',
    answer: 'After purchasing tickets, you can find them in the Trybae Pass mobile application. Simply navigate to the "Tickets" icon within the app, and your purchased tickets will be listed there.'
  },
  {
    question: ' Can I use a redeemed ticket multiple times?',
    answer: 'No, once a ticket has been redeemed by the host of the event, it cannot be used again. The host will have a unique code to redeem your ticket, ensuring that it is only valid for a single use.'
  },
  {
    question: 'How can I redeem my ticket at an event?',
    answer: 'The process of redeeming your ticket at an event will be handled by the event host. They will have the necessary code or mechanism to verify and validate your ticket within the Trybae Pass app.'
  },
  {
    question: 'Can I purchase tickets through any other method aside from the Trybae Pass app?',
    answer: 'No, ticket purchases can only be made through the Trybae Pass mobile application. We currently do not support other purchasing methods.'
  },
  {
    question: 'How can I learn how to use the Trybae Pass application?',
    answer: 'We provide instructions on how to use the application within the Stories feature of the Trybae Pass app. The Stories section offers helpful guides and tutorials to assist you in navigating and utilizing the app\'s features.'
  },
  {
    question: ' I\'m a host and want to sell tickets online through Trybae Pass. What should I do?',
    answer: 'If you are a host and interested in selling tickets online through Trybae Pass, please send an email to trybae@outlook.com. Include relevant details about your event, such as the event name, category, location, date and time, ticket prices, and your contact details (phone number or email address). Our team will review your request and get back to you with further information.   '
  }
];

interface FaqProps {
  answer: string;
  question: string;
}

const Faq: FC<FaqProps> = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1">
          {question}
        </Typography>
        {/* <SvgIcon>
          {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
        </SvgIcon> */}
      </Stack>
      <Collapse in={isExpanded}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

export const HomeFaqs: FC = () => {
  return (
    <Box sx={{ py: '120px' }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              <Typography variant="h3">
                Everything you need to know
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Frequently asked questions
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={4}>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  {...faq}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
