import React from "react";
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";
const Container = styled.div`
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export default class Task extends React.Component{
    render(){
        return(
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {provided=>(
                    <Container 
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    >
                    {this.props.task.content}
                    </Container>
                )}
                
            </Draggable>
        );
    }
}