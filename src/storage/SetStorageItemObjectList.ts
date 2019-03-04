// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNative from "react-native";

/**
 * @param {string} key - This field is required.
 * @param {MxObject[]} objects - This field is required.
 * @returns {string}
 */
function SetStorageItemObjectList(key?: string, objects?: mendix.lib.MxObject[]): Promise<void> {
    // BEGIN USER CODE
    // Documentation https://facebook.github.io/react-native/docs/asyncstorage

    const AsyncStorage: typeof ReactNative.AsyncStorage = require("react-native").AsyncStorage;

    if (!key) {
        throw new TypeError("Input parameter 'Key' is required");
    }

    if (!objects) {
        throw new TypeError("Input parameter 'Object' is required");
    }

    const attributeObjects = objects.map(object =>
        object.getAttributes().reduce<{ [key: string]: number | boolean | string }>(
            (accumulator, attributeName) => ({
                ...accumulator,
                [attributeName]: object.get(attributeName)
            }),
            {}
        )
    );
    const value = JSON.stringify(attributeObjects);

    return AsyncStorage.setItem(key, value);

    // END USER CODE
}
