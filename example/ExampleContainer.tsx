import * as React from 'react';
import { Droppable, DropLine } from "@flintdev/flint-react-dnd";
import CustomButton from './widgets/CustomButton/CustomButton';
import CustomGrid from './widgets/CustomGrid/CustomGrid';

export default class ExampleContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    handleOnDragEnd(data: any) {
        console.log('>>> handleOnDragEnd', new Date().getTime(), data);
    }

    render() {
        return (
            <>
                <Droppable 
                    onDragEnd={(data: any) => this.handleOnDragEnd(data)}
                    droppableId={"mainContainer"} type={"CONTAINER"} index={0}>
                    {({ handler }) => (
                        <div {...handler}
                            style={{
                                height: `100vh`,
                                backgroundColor: handler.isDraggingOver ? "#9436a5" : "lightyellow",
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <CustomButton
                                params={{
                                    marginTop: 20,
                                    marginBottom: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    variant: 'contained',
                                    label: 'TEST Button'
                                }}
                                events={{}}
                                dnd={true}
                                draggableProps={{
                                    draggableId: 'id1',
                                    index: 0
                                }}
                                onDragEnd={(data: any) => this.handleOnDragEnd(data)}
                            />

                            <CustomGrid
                                onDragEnd={(data: any) => this.handleOnDragEnd(data)}
                                dnd={true}
                                draggableProps={{
                                    draggableId: 'id2',
                                    index: 1
                                }}
                                droppableContainerStyle={
                                    (isDraggingOver: boolean) => {
                                        return {
                                            border: `1px solid grey`,
                                            backgroundColor: isDraggingOver ? 'lightblue' : 'lightgrey',
                                            minHeight: 60
                                        }
                                    }
                                }
                            />
                            <DropLine />
                        </div>
                    )}
                </Droppable>
            </>
        )
    }
}