import "./styles/ProcessFlow.css"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container";
function ProcessFlow2() {
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
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_1.png" alt="Step 1" id="img1"/></h3>
                            <p>Teams should be formed as per perspective guidelines. Eligibility of the members for HACKSPIRE 2024 should follow eligibility guidelines.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_2.png" alt="Step 2" id="img2"/></h3>
                            <p>A theme and matching problem statement has to be defined from HACKSPIRE Portal at :
                                hackspire.fiem.org.in.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_3.png" alt="Step 3" id="img3"/></h3>
                            <p>IDEA template has to be prepared following the given IDEA template PPT in the HACKSPIRE portal.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_4.png" alt="Step 4" id="img4"/></h3>
                            <p>A PDF has to be created of this PPT.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_5.png" alt="Step 5" id="img5"/></h3>
                            <p>A consent letter has to be obtained in the given format from the Head of the institute and it scould be scanned to PDF.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_6.png" alt="Step 6" id="img6"/></h3>
                            <p>Registration form has to be filled with all of the above mentioned details at Devfolio.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_7.png" alt="Step 7" id="img7"/></h3>
                            <p>Idea selection and intimation to Mentors of selected teams for Grand Finale Registration.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_8.png" alt="Step 8" id="img8"/></h3>
                            <p>Grand Finale Round at FIEM, Evaluation of Development in Phases.</p>
                        </div>
                    </div>
                    <div className="cardm">
                        <div className="info">
                            <h3 className="title"><img src="/images/process-flow/step_9.png" alt="Step 9" id="img9"/></h3>
                            <p>Final compilation of Results and Announcement of Winners.</p>
                        </div>
                    </div>
                </div>
            </div>
            </Container>)
}
export default ProcessFlow2