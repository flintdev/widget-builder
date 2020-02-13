// src/Widget/Widget.tsx

import * as React from 'react';
import {Draggable, Droppable} from "react-beautiful-dnd";

export interface WidgetProps {
    dnd?: boolean,
    draggableProps?: {
        draggableId: string,
        index: number
    },
    droppableContainerStyle?: (isDraggingOver: boolean) => object,
    draggableRootStyle?: (isDragging: boolean) => object,
}

const grid = 8;

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    // padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',
    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
});

export class Widget<T extends WidgetProps> extends React.Component<T, {}> {
    state = {};

    componentDidMount(): void {

    }

    renderCustomComponent() {
        return <div/>;
    }

    placeContainer(tag: string) {
        const {dnd, droppableContainerStyle} = this.props;
        return (
            <React.Fragment>
                {!!dnd &&
                <Droppable droppableId={tag}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={
                                !!droppableContainerStyle ?
                                    droppableContainerStyle(snapshot.isDraggingOver) :
                                    getListStyle(snapshot.isDraggingOver)
                            }
                        >
                            {this.props.children}
                        </div>
                    )}
                </Droppable>
                }
            </React.Fragment>
        )
    }

    render() {
        const {dnd, draggableProps, draggableRootStyle} = this.props;
        return (
            <React.Fragment>
                {!!dnd &&
                <Draggable
                    draggableId={draggableProps!.draggableId}
                    index={draggableProps!.index}
                >
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={
                                !!draggableRootStyle ?
                                    {...draggableRootStyle(snapshot.isDragging), ...provided.draggableProps.style} :
                                    getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}
                        >
                            {this.renderCustomComponent()}
                        </div>
                    )}
                </Draggable>
                }
                {!dnd && this.renderCustomComponent()}
            </React.Fragment>
        )
    }
}

