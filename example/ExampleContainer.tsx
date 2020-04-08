import * as React from 'react';
import { Droppable } from "@flintdev/flint-react-dnd";
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
        let mark = "left";
        return (
            <>
                <Droppable 
                    onDragEnd={this.handleOnDragEnd}
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
                            <CustomGrid>
                                {mark === 'left' &&
                                <CustomButton params={{label: 'TEST Button Left'}} events={{}} tag={'left'}/>
                                }
                                {mark === 'right' &&
                                <CustomButton params={{label: 'TEST Button Right'}} events={{}} tag={'right'}/>
                                }
                            </CustomGrid>
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
                                onDragEnd={this.handleOnDragEnd}
                            />

                            <CustomGrid
                                onDragEnd={this.handleOnDragEnd}
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
                        </div>
                    )}
                </Droppable>
            </>
        )
    }
}