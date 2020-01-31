import React from "react"
import Card from "react-bootstrap/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Accordion from "react-bootstrap/Accordion"
import { useAccordionToggle } from "react-bootstrap/AccordionToggle"

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  )

  return (
    <>
      <h2 className="mb-0">
        <button
          type="button"
          className="btn btn-link"
          onClick={decoratedOnClick}
        >
          {children}
        </button>
        <FontAwesomeIcon icon={faChevronRight} />
      </h2>
    </>
  )
}

const Faqs = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">
            How long does a website build take?
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue. Sed non neque
              elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
              Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">
            How many design amendments can I make?
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue. Sed non neque
              elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
              Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">
            Will you create a logo for me too?
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue. Sed non neque
              elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
              Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="3">What is a premium theme?</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue. Sed non neque
              elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
              Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="4">
            Can you customise my existing site?
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue. Sed non neque
              elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
              Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="5">
            Can you just make my existing website mobile responsive?
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris vitae erat consequat auctor eu in
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
              urna eu felis dapibus condimentum sit amet a augue. Sed non neque
              elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
              Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas
              quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Faqs
