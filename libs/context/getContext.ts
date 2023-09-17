
import { useContext } from "react";
import { CoreContext } from "@/utils/coreContext";

const getContextData = () => {
    const { coreState, setCoreState }: any = useContext(CoreContext);

    const getTheme = () => {
        console.log('coreState', coreState)
        const theme = coreState.setting.data?.attributes.Theme.data.attributes;
        return theme
    }

    const getPages = () => {
        const pages = coreState.pages.data;
        return pages
    }

    const getPage = (name: string) => {
        const pages = coreState.pages.data;
        const page = pages.find((page: any) => page.attributes.Name === name)
        return page;
    }

    const getHeader = () => {
        const header = coreState.setting.data?.attributes.Header.data.attributes;
        return header
    }

    return {
        getTheme,
        getPages,
        getPage,
        getHeader,

    }
}

export default getContextData;