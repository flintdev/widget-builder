// src/Widget/Widget.tsx

import * as React from 'react';
import { Draggable, Droppable } from "@flintdev/flint-react-dnd";

export interface WidgetProps {
    dnd?: boolean,
    draggableProps?: {
        draggableId: string,
        index: number,
        isDraggable?: boolean
    },
    onDragEnd?: Function,
    droppableContainerStyle?: (isDraggingOver: boolean) => object,
    draggableRootStyle?: () => object,
    onMouseDown?: Function,
    tag?: string,
    defaultTag?: string
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

    isInCanvas = () => {
        return !!this.props.dnd;
    };

    placeContainer(tag: string) {
        const { dnd, droppableContainerStyle, draggableProps, onDragEnd, defaultTag } = this.props;
        return (
            <React.Fragment>
                {!!dnd &&
                    <Droppable
                        onDragEnd={onDragEnd}
                        droppableId={`${draggableProps!.draggableId}::${tag}`}
                    >
                        {({ handler, status }) => (
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
                                        if (child.props.tag === tag || (!child.props.tag && (tag === defaultTag))) {
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
                            if (!!child && (child.props.tag === tag || (!child.props.tag && (tag === defaultTag)))) {
                                return child
                            }
                        })}
                    </>
                }
            </React.Fragment>
        )
    }

    render() {
        const { dnd, draggableRootStyle, draggableProps, onDragEnd, onMouseDown } = this.props;

        return (
            <React.Fragment>
                {!!dnd &&
                    <Draggable
                        isDraggable={draggableProps?.isDraggable}
                        onDragEnd={onDragEnd}
                        draggableId={draggableProps!.draggableId}
                        index={draggableProps!.index}
                    >
                        {({ handler }) => {
                            return (
                                <div
                                    {...handler}
                                    style={!!draggableRootStyle ? draggableRootStyle() : getItemStyle()}
                                    onMouseDown={(e) => !!onMouseDown ? onMouseDown(e) : null}
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

