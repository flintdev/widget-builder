// example/ExampleContainer.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CustomButton from "./widgets/CustomButton";

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

    render() {
        const {classes} = this.props;
        const {tabIndex} = this.state;
        console.log(tabIndex);
        return (
            <div className={classes.root}>
                <Tabs
                    value={tabIndex}
                    indicatorColor={"primary"}
                    textColor={"primary"}
                    onChange={this.handleTabChange}
                >
                    <Tab label="Custom Button"/>
                </Tabs>
                <div>
                    {tabIndex === 0 &&
                    <div>
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
                        />
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
