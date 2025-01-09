// Layout component
// This component is a wrapper for all pages

import { FC } from "react";
import Header from "./Header";
import ContactFooter from "./ContactFooter";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-gray-000 text-gray-FFF">
            <div className="flex flex-col min-h-screen">
                <Header />
                {children}
                <ContactFooter />
            </div>
        </div>
    );
};

export default Layout;