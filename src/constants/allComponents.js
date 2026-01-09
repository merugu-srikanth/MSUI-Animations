import { BUTTONS } from './buttons';
import { INPUTS } from './inputs';
import { CARDS } from './cards';
import { BADGES } from './badges';
import { DASHBOARDS } from './dashboards';
import { NAVBARS } from './navbar';
import { HEROES } from './hero';
import { WEBS } from './web';
import { EMAIL_TEMPLATES } from './emailTemplates';

export const CATEGORIES = [
    { id: 'all', name: 'All Components' },
    { id: 'button', name: 'Buttons' },
    { id: 'animated-input', name: 'Inputs' },
    { id: 'card', name: 'Cards' },
    { id: 'badge', name: 'Badges' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'hero', name: 'Hero Sections' },
    { id: 'web', name: 'Web Pages' },
];

export const COMPONENTS = [
    ...BUTTONS,
    ...INPUTS,
    ...CARDS,
    ...BADGES,
    ...DASHBOARDS,
    ...NAVBARS,
    ...HEROES,
    ...WEBS,
    ...EMAIL_TEMPLATES,
];
