import "../src/scss/custom.css";
import "./App.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import P2Container from "./components/P2Container";
import P2Alert from "./components/P2Alert/P2Alert";
import P2Accordion from "./components/P2Accordion/P2Accordion";
import P2Footer from "./components/P2Footer/P2Footer";
import P2Header from "./components/P2Header/P2Header";
import P2Breadcrumb from "./components/P2Breadcrumb/P2Breadcrumb";
import P2Grid from "./components/P2Grid/P2Grid";
import P2Button from "./components/P2Button/P2Button";
import P2ButtonGroup from "./components/P2ButtonGroup/P2ButtonGroup";
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
        <P2Breadcrumb
          menuList={[
            {
              href: "/Home",
              label: "Back to Home",
            },
          ]}
        />
        <P2Breadcrumb
          menuList={[
            {
              href: "/Home",
              label: "Home",
            },
            {
              href: "/Page2",
              label: "Page 2",
            },
            {
              href: "/Page3",
              label: "Page 3",
            },
            {
              active: true,
              label: "Page 4",
            },
          ]}
        />
        <P2Breadcrumb
          menuList={[
            {
              href: "/Home",
              label: "Home",
            },
            {
              href: "/Page2",
              label: "Page 2",
            },
            {
              href: "/Page3",
              label: "Page 3",
            },
            {
              href: "/Page4",
              label: "Page 4",
            },
            {
              href: "/Page5",
              label: "Page 5",
            },
            {
              active: true,
              label: "Page 6",
            },
          ]}
        />
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
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>
            Primary Button<br></br> (Special CTAs e.g. Login)
          </P2Grid>
          <P2Grid gridSize={9}>
            <P2Button variant="primary-2">View Details</P2Button>
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>
            Primary Button<br></br> (Action-driven CTAs)
          </P2Grid>
          <P2Grid gridSize={9}>
            <P2Button variant="primary-1">View Details</P2Button>
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>
            Secondary Button<br></br> (Alternate CTA)
          </P2Grid>
          <P2Grid gridSize={9}>
            <P2Button variant="outline-primary">Cancel</P2Button>
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>
            Tertiary Button<br></br> (Content CTAs)
          </P2Grid>
          <P2Grid gridSize={9}>
            <P2Button variant="link text-decoration-none">
              {"Click to learn more >"}
            </P2Button>
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>CTA button used for form</P2Grid>
          <P2Grid gridSize={3}>
            <P2Button
              endIcon={<i className="bi bi-paperclip ps-2" />}
              variant="primary-1"
            >
              Choose files
            </P2Button>
          </P2Grid>
          <P2Grid gridSize={3}>
            <P2Button
              endIcon={<i className="bi bi-plus-circle-fill ps-2" />}
              variant="primary-1"
            >
              Select from Map
            </P2Button>
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>Text & icon button</P2Grid>
          <P2Grid gridSize={3}>
            <P2Button
              endIcon={<i className="bi bi-download ps-2"></i>}
              variant="link text-decoration-none"
            >
              Text with right icon
            </P2Button>
          </P2Grid>
          <P2Grid gridSize={3}>
            <P2Button
              startIcon={<i className="bi bi-filter-left pe-2"></i>}
              variant="link text-decoration-none"
            >
              Text with left icon
            </P2Button>
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>Login Log out for top header</P2Grid>
          <P2Grid gridSize={3}>
            <P2Button
              startIcon={<i className="bi bi-lock-fill pe-2" />}
              variant="primary-2"
            >
              Login
            </P2Button>
          </P2Grid>
          <P2Grid gridSize={3}>
            <P2Button
              startIcon={<i className="bi bi-box-arrow-right pe-2" />}
              variant="primary-2"
            >
              Logout
            </P2Button>
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>Font Resizer</P2Grid>
          <P2Grid gridSize={3}>
            <P2ButtonGroup />
          </P2Grid>
        </div>
        <div className="row gy-3 mt-2">
          <P2Grid gridSize={3}>View more</P2Grid>
          <P2Grid gridSize={3}>
            <P2Button
              endIcon={<i className="bi bi-plus-circle-fill ps-2"></i>}
              variant="outline-primary"
            >
              View more
            </P2Button>
          </P2Grid>
        </div>
      </P2Container>

      <P2Footer></P2Footer>
    </>
  );
}

export default App;
