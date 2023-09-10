
import { useContext } from "react";
import { CoreContext } from "@/utils/coreContext";

const getContextData = () => {
    const { coreState, setCoreState }: any = useContext(CoreContext);
    const theme = coreState.setting.data.attributes.theme.data.attributes;
    const pages = coreState.pages.data;

    const getTheme = () => {
        return theme
    }

    const getPages = () => {
        return pages
    }

    const getPage = (name: string) => {
        const page = pages.find((page: any) => page.attributes.Name === name)
        return page;
    }

    return {
        getTheme,
        getPages,
        getPage

    }
}

export default getContextData;