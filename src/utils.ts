import { IContextProvider } from "./uxp";

export function trimSlash(s: string): string {
    if(!s) return ''
    return s.replace(/\/$/, "");
}

export function hasValue(value: any, skipZero?: boolean) {

    if (skipZero && typeof value == "number" && value == 0) return true
    if (!value) return false
    switch (typeof value) {
        case 'string':
            return value?.trim().length > 0
        case 'number':
            return value > 0
        default:
            return true
    }
}

export function tryParseJSON(x: string, def: any = null) {
    try {
        return JSON.parse(x);
    } catch {
        return def;
    }
}

function isScriptExists(id?: string, remove?: boolean) {
    if (!hasValue(id)) return false
    const element = document.getElementById(id)
    if (!element) return false

    if (remove) {
        element.remove()
        return false
    }

    return true
}

export function loadScriptFile(path: string, callback?: any, id?: string, replaceIfExist?: boolean) {

    const scriptExists = isScriptExists(id, replaceIfExist)

    if (scriptExists) {
        if (typeof callback == "function") {
            callback();
        }
    }
    else {
        var script = document.createElement('script');

        script.onload = function () {
            if (typeof callback == "function") {
                callback();
            }
        };

        if (id) {
            script.setAttribute('id', id);
        }
        script.setAttribute('src', path);
        document.head.appendChild(script);
    }
}

export function getModuleIdFromWidgetId(widgetId: string) {
    let parts = widgetId.split('/')
    return parts[0]
}

const moduleScriptBasePath = '/api/UXP/module'
export function generateScriptPathFromModuleId(uxpContext: IContextProvider, moduleId: string) {
    // return `${trimSlash(uxpContext.lucyUrl)}${moduleScriptBasePath}?id=${moduleId}`

    // here we should load from an lucy account 
    // hardcoding this to load from the this setup 
    return '/dist/main.js'
}