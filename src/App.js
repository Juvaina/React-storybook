import "../src/scss/custom.css";
import "./App.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import P2Container from "./components/P2Container";
import P2Alert from "./components/P2Alert/P2Alert";
import P2Accordion from "./components/P2Accordion/P2Accordion";
import P2Footer from "./components/P2Footer/P2Footer";
import P2Header from "./components/P2Header/P2Header";
function App() {
  return (
    <>
      <P2Header></P2Header>
      <P2Container>
        <div
          className="h1"
          style={{
            textAlign: "center",
            height: "60px",
          }}
        >
          Polymer components
        </div>
        <P2Alert variant="success">A simple alert check it out!</P2Alert>
        <P2Alert variant="danger">A simple alert check it out!</P2Alert>
        <P2Alert variant="warning">A simple alert check it out!</P2Alert>
        <P2Alert Heading="Notification Title" cta variant="success">
          A simple alert check it out!
        </P2Alert>
        <P2Alert Heading="Notification Title" cta variant="danger">
          A simple alert check it out!
        </P2Alert>
        <P2Alert Heading="Notification Title" cta variant="warning">
          A simple alert check it out!
        </P2Alert>
        <P2Accordion
          key="1"
          displayList={[
            {
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
              heading: "Accordion 1",
            },
          ]}
        />
      </P2Container>
      <P2Footer></P2Footer>
    </>
  );
}

export default App;
