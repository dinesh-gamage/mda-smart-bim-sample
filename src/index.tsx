import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, enableLocalization, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';
import LineChartWidget from "./sample-widgets/LineChart";
import DonutChartWidget from "./sample-widgets/DonutChart";
import { generateScriptPathFromModuleId, getModuleIdFromWidgetId, loadScriptFile } from "./utils";

interface IUIProps {
    uxpContext?: IContextProvider
}

const MDASmartBIMUI: React.FunctionComponent<IUIProps> = (props) => {
    const { uxpContext, } = props
    const [widgets, setWidgets] = React.useState([])

    const widgetsRef = React.useRef([])

    const markerWidgetsMap: any = {
        marker1: [{ id: '50f429c4-605f-4ec6-e079-ec73a8c4a26c/widget/sample-line-chart', name: 'Sample Line Chart' }],
        marker2: [{ id: '50f429c4-605f-4ec6-e079-ec73a8c4a26c/widget/sample-line-chart', name: 'Sample Line Chart' }, { id: '50f429c4-605f-4ec6-e079-ec73a8c4a26c/widget/sample-donut-chart', name: 'Sample Donut Chart' }]
    }

    React.useEffect(() => {
        console.log('widgets ', widgets);

    }, [widgets])

    async function onMarkerClick(marker: string) {
        widgetsRef.current = []
        const widgetsToDisplay = markerWidgetsMap[marker]

        // check if widgets are loaded 
        let registeredWidgets = (window as any).Widgets || []
        console.log('registered widgets ', registeredWidgets);

        for (const w of widgetsToDisplay) {
            const registeredInstance = registeredWidgets.find((r: any) => r.id == w.id && r.name === w.name)

            if (!registeredInstance) {
                // widget not found - need to load the widget script  

                // get module id and generate script path
                const moduleId = getModuleIdFromWidgetId(w.id)
                const scriptPath = generateScriptPathFromModuleId(uxpContext, moduleId)

                // load script
                loadScriptFile(scriptPath, () => appendWidget(w), moduleId)
            }
            else {
                // widget found
                widgetsRef.current.push(registeredInstance)
                setWidgets(widgetsRef.current)
            }

        }
    }

    function appendWidget(w: any) {
        let registeredWidgets = (window as any).Widgets || []
        console.log('reged ', registeredWidgets);

        const registeredInstance = registeredWidgets.find((r: any) => r.id == w.id && r.name === w.name)

        if (!registeredInstance) console.log('widget not found even after script loaded')
        else {
            widgetsRef.current.push(registeredInstance)
            setWidgets(widgetsRef.current)
        }
    }



    return (<div className="mda-smart-bim-sample-app-container">
        <div className="map-container">
            <div className="map">
                <div className="marker" onClick={() => onMarkerClick('marker1')}></div>
                <div className="marker" onClick={() => onMarkerClick('marker2')}></div>
            </div>
        </div>

        <div className="widgets-container">
            {widgets.map((instance: any, i: number) => {

                let Component = instance.widget

                let styles: React.CSSProperties = {}
                styles.width = '100%'
                styles.aspectRatio = '1'
                styles.padding = '10px'

                // check layout 
                if (instance?.configs?.layout) {
                    let w = instance.configs.layout?.w || 6
                    let h = instance.configs.layout?.h || 6
                    styles.aspectRatio = (w / h).toString()
                }

                let props: any = {}
                if (instance.defaultProps) props = { ...instance.defaultProps }

                return <div key={i} style={styles} >
                    <Component uxpContext={props.uxpContext} {...props} />
                </div>
            })}
        </div>
    </div>)
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "sample-line-chart",
    widget: LineChartWidget,
    configs: {
        layout: {
            w: 12,
            h: 8,
            // minH: 12,
            // minW: 12
        }
    }
});


registerWidget({
    id: "sample-donut-chart",
    widget: DonutChartWidget,
    configs: {
        layout: {
            w: 12,
            h: 8,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "MDASmartBIM",
    label: "MDASmartBIM",
    // click: () => alert("Hello"),
    component: MDASmartBIMWidget
});
*/

/**
 * Register as a UI
 */


registerUI({
    id: "mda-smart-bim-sample",
    component: MDASmartBIMUI,
    showDefaultHeader: false
});




/**
 * Enable localization
 *
 * This will enable the localization
 *
 * you can use uxpContext.$L() function
 *
 * Ex: Assume you  have a localization message in localization json
 *
 * ```
 * // localization.json
 *
 * {
 *      "uxp.my-widget.title": {
 *          "en": "This is my widget" // english translation,
 *          "ar": "<arabic tranlation >",
 *          ... here goes other translations
 *      }
 * }
 *
 * ```
 *
 *
 * thne in your widget
 *
 * ```
 * // your widget
 *
 * return <WidgetWrapper>
 *      <div class='title'>
 *          {props.uxpContext.$L('uxp.my-widget.title')}
 *      </div>
 *  </WidgetWrapper>
 *
 * ```
 *
 * /// you can have parameters as well
 * // we use `$` mark to identify params
 * // Ex: $name, $location
 *
 * ```
 * // localization.json
 *
 * {
 *      ...
 *      "uxp.my-widget.user-welcom-msg":{
 *          "en": "$userName welcome to my widget"
 *      }
 * }
 * ```
 *
 * in widget
 *
 * ```
 *      ...
 *      <div> {props.uxpContext.$L('uxp.my-widget.user-welcom-msg', {userName: "Jane Doe"})} </div>
 * ```
 *
 *
 */

// enableLocalization()