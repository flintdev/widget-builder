// src/CanvasWrapper/CanvasWrapper.tsx

import * as React from 'react';
import {DragDropContext, Droppable, DropResult, ResponderProvided} from "react-beautiful-dnd";

export interface Props {
    onDragEnd: (result: DropResult, provided: ResponderProvided) => void,
    canvasDroppableId?: string,
    style?: object

}

export class CanvasWrapper extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {canvasDroppableId, style} = this.props;
        const droppableId = !!canvasDroppableId ? canvasDroppableId : 'root';
        return (
            <DragDropContext onDragEnd={this.props.onDragEnd}>
                <Droppable droppableId={droppableId}>
                    {(provided, snapshot) => (
                        <div 
                            style={style}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.children}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}
