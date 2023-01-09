import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import {memo} from "react";

const MenuItem = ({data, onDelete}) => {
    return (
        <StyledListItem action>
            <Row>
                <Col className="col-8">
                    <h3 className="lead">{data?.name}</h3>
                    <p>Price: Rp{data?.price}</p>
                </Col>
                <ButtonGroup className="col-4">
                    <Button variant="danger" onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </Row>
        </StyledListItem>
    )
};

export default memo(MenuItem);