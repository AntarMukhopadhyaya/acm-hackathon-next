"use client";
import "./styles/ProcessFlow.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";

function ProcessFlow2() {
  const steps = [
    { step: 1, text: "Teams should be formed as per perspective guidelines. Eligibility of the members for HACKSPIRE 2024 should follow eligibility guidelines.", img: "step_1.png" },
    { step: 2, text: "A theme and matching problem statement has to be defined from HACKSPIRE Portal at: hackspire.fiem.org.in.", img: "step_2.png" },
    { step: 3, text: "IDEA template has to be prepared following the given IDEA template PPT in the HACKSPIRE portal.", img: "step_3.png" },
    { step: 4, text: "A PDF has to be created of this PPT.", img: "step_4.png" },
    { step: 5, text: "A consent letter has to be obtained in the given format from the Head of the institute and it scould be scanned to PDF.", img: "step_5.png" },
    { step: 6, text: "Registration form has to be filled with all of the above mentioned details at Devfolio.", img: "step_6.png" },
    { step: 7, text: "Idea selection and intimation to Mentors of selected teams for Grand Finale Registration.", img: "step_7.png" },
    { step: 8, text: "Grand Finale Round at FIEM, Evaluation of Development in Phases.", img: "step_8.png" },
    { step: 9, text: "Final compilation of Results and Announcement of Winners.", img: "step_9.png" }
  ];

  return (
    <Container id="processflow" sx={{ mt: { xs: 20 }, maxWidth: { xs: "1300px" } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { sm: "48px", xs: "38px" },
          fontFamily: "blanka",
          color: "white",
        }}
      >
        PROCESS &nbsp;
        <Typography
          component="span"
          variant="h1"
          sx={{
            fontSize: { sm: "48px", xs: "38px" },
            fontFamily: "blanka",
            color: "#AAE6FF",
          }}
        >
          FLOW
        </Typography>
      </Typography>
      <div className="timeline">
        <div className="outer">
          {steps.map(({ step, text, img }, index) => (
            <div className="cardm" key={step}>
              <motion.div
                className="info"
                initial={{ x: index % 2 === 0 ? 350 : -350, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", stiffness: 60 }}
              >
                <h3 className="title">
                  <img src={`/images/process-flow/${img}`} alt={`Step ${step}`} id={`img${step}`} />
                </h3>
                <p>{text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ProcessFlow2;
