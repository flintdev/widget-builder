// src/Registry/Registry.tsx

import * as React from "react";
import {ReactElement} from "react";

export interface WidgetInfo {
    category: 'control' | 'layout' | 'widget',
    description?: string,
    tags?: string[]
}

export interface WidgetInfoMap {
    [key: string]: WidgetInfo
}

export interface WidgetMap {
    [key: string]: any
}

export interface WidgetConfigMap {
    [key: string]: object
}

export class Registry {
    widgetInfoMap: WidgetInfoMap = {};
    widgetMap: WidgetMap = {};
    widgetConfigMap: WidgetConfigMap = {};

    add = (name: string, elementType: any, config: object, info: WidgetInfo) => {
        this.widgetInfoMap[name] = info;
        this.widgetMap[name] = elementType;
        this.widgetConfigMap[name] = config;
    };

    pack = () => {
        const getWidgetConfiguration = (name: string): any => {
            return this.widgetConfigMap[name];
        };
        const getWidget = (name: string, props: any): ReactElement => {
            const elementType = this.widgetMap[name];
            if (!elementType) return <></>
            return React.createElement(elementType, props);
        }
        return {
            widgetInfo: this.widgetInfoMap,
            getWidgetConfiguration,
            getWidget
        }
    };
}