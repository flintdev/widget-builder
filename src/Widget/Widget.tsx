// src/Widget/Widget.tsx

import * as React from 'react';

export interface WidgetProps {
    dnd?: boolean
}

export class Widget<T extends WidgetProps> extends React.Component<T, {}> {
    state = {};

    componentDidMount(): void {

    }

    renderCustomComponent() {
        return <div/>;
    }

    render() {
        return (
            <React.Fragment>
                {this.renderCustomComponent()}
            </React.Fragment>
        )
    }
}

