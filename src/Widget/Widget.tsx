// src/Widget/Widget.tsx

import * as React from 'react';
import { Draggable, Droppable } from "@flintdev/flint-react-dnd";

export interface WidgetProps {
    dnd?: boolean,
    draggableProps?: {
        draggableId: string,
        index: number
    },
    onDragEnd?: Function,
    droppableContainerStyle?: (isDraggingOver: boolean) => object,
    draggableRootStyle?: () => object
}

const grid = 8;

const getItemStyle = () => ({
    // some basic styles to make the items look a bit nicer
    
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
        return <div />;
    }

    placeContainer(tag: string) {
        const { dnd, droppableContainerStyle, draggableProps, onDragEnd } = this.props;
        return (
            <React.Fragment>
                {!!dnd &&
                    <Droppable
                        onDragEnd={onDragEnd}
                        droppableId={`${draggableProps!.draggableId}::${tag}`}
                    >
                        {({handler, status}) => (
                            <div
                                {...handler}
                                style={
                                    !!droppableContainerStyle ?
                                        droppableContainerStyle(status.isDraggingOver) :
                                        getListStyle(status.isDraggingOver)
                                }
                            >
                                <>
                                    {React.Children.map(this.props.children, (child: any, i) => {
                                        if (child.props.tag === tag || !child.props.tag) {
                                            return child;
                                        }
                                    })}
                                </>
                            </div>
                        )}
                    </Droppable>
                }
                {!dnd &&
                    <>
                        {React.Children.map(this.props.children, (child: any, i) => {
                            if (child.props.tag === tag || !child.props.tag) {
                                return child
                            }
                        })}
                    </>
                }
            </React.Fragment>
        )
    }

    render() {
        const { dnd, draggableProps, draggableRootStyle, onDragEnd } = this.props;

        return (
            <React.Fragment>
                {!!dnd &&
                    <Draggable
                        onDragEnd={onDragEnd}
                        draggableId={draggableProps!.draggableId}
                        index={draggableProps!.index}
                    >
                        {({handler}) => {
                            return (
                                <div
                                    {...handler}
                                    style={!!draggableRootStyle ? draggableRootStyle() : getItemStyle()}
                                >
                                    {this.renderCustomComponent()}
                                </div>
                            )
                        }
                        }
                    </Draggable>
                }
                {!dnd && this.renderCustomComponent()}
            </React.Fragment>
        )
    }
}

