// src/CanvasWrapper/CanvasWrapper.tsx

import * as React from 'react';
import {DragDropContext, Droppable, DropResult, ResponderProvided} from "react-beautiful-dnd";

export interface Props {
    onDragEnd: (result: DropResult, provided: ResponderProvided) => void,
    canvasDroppableId?: string,
}

export class CanvasWrapper extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {canvasDroppableId} = this.props;
        const droppableId = !!canvasDroppableId ? canvasDroppableId : 'root';
        return (
            <DragDropContext onDragEnd={this.props.onDragEnd}>
                <Droppable droppableId={droppableId}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                            {this.props.children}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}
