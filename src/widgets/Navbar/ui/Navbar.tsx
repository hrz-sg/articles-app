import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames (cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    MAIN
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    ABOUT
                </AppLink>
            </div>
        </div>
    );
};
