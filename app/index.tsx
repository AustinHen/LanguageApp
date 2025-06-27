import { Text, SafeAreaView, View } from "react-native";
import { useState } from 'react';



import styles from "./Style"
import NavBar from "./NavBar"

//pages
import HomePage from "./Home"
import LearnPage from "./Learn"
import AccountPage from "./Account"
import BrowsePage from "./Browse"

export enum Pages{
    HomePage,
    BrowsePage,
    LearnPage,
    AccountPage,
}

export default function Index() {
    const [curPage, setCurPage] = useState(Pages.BrowsePage);

    const renderCurPage = () => {
        switch(curPage) {
            case Pages.HomePage:
                return <HomePage/>

            case Pages.BrowsePage:
                return <BrowsePage/>

            case Pages.LearnPage:
                return <LearnPage/>

            case Pages.AccountPage:
                return <AccountPage/>
        }
    }

    return (
        <SafeAreaView style={styles.index}>
            {renderCurPage()}
            <NavBar setCurPage={setCurPage}/>
        </SafeAreaView>


    );
}
