import "./styles/ProcessFlow.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
function ProcessFlow2() {
  return (
    <Container
      id="processflow"
      sx={{ mt: { xs: 20 }, maxWidth: { xs: "1300px" } }}
    >
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
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_1.png"
                  alt="Step 1"
                  id="img1"
                />
              </h3>
              <p>
                A team should be formed as per Eligibility and criteria
                mentioned in HackSpire 2024 guidelines.
              </p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_2.png"
                  alt="Step 2"
                  id="img2"
                />
              </h3>
              <p>
                A theme and its corresponding problem statement is to be
                selected from HackSpire page. Just scroll up :)
              </p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_3.png"
                  alt="Step 3"
                  id="img3"
                />
              </h3>
              <p>
                A presentation on the problem Statement and its proposed
                solution should be created, based on the IDEA Template PPT
                available on the Hack Spire portal.
              </p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_4.png"
                  alt="Step 4"
                  id="img4"
                />
              </h3>
              <p>A PDF has to be created of this PPT.</p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_5.png"
                  alt="Step 5"
                  id="img5"
                />
              </h3>
              <p>
                (Optional) A consent letter in the given format has to be
                obtained from the Head of the Institute and submitted to in PDF
                format.
              </p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_6.png"
                  alt="Step 6"
                  id="img6"
                />
              </h3>
              <p>
                Registration form should be filled (via Devfolio) from the
                Application Link on the HackSpire portal.
              </p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_7.png"
                  alt="Step 7"
                  id="img7"
                />
              </h3>
              <p>
                Idea Selection Round and Intimation to Team Lead and Mentor(s)
                for selected teams for Grand Finale Registration.
              </p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_8.png"
                  alt="Step 8"
                  id="img8"
                />
              </h3>
              <p>
                Grand-Finale Round to be held at FIEM, where Evaluations will be
                held in phases.
              </p>
            </div>
          </div>
          <div className="cardm">
            <div className="info">
              <h3 className="title">
                <img
                  src="/images/process-flow/step_9.png"
                  alt="Step 9"
                  id="img9"
                />
              </h3>
              <p>
                Final Compilation of results, Announcement of winners and Prize
                Distribution Ceremony.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default ProcessFlow2;
