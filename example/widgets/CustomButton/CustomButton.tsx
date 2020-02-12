// example/widgets/CustomButton/CustomButton.tsx

import * as React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/core/styles';
import {Widget, WidgetProps} from '../../../src/Widget/Widget';
import Button from "@material-ui/core/Button";
import Container from "../../../src/Container";

const styles = createStyles({
    root: {},
});

interface Params {
    variant?: 'outlined' | 'text' | 'contained',
    label?: string,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
}

export interface Props extends WithStyles<typeof styles>, WidgetProps {
    params: Params,
    events: object
}

class CustomButton extends Widget<Props> {

    componentDidMount(): void {

    }

    renderCustomComponent() {
        const {classes, params, events} = this.props;
        return (
            <div className={classes.root}>
                <Button
                    variant={params.variant}
                    style={{
                        marginTop: params.marginTop,
                        marginBottom: params.marginBottom,
                        marginLeft: params.marginLeft,
                        marginRight: params.marginRight,
                    }}
                >
                    <span>
                        <Container/>
                    </span>
                    {params.label}
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(CustomButton);

