// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CustomButton from "./widgets/CustomButton";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import CustomGrid from "./widgets/CustomGrid/CustomGrid";

const styles = createStyles({
    root: {},
});

export interface Props extends WithStyles<typeof styles> {

}

interface State {
    tabIndex: number,
}

class ExampleContainer extends React.Component<Props, object> {
    state: State = {
        tabIndex: 0
    };

    componentDidMount(): void {

    }

    handleTabChange = (event: React.ChangeEvent, tabIndex: number) => {
        this.setState({tabIndex});
    };

    onDragEnd = (result: any) => {
        const {source, destination} = result;
        console.log(source, destination);
    };

    render() {
        const {classes} = this.props;
        const {tabIndex} = this.state;
        return (
            <div className={classes.root}>
                <Tabs
                    value={tabIndex}
                    indicatorColor={"primary"}
                    textColor={"primary"}
                    onChange={this.handleTabChange}
                >
                    <Tab label="Custom Button" value={0}/>
                    <Tab label="Custom Grid" value={1}/>
                </Tabs>
                <div>
                    {tabIndex === 0 &&
                    <div>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId={'root'}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
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
                                        />
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
                                                draggableId: 'id2',
                                                index: 1
                                            }}
                                        />
                                    </div>
                                )}
                            </Droppable>

                        </DragDropContext>
                    </div>
                    }
                    {tabIndex === 1 &&
                    <div>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId={'root'}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
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
                                        />
                                        <CustomGrid
                                            dnd={true}
                                            draggableProps={{
                                                draggableId: 'id2',
                                                index: 1
                                            }}
                                        />
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                    }
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
