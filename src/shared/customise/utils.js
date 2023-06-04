export const customiseUpdatedData = () => {
    const currentCustomiseVersion = process.env?.REACT_APP_CUSTOMISE_VERSION
    if (!currentCustomiseVersion) return false

    const storageCustomise = JSON.parse(localStorage.getItem('customise'))
    if (!storageCustomise) return false

    if (storageCustomise?.version !== currentCustomiseVersion) return false

    return storageCustomise.data
}