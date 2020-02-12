// example/widgets/CustomButton/CustomButton.tsx

import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Widget from '../../../src/Widget/Widget';
import Button from "@material-ui/core/Button";

const useStyles = (params) => makeStyles({
    root: {},
    button: {
        marginTop: params.marginTop,
        marginBottom: params.marginBottom,
        marginLeft: params.marginLeft,
        marginRight: params.marginRight,
    }

});

export interface Props {
    params: any,
    events: any
}

class CustomButton extends React.Component<Props, object> {
    state = {};

    componentDidMount(): void {

    }

    render() {
        const {params, events} = this.props;
        const classes = useStyles(params)();
        return (
            <Widget>
                <div className={classes.root}>
                    <Button variant={params.variant}>{params.label}</Button>
                </div>
            </Widget>
        )
    }
}

export default CustomButton;
