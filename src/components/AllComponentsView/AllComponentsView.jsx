import React, { Suspense } from 'react';
import ButtonsView from '../ComponentViews/ButtonsView';
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
            case 'all':
                return (
                    <div className="space-y-16">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-brand-primary pl-4">Buttons</h2>
                            <ButtonsView searchQuery={searchQuery} />
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-4">Cards</h2>
                            <CardsView searchQuery={searchQuery} />
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">Inputs</h2>
                            <InputsView searchQuery={searchQuery} />
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-pink-500 pl-4">Badges</h2>
                            <BadgeView searchQuery={searchQuery} />
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-green-500 pl-4">Navigation</h2>
                            <NavbarView searchQuery={searchQuery} />
                        </section>
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white border-l-4 border-orange-500 pl-4">Dashboards</h2>
                            <DashboardView searchQuery={searchQuery} />
                        </section>
                    </div>
                );
            case 'button':
                return <ButtonsView searchQuery={searchQuery} />;
            case 'card':
                return <CardsView searchQuery={searchQuery} />;
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
