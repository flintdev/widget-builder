//

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {Widget, WidgetProps} from '../../../src/Widget';
import Grid from "@material-ui/core/Grid";

const styles = createStyles({
    root: {

    },
});

export interface Props extends WithStyles<typeof styles>, WidgetProps {

}

class CustomGrid extends Widget<Props> {
    state = {

    };

    componentDidMount(): void {

    }

    renderCustomComponent(): any {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        {this.placeContainer('left')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.placeContainer('right')}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(CustomGrid);
