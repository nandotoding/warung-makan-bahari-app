import {StyledListItem} from "./styles";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import {memo} from "react";
import constants from "../../../../constants/constants";

const TableItem = ({data, onDelete}) => {
    let statusStyle = {};

    if (data.status === constants.TABLE_STATUS.AVAILABLE) {
        statusStyle = {color: 'green'}
    } else {
        statusStyle = {color: 'red'}
    }

    return (
        <StyledListItem action>
            <Row>
                <Col className="col-8">
                    <h3 className="lead">{data?.number}</h3>
                    <p style={statusStyle}>{data?.status}</p>
                </Col>
                <ButtonGroup className="col-4">
                    <Button variant="danger" onClick={onDelete}>Delete</Button>
                </ButtonGroup>
            </Row>
        </StyledListItem>
    )
};

export default memo(TableItem);