import React, { Suspense } from 'react';
import ButtonsView from '../ComponentViews/ButtonsView';
import LoadersView from '../ComponentViews/LoadersView';
import CardsView from '../ComponentViews/CardsView';
import InputsView from '../ComponentViews/InputsView';
import DashboardView from '../ComponentViews/DashboardView';
import BadgeView from '../ComponentViews/BadgeView';
import NavbarView from '../ComponentViews/NavbarView';
import HeroView from '../ComponentViews/HeroView';
import WebView from '../ComponentViews/WebView';

// Skeleton Imports (To be created)
import ButtonSkeleton from '../../skeletons/ButtonSkeleton';
import CardSkeleton from '../../skeletons/CardSkeleton';
import DashboardSkeleton from '../../skeletons/DashboardSkeleton';

const AllComponentsView = ({ category, searchQuery }) => {

    const renderView = () => {
        switch (category) {
            case 'button':
                return <ButtonsView searchQuery={searchQuery} />;
            case 'card':
                return <CardsView searchQuery={searchQuery} />;
            case 'loader':
                return <LoadersView searchQuery={searchQuery} />;
            case 'animated-input':
                return <InputsView searchQuery={searchQuery} />;

            // case 'animated-input':
            //     return <InputsView searchQuery={searchQuery} />;
            case 'dashboard':
                return <DashboardView searchQuery={searchQuery} />;
            case 'badge':
                return <BadgeView searchQuery={searchQuery} />;
            case 'navigation':
                return <NavbarView searchQuery={searchQuery} />;
            case 'hero':
                return <HeroView />;
            case 'web':
                return <WebView />;
            default:
                return <ButtonsView searchQuery={searchQuery} />;
        }
    };

    const renderSkeleton = () => {
        switch (category) {
            case 'button': return <ButtonSkeleton />;
            case 'card': return <CardSkeleton />;
            case 'dashboard': return <DashboardSkeleton />;
            case 'input': return <ButtonSkeleton />; // Reuse for now or create specific
            default: return <ButtonSkeleton />;
        }
    };

    return (
        <Suspense fallback={renderSkeleton()}>
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                {renderView()}
            </div>
        </Suspense>
    );
};

export default AllComponentsView;
